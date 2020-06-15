import chevronRight from 'images/chevrons/right.svg';
import chevronLeft from 'images/chevrons/left.svg';
import downloadIcon from 'images/icons/download.svg';
import ItemsCarousel from 'react-items-carousel';
import styles from './ConsultationsContent.scss';
import { NavLink } from 'react-router-dom';
import createModalLink from 'utils/createModalLink';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import { API_URL } from 'data/constants';
import {isMobile} from 'react-device-detect';
import iconMinus from 'images/icons/minus.svg';
import iconPlus from 'images/icons/plus1.svg';

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

class ConsutationsContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      activeItemIndex: 0
    };
  }

  render() {

    const linkModal = createModalLink(`/consultas-publicas/1`)
    const consultations = this.props.consultations.filter((consultation) => {
      if (this.props.segment == consultation.segment) {
        return consultation
      }
    })
    if(consultations.length) {
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
          {consultations.map((consultation, index) => {
            return(
              <div className={styles.consultationsWraper} key={index.toString()}>
                <img className={styles.consultationsImage} alt="" src={consultation["cover_image"]}></img>
                <p className={styles.name}>{consultation["title"]}</p>
                <hr className={styles.carouselDivider}/>
                <NavLink to={linkModal}>
                  <div className={styles.modalButton}>
                    <img src={iconPlus}></img>
                  </div>
                </NavLink>
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
export default connect()(ConsutationsContent);
