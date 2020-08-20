import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import Home from 'views/home/Home';
import styles from './ComplementBooks.scss';
import ComplementBooksContent from 'components/ComplementBooksContent';
import { API_URL } from 'data/constants';

function onlyUnique(value, index, self) {
    console.log(self.indexOf(value))
    return self.indexOf(value) === index;
}



class ComplementBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      complementBooks: [],
      isLoading: false,
      activeItemIndex: 0
    };
  }

  componentDidMount() {
    fetch(API_URL + "/api/complement_books")
      .then(response => response.json())
      .then(data => this.setState({ complementBooks: data }))
  }

  render() {
    let partners = this.state.complementBooks.map(complementBook => complementBook.partner);


    partners = partners.filter((partner, index, self) =>
      index === self.findIndex((p) => (
        p.id === partner.id && p.name === partner.name
      ))
    )
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
        {partners.map((partner, index) => {
          return (
            <div key={index} >
              <h1>{partner.name}</h1>
              <p>{partner.description}</p>
              <ComplementBooksContent partner={partner.name} complementBooks={this.state.complementBooks}></ComplementBooksContent>
            </div>
          );
        })}
      </div>
    );
    return (localStorage.getItem('accessToken') ? <Page>{contents}</Page> : <Home></Home>);
  }
};
export default connect()(ComplementBooks);
