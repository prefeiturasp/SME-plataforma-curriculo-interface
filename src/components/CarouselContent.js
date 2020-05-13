import chevronRight from 'images/chevrons/right.svg';
import chevronLeft from 'images/chevrons/left.svg';
import { connect } from 'react-redux';
import downloadIcon from 'images/icons/download.svg';
import ItemsCarousel from 'react-items-carousel';
import React, {Component} from 'react';
import styles from './CarouselContent.scss';
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

class CarouselContent extends Component {
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
    fetch(API_URL + "/api/answer_books?segment_name=" + this.props.segmentName)
      .then(response => response.json())
      .then(data => this.setState({ books: data }))
  }

  render() {
    if(this.state.books.length !== 0) {
      return (
        <div className={styles.carouselBook}>
          <p>{this.state.isLoading}</p>
          <h2 className={styles.carouselTitle}>{this.props.title}</h2>
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
          <br></br>
        </div>
      );
    } else {
      return (
        <div></div>
      );

    }
  }
};
export default connect()(CarouselContent);
