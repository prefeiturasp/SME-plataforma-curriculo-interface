import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BigSequencePreview from 'views/sequence/BigSequencePreview';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import Question from 'views/sequence/rate/Question';
import RatingActions from 'actions/RatingActions';
import SequenceActions from 'actions/SequenceActions';
import SequencePreview from 'views/activity/SequencePreview';
import styles from 'views/sequence/rate/RateSequence.scss';
import styles1 from 'views/sequence/BigSequencePreview.scss';

class Rating extends Component {
  state = {
    answers: {},
  };

  onClickedNext = () => {};

  componentDidMount() {
    if (!this.props.data) {
      this.props.load(this.props.match.params.slug);
    }

    if (!this.props.questions.length) {
      this.props.loadQuestions();
    }
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { data, questions } = this.props;

    const items = questions.map((question, i) => {
      return <Question key={i} value={i} isDisabled {...question} />;
    });

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Avaliação da sequência" />
          <div className={styles1.row}>
            <div className={styles1.col1}>
              <BigSequencePreview sequence={data} />
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
  questions: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequenceReducer.currItem,
    questions: state.RatingReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(SequenceActions.load(slug));
    },
    loadQuestions: () => {
      dispatch(RatingActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rating);
