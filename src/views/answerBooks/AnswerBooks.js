import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import AnswerBooksActions from 'actions/AnswerBooksActions';
import BodyActions from 'actions/BodyActions';
import StageContent from './StageContent';
import styles from './AnswerBooks.scss';

class AnswerBooks extends Component {

  componentDidMount() {
    this.props.load();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  render() {
    const { books, segments, stages, years } = this.props;
    const usedSegments = books.map(book => book.segment).filter(this.onlyUnique).sort();
    const segmentBooks = segments.filter((segment) => {
      if (usedSegments.includes(segment.name)){
        return true
      }
    }).map(segment => segment.name)

    return(
      <Page>
        <div className="container">
          <h1 className={styles.title}>Currículo da cidade</h1>
          <div className="row">
            <div className="col-8 col-offset-4">
              <p className={styles.contentText}>
              Desenhado por meio de um processo colaborativo, com o apoio de
              professores da rede municipal, a plataforma
              "Currículo Digital da Cidade de São Paulo" transforma o Currículo em
              um material vivo e dinâmico, disponível on-line para consulta,
              inspiração e aplicação em sala de aula.
              </p>
              <p className={styles.contentText}>
              Abaixo, confira todos os documentos pedagógicos que integram o
              Currículo da Cidade na Rede Municipal de Educação Paulistana.
            </p>
            </div>
            <br></br>
          </div>
          {segmentBooks.map((segment, index) => {
            return (
              <div key={index} >
                <h1 className={styles.segmentName}>{segment}</h1>
                <StageContent 
                  segment={segment}
                  stages={stages}
                  years={years}
                  books={books}
                  onlyUnique={this.onlyUnique}
                />
              </div>
            );
          })}
        </div>
      </Page>
    );
  }
};

AnswerBooks.propTypes = {
  books: PropTypes.array.isRequired,
  segments: PropTypes.array.isRequired,
  stages: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    books: state.AnswerBooksReducer.books,
    segments: state.AnswerBooksReducer.segments,
    stages: state.AnswerBooksReducer.stages,
    years: state.AnswerBooksReducer.years,
    isSearching: state.AnswerBooksReducer.isSearching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(AnswerBooksActions.load());
      dispatch(AnswerBooksActions.loadSegments());
      dispatch(AnswerBooksActions.loadStages());
      dispatch(AnswerBooksActions.loadYears());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerBooks);
