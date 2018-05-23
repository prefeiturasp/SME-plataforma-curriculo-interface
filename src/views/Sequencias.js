import React, { Component } from 'react';
import SequenciaItem from './SequenciaItem.js';
import './Sequencias.css';

class Sequencias extends Component {
  onClickedCarregar() {

  }

  render() {
    const sequencia = {
      id: 1,
      componente: 'Ciências Naturais',
      titulo: 'Os Movimentos do nosso Planeta',
      aulas: 16,
      atividades: 10,
      mds: [
        {
          numero: 1,
          nome: 'Pensamento Científico, Crítico e Criatividade',
        },
        {
          numero: 6,
          nome: 'Abertura à Diversidade',
        },
      ],
      oda: [
        {
          codigo1: 'EF03',
          codigo2: 'C',
          codigo3: '02',
          cor: '#01add2',
        },
        {
          codigo1: 'EF03',
          codigo2: 'C',
          codigo3: '12',
          cor: '#01add2',
        },
        {
          codigo1: 'EF03',
          codigo2: 'C',
          codigo3: '13',
          cor: '#01add2',
        },
      ],
      ods: [
        {
          image: 'http://via.placeholder.com/60x60',
          nome: 'Erradicar a Pobreza',
        },
        {
          image: 'http://via.placeholder.com/60x60',
          nome: 'Acabar com a Fome',
        },
        {
          image: 'http://via.placeholder.com/60x60',
          nome: 'Vida Saudável',
        },
      ],
    };

    const sequencias = [sequencia, sequencia, sequencia, sequencia, sequencia, sequencia, sequencia];
    const itens = sequencias.map((item, i) => {
      return (
        <SequenciaItem
          key={i}
          sequencia={sequencia}
        />
      );
    });

    return (
      <section>
        <div className="container">
        	<h2>Sequências de Atividades</h2>
          <h3><strong>{sequencias.length}</strong> sequências foram encontradas</h3>
        </div>
        <div className="Sequencias-container">
          <div className="container">
            <ul className="row">
              {itens}
            </ul>
            <button className="Sequencias-carregar" onClick={this.onClickedCarregar.bind(this)}>
              Carregar mais
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Sequencias;
