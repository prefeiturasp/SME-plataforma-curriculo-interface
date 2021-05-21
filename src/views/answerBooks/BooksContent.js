import React from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
import {isMobile} from 'react-device-detect';
import chevronRight from 'images/chevrons/right.svg';
import chevronLeft from 'images/chevrons/left.svg';
import downloadIcon from 'images/icons/download.svg';
import styles from './BooksContent.scss'


class BooksContent extends React.PureComponent {

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
    const { books, year } = this.props;
        
    const usedBooks = books.filter((book) => {
      if (year == book.year) {
        return book
      }
    })

    if(usedBooks.length) {
      return (
        <div>
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
          {usedBooks.map((book, index) => {
            return(
              <div className={styles.bookWraper} key={index.toString()}>
                <img className={styles.bookImage} alt="" src={book["cover_image"]}></img>
                <p className={styles.name}>{book["name"]}</p>
                <hr className={styles.line}></hr>
                <a href="#" onClick={(e) => this.downloadFile(e, book["book_file"], book["name"])}>
                  <div className={"row " + styles.downloadWrapper}>
                    <div className="col-10 pr-0 d-flex justify-content-start">
                      <span className={"align-self-center " + styles.componentName}>{book["curricular_component"]}</span>
                    </div>
                    <div className="col-2 pl-0 d-flex justify-content-end">
                      <img className={styles.file} alt="" src={downloadIcon}/>
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
  }
}

BooksContent.propTypes = {
  books: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired,
};

export default BooksContent;
