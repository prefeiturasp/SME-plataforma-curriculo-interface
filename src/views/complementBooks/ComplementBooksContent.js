import React from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
import {isMobile} from 'react-device-detect';
import chevronRight from 'images/chevrons/right.svg';
import chevronLeft from 'images/chevrons/left.svg';
import downloadIcon from 'images/icons/download.svg';
import styles from './ComplementBooksContent.scss'


class ComplementBooksContent extends React.PureComponent {

  state = { activeItemIndex: 0 };
  
  checkDevice() {
    return isMobile ? (true) : (false);
  }
  
  totalCards() {
    if(this.checkDevice()){
      return 1;
    }else {
      return 5;
    }
  }

  downloadFile = async (e, url, filename) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    const options = { 
      method: "GET",
      headers: { "Content-Type": "application/json",'Authorization': accessToken},
    }
    var result = fetch(url, options)
      .then(response => response.blob())
      .then(response => {
        if (!window.confirm('Deseja gerar arquivo?')) {
          e.stopPropagation();
        } else {
          var url = window.URL.createObjectURL(response);
          var a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      })
      .catch(error =>
        console.log(`Ocorreu um erro: ${error}`)
      );
  }
  
  render() {
    const { complementBooks, partner } = this.props;
        
    const books = complementBooks.filter((book) => {
      if (book["partner"].name == partner) {
        return book
      }
    })

    if(books.length) {
      return (
        <div>
          {/* <div><h3>{stage}</h3></div> */}
          <ItemsCarousel
          infiniteLoop={!this.checkDevice()}
          gutter={12}
          activePosition={'center'}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={this.totalCards()}
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
            return(
              <div className={styles.bookWraper} key={index.toString()}>
                <img className={styles.bookImage} alt="" src={book["cover_image"]}></img>
                <ul className={styles.titleList}>
                  <li><span className={styles.componentName}>{book["name"]}</span></li>
                </ul>
                <span className={styles.name}>Autor(a): {book["author"]}</span>
                <hr className={styles.line}></hr>
                <div className={styles.fileWrapper}>
                  <a href="#" onClick={(e) => this.downloadFile(e, book["book_file"], book["name"])}>
                    baixar material <img className={styles.file} alt="" src={downloadIcon}/>
                  </a>
                </div>
                <hr className={styles.line}></hr>
                <ul className={styles.componentList}>
                {book["complement_book_links"].map((link, idx) => {
                  return(
                    <a key={idx.toString()} target="_blank" href={link["link"]}><li className={styles.componentLink}>{"link " + (idx + 1)}</li></a>
                  );
                })}
                </ul>
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
  }
}

ComplementBooksContent.propTypes = {
  complementBooks: PropTypes.array.isRequired,
  partner: PropTypes.string.isRequired,
};

export default ComplementBooksContent;
