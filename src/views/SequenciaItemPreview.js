import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SequenciaItemPreview.css';

export class SequenciaItemPreview extends Component {
  render() {
    const mds = this.props.sequencia.mds.map((item, i) => {
      return (
        <li key={i} className="SequenciaItemPreview-mds">
          <div>{item.numero}</div>
          <div>{item.nome}</div>
        </li>
      );
    });

    const oda = this.props.sequencia.oda.map((item, i) => {
      return (
        <li key={i} className="SequenciaItemPreview-oda">
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
          className="SequenciaItemPreview-ods" />
      );
    });

    const link = `/sequencia/${this.props.sequencia.id}`;

    return (
      <div className="SequenciaItemPreview">
        <div className="">
          <div className="SequenciaItemPreview-titulo">
            Matriz de Saberes
            <button>
              <i className="fa fa-help" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {mds}
          </ul>
          <div className="SequenciaItemPreview-titulo">
            Objetivos de Aprendizagem
            <button>
              <i className="fa fa-help" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {oda}
          </ul>
          <div className="SequenciaItemPreview-titulo">
            Objetivos de Desenvolvimento Sustentável (ODS)
            <button>
              <i className="fa fa-help" title="Ajuda"></i>
            </button>
          </div>
          <ul>
            {ods}
          </ul>
        </div>
        <NavLink to={link} className="SequenciaItemPreview-acessar">
          Acessar
        </NavLink>
      </div>
    );
  }
}

export default SequenciaItemPreview;
