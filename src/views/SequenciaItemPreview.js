import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import estilos from './SequenciaItemPreview.css';

export class SequenciaItemPreview extends Component {
  onClickedAjudaMatriz() {

  }

  onClickedAjudaODA() {

  }

  onClickedAjudaODS() {

  }

  render() {
    const mds = this.props.sequencia.mds.map((item, i) => {
      return (
        <li key={i} className={estilos.mds}>
          <div>{item.numero}</div>
          <div>{item.nome}</div>
        </li>
      );
    });

    const oda = this.props.sequencia.oda.map((item, i) => {
      return (
        <li key={i} className={estilos.oda}>
          {item.codigo1}
          <span style={{color:item.cor}}>{item.codigo2}</span>
          {item.codigo3}
        </li>
      );
    });

    const ods = this.props.sequencia.ods.map((item, i) => {
      return (
        <img
          key={i}
          src={item.image}
          alt={item.nome}
          className={estilos.ods} />
      );
    });

    const link = `/sequencia/${this.props.sequencia.id}`;

    return (
      <div className={estilos.container} style={{height:`${this.props.height}px`}}>
        <div className={estilos.scroll}>
          <div className={estilos.titulo}>
            Matriz de Saberes
            <button onClick={this.onClickedAjudaMatriz.bind(this)}>
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {mds}
          </ul>
          <div className={estilos.titulo}>
            Objetivos de Aprendizagem
            <button onClick={this.onClickedAjudaODA.bind(this)}>
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {oda}
          </ul>
          <div className={estilos.titulo}>
            Objetivos de Desenvolvimento Sustentável (ODS)
            <button onClick={this.onClickedAjudaODS.bind(this)}>
              <i className="fa fa-question-circle" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {ods}
          </ul>
        </div>
        <NavLink to={link} className={estilos.acessar}>
          Acessar
        </NavLink>
      </div>
    );
  }
}

export default SequenciaItemPreview;
