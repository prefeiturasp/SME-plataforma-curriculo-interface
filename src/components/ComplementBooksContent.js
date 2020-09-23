import chevronRight from 'images/chevrons/right.svg';
import chevronLeft from 'images/chevrons/left.svg';
import downloadIcon from 'images/icons/download.svg';
import ItemsCarousel from 'react-items-carousel';
import styles from './ComplementBooksContent.scss';
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

class ComplementBooksContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      activeItemIndex: 0
    };
  }

  render() {
    const books = this.props.complementBooks.filter((book) => {
      if (book["partner"].name == this.props.partner) {
        return book
      }
    })
    if(books.length) {
      return (
        <div>
          <div><h3>{this.props.stage}</h3></div>
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
            return(
              <div className={styles.bookWraper} key={index.toString()}>
                <img className={styles.bookImage} alt="" src={book["cover_image"]}></img>
                <ul className={styles.titleList}>
                  <li><span className={styles.componentName}>{book["name"]}</span></li>
                </ul>
                <span className={styles.name}>Autor(a): {book["author"]}</span>
                <hr className={styles.line}></hr>
                <div className={styles.fileWrapper}>
                  <a href={book["book_file"]}>
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
  };
};
export default connect()(ComplementBooksContent);
