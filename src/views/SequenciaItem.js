import React, { Component } from 'react';
import './SequenciaItem.css';

class SequenciaItem extends Component {
  onClickedExpandir() {
    
  }

  render() {
    const sequencia = this.props.sequencia;

    return (
      <li className="col-sm-12 col-md-6 col-lg-3">
        <article className="SequenciaItem">
          <div className="SequenciaItem-imagem">
            <img src="http://via.placeholder.com/256x160" alt="" />
          </div>
          <div className="SequenciaItem-componente">{sequencia.componente}</div>
          <div className="SequenciaItem-titulo">{sequencia.titulo}</div>
          <div className="SequenciaItem-infos">
            <div className="SequenciaItem-info">
              <div className="SequenciaItem-info-valor">{sequencia.aulas} aulas</div>
              <div className="SequenciaItem-info-rotulo">Tempo estimado</div>
            </div>
            <div className="SequenciaItem-info">
              <div className="SequenciaItem-info-valor">{sequencia.atividades}</div>
              <div className="SequenciaItem-info-rotulo">Atividades</div>
            </div>
          </div>
          <div className="SequenciaItem-expandir" onClick={this.onClickedExpandir}>
            <i className="fa fa-plus" title="Expandir"></i>
          </div>
        </article>
      </li>
    );
  }
}

export default SequenciaItem;
