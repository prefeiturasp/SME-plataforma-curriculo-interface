import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BigPreview from 'views/sequence/BigPreview';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import Question from './Question';
import RatingActions from 'actions/RatingActions';
import SequenceActions from 'actions/SequenceActions';
import SequencePreview from 'views/activity/SequencePreview';
import styles from './RateSequence.scss';
import styles1 from 'views/sequence/save/SaveSequence.scss';

class RateSequence extends Component {
  state = {
    answers: {},
    currPage: 0,
    numPages: 1,
  };

  onChangedAnswer = (id, value) => {
    const newAnswers = Object.assign({}, this.state.answers);
    newAnswers[id] = value;

    this.setState({
      ...this.state,
      answers: newAnswers,
    });
  };

  onClickedNext = () => {
    // const { currPage, numPages } = this.state;
    // if (currPage < numPages - 1) {
    //   this.setState({
    //     ...this.state,
    //     currPage: currPage + 1,
    //   });
    // } else {
    this.props.save(this.props.match.params.slug, this.state.answers);
    // }
  };

  componentDidMount() {
    if (!this.props.data) {
      this.props.load(this.props.match.params.slug);
    }

    if (!this.props.questions.length) {
      this.props.loadQuestions();
    }

    // this.setState({
    //   ...this.state,
    //   numPages: Math.ceil(this.props.questions.length / PER_PAGE),
    // });
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { data, questions } = this.props;
    const { currPage, numPages } = this.state;

    const items = questions.map((question, i) => {
      return <Question key={i} {...question} onChange={this.onChangedAnswer} />;
    });

    const label = currPage < numPages - 1 ? 'Próximo' : 'Concluir';

    const pagination =
      numPages > 1 ? (
        <p className={styles.page}>
          {currPage + 1} / {numPages}
        </p>
      ) : null;

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Avaliar sequência" />
          <div className={styles1.row}>
            <div className={styles1.col1}>
              <BigPreview data={data} />
            </div>
            <div className={styles1.col2}>
              <div className={styles1.small}>
                <SequencePreview sequence={data} />
              </div>
              <div className={styles.list}>
                {items}
                {pagination}
              </div>
            </div>
          </div>
          <ModalFooter label={label} onClick={this.onClickedNext} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

RateSequence.propTypes = {
  data: PropTypes.object,
  questions: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
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
    save: (slug, answers) => {
      dispatch(RatingActions.save(slug, answers));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateSequence);
