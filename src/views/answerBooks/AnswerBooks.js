import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import Home from 'views/home/Home';
import styles from './AnswerBooks.scss';
import CarouselContent from 'components/CarouselContent';

class AnswerBooks extends Component {
  render() {
    const contents = (
      <div className="container">
        <br></br>
        <h1 className={styles.title}>Currículo da cidade</h1>
        <br></br>
        <div className="row">
          <div className="col-8 col-offset-4">
            <p className={styles.contentText}>
            Desenhado por meio de um processo colaborativo, com o apoio de
            professores da rede municipal, a plataforma
            "Currículo Digital da Cidade de São Paulo" transforma o Currículo em
            um material vivo e dinâmico, disponível on-line para consulta,
            inspiração e aplicação em sala de aula. Para acessar o Currículo
            Digital da Cidade, clique aqui.
            </p>
            <p className={styles.contentText}>
            Abaixo, confira todos os documentos pedagógicos que integram o
            Currículo da Cidade na Rede Municipal de Educação Paulistana.
          </p>
          </div>
        </div>
        <br></br>
        <div><CarouselContent title="Educação Infantil" level="kid"></CarouselContent></div>
        <br></br>
        <div><CarouselContent title="Educação Especial" level="special"></CarouselContent></div>
        <br></br>
        <div><CarouselContent title="Ensino Fundamental" level="basic"></CarouselContent></div>
        <br></br>
        <div><CarouselContent title="Educação para Jovens e Adultos" level="eja"></CarouselContent></div>
        <br></br>
        <div><CarouselContent title="Orientações Didáticas" level="guide"></CarouselContent></div>
        <br></br>

      </div>
    );
    return (sessionStorage.getItem('accessToken') ? <Page>{contents}</Page> : <Home></Home>);
  }
};
export default connect()(AnswerBooks);
