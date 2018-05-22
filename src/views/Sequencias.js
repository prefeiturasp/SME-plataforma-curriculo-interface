import React, { Component } from 'react';
import SequenciaItem from './SequenciaItem.js';
import './Sequencias.css';

class Sequencias extends Component {
  render() {
    const sequencia = {
      componente: 'Ciências Naturais',
      titulo: 'Os Movimentos do nosso Planeta',
      aulas: 16,
      atividades: 10,
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
          </div>
        </div>
      </section>
    );
  }
}

export default Sequencias;
