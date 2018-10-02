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
              <p className={styles.doubleLineHeight}>O Currículo da Cidade busca alinhar as orientações curriculares do Munícipio de São Paulo ao processo de construção da Base Nacional Comum Curricular (BNCC), documento que define as aprendizagens essenciais a que todos os estudantes brasileiros têm direito ao longo da Educação Básica. A BNCC estrutura-se com foco em conhecimentos, habilidades, atitudes e valores para promover o desenvolvimento integral dos estudantes e a sua atuação na sociedade. Sua implementação acontece por meio da construção de currículos locais, de responsabilidade das redes de ensino e escolas, que têm como autonomia para organizar seus percursos formativos a partir da sua própria realidade, incorporando as diversidades regionais e subdisiando a forma como as aprendizagens serão desenvolvidas em cada contexto escolar.</p>
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.slogan}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p className={styles.doubleLineHeight}>O direito à educação implica a garantia das condições e oportunidades necessárias para que os estudantes tenham acesso a uma formação indispensável para a sua realização pessoal, formação para a vida produtiva e pleno exercício da cidadania.</p>
            </div>
          </div>
        </div>
        <hr />
        <ul className={styles.list}>
          <li className={styles.sustainableDevGoals}>
            <NavLink to="/ods">
              <img src={iconSustainableDevGoals} alt="Objetivos de Desenvolvimento Sustentável (ODS)" />
            </NavLink>
            <h2>Objetivos de Desenvolvimento Sustentável (ODS)</h2>
            <p className={styles.doubleLineHeight}>Os 17 objetivos de Desenvolvimento Sustável e 169 metas que estamos anunciando hoje demonstram a escala e a ambição desta nova agenda universal. Eles buscam concretizar os direitos humano de todos e alcançar a igualdade de gênero e o empoderamento das mulheres e meninas.</p>
            <NavLink className={styles.button} to="/ods">Explore e encontre sequências</NavLink>
          </li>
          <li className={styles.knowledgeMatrix}>
            <NavLink to="/matriz-de-saberes">
              <img src={iconKnowledgeMatrix} alt="Matriz de Saberes" />
            </NavLink>
            <h2>Matriz de Saberes</h2>
            <p className={styles.doubleLineHeight}>A Matriz de Saberes tem como próposito:<br />Formar cidadãos éticos, responsáveis e solidários que fortaleçam uma sociedade mais inclusiva, democrática, próspera e sustentável.</p>
            <NavLink className={styles.button} to="/matriz-de-saberes">Explore e encontre sequências</NavLink>
          </li>
          <li className={styles.learningObjectives}>
            <NavLink to="/objetivos-de-aprendizagem">
              <img src={iconLearningObjectives} alt="Objetivos de Aprendizagem" />
            </NavLink>
            <h2>Objetivos de Aprendizagem</h2>
            <p className={styles.doubleLineHeight}>No Currículo da Cidade, os objetivos de aprendizagem e desenvolvimento orientam-se pela Educação Integral a partir da matriz de saberes e indicam o que os estudantes devem alcançar a cada ano como resultado das experiências de ensino e de aprendizagem intencionalmente previstas para esse fim.</p>
            <NavLink className={styles.button} to="/objetivos-de-aprendizagem">Explore e encontre sequências</NavLink>
          </li>
        </ul>
      </section>
    );
  }
}

export default Curriculum;
