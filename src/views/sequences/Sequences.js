import React, { Component } from 'react';
import FilterBar from '../filters/FilterBar.js';
import FilterPanel from '../filters/FilterPanel.js';
import GridItem from './GridItem.js';
import styles from'./Sequences.css';

class Sequences extends Component {
  onClickedLoad() {

  }

  render() {
    const allFilters = [
      {
        type: 'year',
        label: '1º',
      },
      {
        type: 'year',
        label: '2º',
      },
      {
        type: 'year',
        label: '3º',
      },
      {
        type: 'component',
        label: 'Arte',
        color: '#01add2',
      },
      {
        type: 'component',
        label: 'Ciências Naturais',
        color: '#01add2',
      },
      {
        type: 'component',
        label: 'Geografia',
        color: '#01add2',
      },
      {
        type: 'component',
        label: 'Educação Física',
        color: '#01add2',
      },
      {
        type: 'component',
        label: 'História',
        color: '#01add2',
      },
      {
        type: 'component',
        label: 'Matemática',
        color: '#01add2',
      },
      {
        type: 'knowledgeMatrix',
        label: '1. Pensamento Científico, Crítico e Criatividade',
      },
      {
        type: 'knowledgeMatrix',
        label: '2. Resolução de Problemas',
      },
      {
        type: 'knowledgeMatrix',
        label: '3. Comunicação',
      },
      {
        type: 'developmentGoal',
        image: 'http://via.placeholder.com/60x60',
        label: '1. Erradicação da Pobreza',
      },
      {
        type: 'developmentGoal',
        image: 'http://via.placeholder.com/60x60',
        label: '2. Fome Zero e Agricultura Sustentável',
      },
      {
        type: 'developmentGoal',
        image: 'http://via.placeholder.com/60x60',
        label: '3. Saúde e Bem-Estar',
      },
      {
        type: 'learningObjective',
        label: '1. Lorem ipsum',
      },
      {
        type: 'learningObjective',
        label: '2. Lorem ipsum',
      },
      {
        type: 'learningObjective',
        label: '3. Lorem ipsum',
      },
      {
        type: 'axis',
        label: '1. Lorem ipsum',
      },
      {
        type: 'axis',
        label: '2. Lorem ipsum',
      },
      {
        type: 'axis',
        label: '3. Lorem ipsum',
      },
      {
        type: 'activityType',
        label: '1. Lorem ipsum',
      },
      {
        type: 'activityType',
        label: '2. Lorem ipsum',
      },
      {
        type: 'activityType',
        label: '3. Lorem ipsum',
      },
    ];

    const activeFilters = [
      {
        type: 'year',
        label: '3º ano',
      },
      {
        type: 'component',
        label: 'Ciências Naturais',
        color: '#01add2',
      },
    ];

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
        <GridItem
          key={i}
          sequence={sequence} />
      );
    });

    return (
      <section>
        <div className="container">
        	<h2 className={styles.h2}>Sequências de Atividades</h2>
          <h3 className={styles.h3}><strong>{sequences.length}</strong> sequências foram encontradas</h3>
          <FilterBar filters={activeFilters} />
        </div>
        <hr />
        <div className="container">
          <FilterPanel filters={allFilters} />
        </div>
        <div className={styles.wrapper}>
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
