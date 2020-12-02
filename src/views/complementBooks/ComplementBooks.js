import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import Home from 'views/home/Home';
import styles from './ComplementBooks.scss';
import ComplementBooksContent from 'components/ComplementBooksContent';
import { API_URL } from 'data/constants';

function onlyUnique(value, index, self) {
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
        <h1 className={styles.title}>Materiais Complementares para RME-SP</h1>
        <div className="row">
          <div className="col-8 col-offset-4">
            <p className={styles.contentText}>
            Os materiais publicados nessa página foram cedidos gratuitamente
            por parceiros e são para uso exclusivo com os estudantes das
            Unidades Escolares da RME-SP.
            </p>
            <p className={styles.contentText}>
            Para baixá-los, basta clicar no botão para download
            (seta no canto inferior direito de cada imagem/arquivo).
            Alguns arquivos darão acesso para links com materiais exclusivos.
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
