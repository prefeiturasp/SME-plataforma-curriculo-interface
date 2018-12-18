import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from 'components/layout/Page';
import iconKnowledgeMatrix from 'images/illustrations/knowledgeMatrix.svg';
import iconLearningObjectives from 'images/illustrations/learningObjectives.svg';
import iconSustainableDevGoals from 'images/illustrations/sustainableDevGoals.svg';
import imgCurriculum from './curriculum.jpg';
import styles from './Curriculum.scss';

class Curriculum extends Component {
  render() {
    return (
      <Page>
        <header className={styles.header}>
          <div className={styles.image}>
            <h1>Sobre o Currículo da Cidade de São Paulo</h1>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p className={styles.doubleLineHeight}>
                O Currículo da Cidade de São Paulo foi criado a muitas mãos a
                partir dos conhecimentos produzidos e das práticas realizadas
                pelas professoras e professores da Rede Municipal de Ensino ao
                longo dos últimos anos. O movimento de atualização do
                currículo envolveu mais de 43 mil estudantes e 16 mil
                professores ao longo de 2017, em paralelo às discussões sobre
                a Base Nacional Comum Curricular (BNCC) que se faziam
                nacionalmente, de forma a ser a primeira cidade a lançar o
                documento em sua versão já alinhada às diretrizes nacionais.
                Conheça abaixo sua estrutura e navegue pela versão interativa.
              </p>
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.slogan}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p className={styles.doubleLineHeight}>
                O direito à educação implica a garantia das condições e
                oportunidades necessárias para que os estudantes tenham acesso
                a uma formação indispensável para a sua realização pessoal,
                formação para a vida produtiva e pleno exercício da cidadania.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <ul className={styles.list}>
          <li className={styles.sustainableDevGoals}>
            <NavLink to="/ods">
              <img
                src={iconSustainableDevGoals}
                alt="Objetivos de Desenvolvimento Sustentável (ODS)"
              />
              <h2>Objetivos de Desenvolvimento Sustentável (ODS)</h2>
            </NavLink>
            <p className={styles.doubleLineHeight}>
              O Currículo da Cidade foi um dos primeiros do mundo a se alinhar
              aos ODS da Organização das Nações Unidas. Os 17 objetivos e 169
              metas buscam concretizar os direitos humanos de todos e alcançar
              a igualdade de gênero. Aqui você pode conhecê-los em detalhe,
              além de encontrar as sequências didáticas relacionadas.
            </p>
            <NavLink className={styles.btn} to="/ods">
              Explore e encontre sequências
            </NavLink>
          </li>
          <li className={styles.knowledgeMatrix}>
            <NavLink to="/matriz-de-saberes">
              <img src={iconKnowledgeMatrix} alt="Matriz de Saberes" />
              <h2>Matriz de Saberes</h2>
            </NavLink>
            <p className={styles.doubleLineHeight}>
              A Matriz de Saberes tem como propósito formar cidadãos éticos,
              responsáveis e solidários que fortaleçam uma sociedade mais
              inclusiva, democrática, próspera e sustentável. Aqui você pode
              conhecer as dimensões da matriz e encontrar as sequências
              relacionadas.
            </p>
            <NavLink className={styles.btn} to="/matriz-de-saberes">
              Explore e encontre sequências
            </NavLink>
          </li>
          <li className={styles.learningObjectives}>
            <NavLink to="/objetivos-de-aprendizagem">
              <img
                src={iconLearningObjectives}
                alt="Objetivos de Aprendizagem"
              />
              <h2>Objetivos de Aprendizagem</h2>
            </NavLink>
            <p className={styles.doubleLineHeight}>
              No Currículo da Cidade, os objetivos de aprendizagem e
              desenvolvimento orientam-se pela Educação Integral a partir da
              matriz de saberes e indicam o que os estudantes devem alcançar a
              cada ano como resultado das experiências de ensino e de
              aprendizagem intencionalmente previstas para esse fim.
            </p>
            <NavLink
              className={styles.btn}
              to="/objetivos-de-aprendizagem"
            >
              Explore e encontre sequências
            </NavLink>
          </li>
        </ul>
      </Page>
    );
  }
}

export default Curriculum;
