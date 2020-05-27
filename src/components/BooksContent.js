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
      books: [],
      isLoading: false,
      activeItemIndex: 0
    };
  }


  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API_URL + "/api/answer_books?stage_id=" + this.props.stage['id'])
      .then(response => response.json())
      .then(data => this.setState({ books: data }))

  }

  render() {
    if(this.state.books.length) {
      return (
        <div>
          <h1 className={styles.carouselTitle}>{this.props.segment_name}</h1>
          <div className="container">
            <h4>{this.props.stage['name']}</h4>
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
            {this.state.books.map((book, index) => {
              return(
                <div className={styles.bookWraper} key={index.toString()}>
                <img className={styles.bookImage} alt="" src={book["cover_image"]}></img>
                <h4 className={styles.componentName}>{book["curricular_component"]}</h4>
                <hr className={styles.line}></hr>
                <label className={styles.year}>{book["year"]}</label>
                <a href={book["book_file"]}>
                  <img className={styles.file} alt="" src={downloadIcon}/>
                </a>
                </div>
              );
            })}
            </ItemsCarousel>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  };
};
export default connect()(BooksContent);
