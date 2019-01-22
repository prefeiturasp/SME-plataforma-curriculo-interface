import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BigSequencePreview from 'views/sequence/BigSequencePreview';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import Question from './Question';
import SequenceActions from 'actions/SequenceActions';
import SequencePreview from 'views/activity/SequencePreview';
import styles from './RateSequence.scss';
import styles1 from 'views/sequence/BigSequencePreview.scss';

const PER_PAGE = 3;

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
    const { currPage, numPages } = this.state;
    if (currPage < numPages - 1) {
      this.setState({
        ...this.state,
        currPage: currPage + 1,
      });
    } else {
    }
  };

  componentDidMount() {
    if (!this.props.data) {
      this.props.load(this.props.match.params.slug);
    }
    this.setState({
      ...this.state,
      numPages: Math.ceil(this.props.questions.length / PER_PAGE),
    });
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { data, questions } = this.props;
    const { currPage, numPages } = this.state;
    const startIndex = currPage * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;

    const items = questions.slice(startIndex, endIndex).map((question, i) => {
      return <Question key={i} {...question} onChange={this.onChangedAnswer} />;
    });

    const label = currPage < numPages - 1 ? 'Próximo' : 'Concluir';

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Avaliar sequência" />
          <div className={styles1.row}>
            <div className={styles1.col1}>
              <BigSequencePreview sequence={data} />
            </div>
            <div className={styles1.col2}>
              <div className={styles1.small}>
                <SequencePreview sequence={data} />
              </div>
              <div className={styles.list}>
                {items}
                <p className={styles.page}>
                  {currPage + 1} / {numPages}
                </p>
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
  rate: PropTypes.func.isRequired,
};

RateSequence.defaultProps = {
  questions: [
    {
      id: 1,
      title: 'Como você avalia a qualidade do conteúdo?',
    },
    {
      id: 2,
      title: 'E a metodologia aplicada?',
    },
    {
      id: 3,
      title:
        'Qual foi o nível de envolvimento dos estudantes com as atividades?',
    },
    {
      id: 4,
      title: 'Como você avalia a qualidade do conteúdo?',
    },
    {
      id: 5,
      title: 'E a metodologia aplicada?',
    },
    {
      id: 6,
      title:
        'Qual foi o nível de envolvimento dos estudantes com as atividades?',
    },
    {
      id: 7,
      title: 'Como você avalia a qualidade do conteúdo?',
    },
    {
      id: 8,
      title: 'E a metodologia aplicada?',
    },
    {
      id: 9,
      title:
        'Qual foi o nível de envolvimento dos estudantes com as atividades?',
    },
  ],
};

const mapStateToProps = state => {
  return {
    data: state.SequenceReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(SequenceActions.load(slug));
    },
    rate: () => {},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateSequence);
