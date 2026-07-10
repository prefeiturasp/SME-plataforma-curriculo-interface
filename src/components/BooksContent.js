import chevronRight from 'images/chevrons/right.svg';
import chevronLeft from 'images/chevrons/left.svg';
import downloadIcon from 'images/icons/download.svg';
import ItemsCarousel from 'react-items-carousel';
import styles from './BooksContent.scss';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import { API_URL } from 'data/constants';
import {isMobile} from 'react-device-detect';

function checkDevice() {
  return isMobile ? (true) : (false);
}

function totalCards() {
  if(checkDevice()){
    return 1;
  }else {
    return 5;
  }
}

class BooksContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      activeItemIndex: 0,
      // Novo estado para controlar o download
      isDownloading: null // Pode ser null, ou o ID do livro que está sendo baixado, ou um booleano
    };
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload = async (fileUrl, fileName, bookId) => {
    // Define o estado de download para o ID do livro atual
    this.setState({ isDownloading: bookId });

    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao tentar baixar o arquivo:', error);
      alert('Não foi possível baixar o arquivo. Por favor, tente novamente.');
    } finally {
      // Garante que o estado de download seja resetado, mesmo em caso de erro
      this.setState({ isDownloading: null });
    }
  };

  render() {
    const books = this.props.books.filter((book) => {
      if (this.props.year == book.year) {
        return book
      }
    })
    if(books.length) {
      return (
        <div>
          <ItemsCarousel
          infiniteLoop={!checkDevice()}
          gutter={12}
          activePosition={'center'}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={totalCards()}
          slidesToScroll={1}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value => this.setState({ activeItemIndex: value })}
          rightChevron={
            <button>
            <img alt="" src={chevronRight}/>
            </button>
          }
          leftChevron={
            <button>
            <img alt="" src={chevronLeft}/>
            </button>
          }
          >
          {books.map((book, index) => {
            const fileName = book["book_file"].split('/').pop();
            // Verifica se este livro específico está sendo baixado
            const isThisBookDownloading = this.state.isDownloading === book.id; // Assumindo que 'book.id' é um identificador único
            return(
              <div className={styles.bookWraper} key={index.toString()}>
                <img className={styles.bookImage} alt="" src={book["cover_image"]}></img>
                <p className={styles.name}>{book["name"]}</p>
                <hr className={styles.line}></hr>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Passa o ID do livro para a função de download
                    this.handleDownload(API_URL + book["book_file"], fileName, book.id);
                  }}
                  // Desabilita o link se este livro estiver sendo baixado
                  style={{ pointerEvents: isThisBookDownloading ? 'none' : 'auto', opacity: isThisBookDownloading ? 0.6 : 1 }}
                >
                  <div className={"row " + styles.downloadWrapper}>
                    <div className="col-10 pr-0 d-flex justify-content-start">
                      <span className={"align-self-center " + styles.componentName}>
                        {/* Mostra "Baixando..." ou o nome do componente */}
                        {isThisBookDownloading ? 'Baixando...' : book["curricular_component"]}
                      </span>
                    </div>
                    <div className="col-2 pl-0 d-flex justify-content-end">
                      {/* Opcional: Mudar o ícone ou adicionar um spinner */}
                      {isThisBookDownloading ? (
                        // Você pode substituir isso por um spinner CSS ou um ícone de carregamento
                        <span style={{ fontSize: '1.2em' }}>⏳</span>
                      ) : (
                        <img className={styles.file} alt="" src={downloadIcon}/>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
          </ItemsCarousel>
        </div>
      );
    } else {
      return(
        <div>
        </div>
      );
    }
  };
};
export default connect()(BooksContent);