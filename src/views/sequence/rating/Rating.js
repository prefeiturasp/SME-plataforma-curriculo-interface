import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import BigPreview from 'views/sequence/BigPreview';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import Question from 'views/sequence/rate/Question';
import SequenceActions from 'actions/SequenceActions';
import SequencePreview from 'views/activity/SequencePreview';
import styles from 'views/sequence/rate/RateSequence.scss';
import styles1 from 'views/sequence/save/SaveSequence.scss';

class Rating extends Component {
  onClickedClose = () => {
    history.goBack();
  };

  componentDidMount() {
    if (!this.props.data) {
      this.props.load(this.props.match.params.slug);
    }

    this.props.loadRatings(this.props.match.params.slug);
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { data, ratings } = this.props;

    const items = ratings.map((rating, i) => {
      return <Question key={i} value={i} isDisabled {...rating} />;
    });

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Avaliação da sequência" />
          <div className={styles1.row}>
            <div className={styles1.col1}>
              <BigPreview data={data} />
            </div>
            <div className={styles1.col2}>
              <div className={styles1.small}>
                <SequencePreview sequence={data} />
              </div>
              <div className={styles.list}>{items}</div>
            </div>
          </div>
          <ModalFooter label="Fechar" onClick={this.onClickedClose} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

Rating.propTypes = {
  data: PropTypes.object,
  ratings: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
};

Rating.defaultProps = {
  ratings: [],
};

const mapStateToProps = state => {
  return {
    data: state.SequenceReducer.currItem,
    // ratings: state.SequenceReducer.ratings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(SequenceActions.load(slug));
    },
    loadRatings: slug => {
      // dispatch(SequenceActions.loadRatings(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rating);
