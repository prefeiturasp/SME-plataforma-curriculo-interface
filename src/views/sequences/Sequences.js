import React, { Component } from 'react';
import SequenceItem from './SequenceItem.js';
import styles from'./Sequences.css';

class Sequences extends Component {
  onClickedLoad() {

  }

  render() {
    const sequence = {
      id: 1,
      component: 'Ciências Naturais',
      title: 'Os Movimentos do nosso Planeta',
      classes: 16,
      activities: 10,
      knowledgeMatrices: [
        {
          number: 1,
          name: 'Pensamento Científico, Crítico e Criatividade',
        },
        {
          number: 6,
          name: 'Abertura à Diversidade',
        },
      ],
      learningObjectives: [
        {
          code1: 'EF03',
          code2: 'C',
          code3: '02',
          color: '#01add2',
        },
        {
          code1: 'EF03',
          code2: 'C',
          code3: '12',
          color: '#01add2',
        },
        {
          code1: 'EF03',
          code2: 'C',
          code3: '13',
          color: '#01add2',
        },
      ],
      developmentGoals: [
        {
          image: 'http://via.placeholder.com/60x60',
          name: 'Erradicar a Pobreza',
        },
        {
          image: 'http://via.placeholder.com/60x60',
          name: 'Acabar com a Fome',
        },
        {
          image: 'http://via.placeholder.com/60x60',
          name: 'Vida Saudável',
        },
      ],
    };

    const sequences = [sequence, sequence, sequence, sequence, sequence, sequence, sequence];
    const items = sequences.map((item, i) => {
      return (
        <SequenceItem
          key={i}
          sequence={sequence} />
      );
    });

    return (
      <section>
        <div className="container">
        	<h2 className={styles.h2}>Sequências de Atividades</h2>
          <h3 className={styles.h3}><strong>{sequences.length}</strong> sequências foram encontradas</h3>
        </div>
        <div className={styles.container}>
          <div className="container">
            <ul className="row">
              {items}
            </ul>
            <button className={styles.load} onClick={this.onClickedLoad.bind(this)}>
              Carregar mais
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Sequences;
