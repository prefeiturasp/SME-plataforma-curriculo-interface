import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import Home from 'views/home/Home';
import styles from './AnswerBooks.scss';
import StageContent from 'components/StageContent';
import { API_URL } from 'data/constants';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

class AnswerBooks extends Component {

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
    fetch(API_URL + "/api/answer_books")
      .then(response => response.json())
      .then(data => this.setState({ books: data }))
  }

  render() {
    const segments = this.state.books.map(book => book.segment).filter(onlyUnique).sort();
    const contents = (
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
        {segments.map((segment, index) => {
          return (
            <div key={index} >
              <h1 className={styles.segmentName}>{segment}</h1>
              <StageContent segment={segment} books={this.state.books}></StageContent>
            </div>
          );
        })}
      </div>
    );
    return (localStorage.getItem('accessToken') ? <Page>{contents}</Page> : <Home></Home>);
  }
};
export default connect()(AnswerBooks);
