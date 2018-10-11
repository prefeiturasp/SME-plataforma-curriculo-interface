import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import iconKnowledgeMatrix from '../../images/iconKnowledgeMatrix.svg';
import iconLearningObjectives from '../../images/iconLearningObjectives.svg';
import iconSustainableDevGoals from '../../images/iconSustainableDevGoals.svg';
import imgCurriculum from '../../images/imgCurriculum.jpg';
import styles from './Curriculum.css';

class Curriculum extends Component {
  render() {
    const style = { backgroundImage: `url(${imgCurriculum})` };

    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.image} style={style}>
            <h1>Sobre o Currículo da Cidade de São Paulo</h1>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>O Currículo da Cidade de São Paulo foi criado a muitas mãos a partir dos conhecimentos produzidos e das práticas realizadas pelas professoras e professores da Rede Municipal de Ensino ao longo dos últimos anos. O movimento de atualização do currículo envolveu mais de 43 mil estudantes e 16 mil professores ao longo de 2017, em paralelo às discussões sobre a Base Nacional Comum Curricular (BNCC) que se faziam nacionalmente, de forma a ser a primeira cidade a lançar o documento em sua versão já alinhada às diretrizes nacionais. Conheça abaixo sua estrutura e navegue pela versão interativa.</p>
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.slogan}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>O direito à educação implica a garantia das condições e oportunidades necessárias para que os estudantes tenham acesso a uma formação indispensável para a sua realização pessoal, formação para a vida produtiva e pleno exercício da cidadania.</p>
            </div>
          </div>
        </div>
        <hr />
        <ul className={styles.list}>
          <li className={styles.sustainableDevGoals}>
            <img src={iconSustainableDevGoals} alt="Objetivos de Desenvolvimento Sustentável (ODS)" />
            <h2>Objetivos de Desenvolvimento Sustentável (ODS)</h2>
            <p>O Currículo da Cidade foi um dos primeiros do mundo a se alinhar aos ODS da Organização das Nações Unidas. Os 17 objetivos e 169 metas buscam concretizar os direitos humanos de todos e alcançar a igualdade de gênero. Aqui você pode conhecê-los em detalhe, além de encontrar as sequências didáticas relacionadas.</p>
            <NavLink className={styles.button} to="/ods">Explore e encontre sequências</NavLink>
          </li>
          <li className={styles.knowledgeMatrix}>
            <img src={iconKnowledgeMatrix} alt="Matriz de Saberes" />
            <h2>Matriz de Saberes</h2>
            <p>A Matriz de Saberes tem como propósito formar cidadãos éticos, responsáveis e solidários que fortaleçam uma sociedade mais inclusiva, democrática, próspera e sustentável. Aqui você pode conhecer as dimensões da matriz e encontrar as sequências relacionadas.</p>
            <NavLink className={styles.button} to="/matriz-de-saberes">Explore e encontre sequências</NavLink>
          </li>
          <li className={styles.learningObjectives}>
            <img src={iconLearningObjectives} alt="Objetivos de Aprendizagem" />
            <h2>Objetivos de Aprendizagem</h2>
            <p>No Currículo da Cidade, os objetivos de aprendizagem e desenvolvimento orientam-se pela Educação Integral a partir da matriz de saberes e indicam o que os estudantes devem alcançar a cada ano como resultado das experiências de ensino e de aprendizagem intencionalmente previstas para esse fim.</p>
            <NavLink className={styles.button} to="/objetivos-de-aprendizagem">Explore e encontre sequências</NavLink>
          </li>
        </ul>
      </section>
    );
  }
}

export default Curriculum;
