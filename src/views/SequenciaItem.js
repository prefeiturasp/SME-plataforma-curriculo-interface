import React, { Component } from 'react';
import SequenciaItemPreview from './SequenciaItemPreview';
import './SequenciaItem.css';

class SequenciaItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAberto: false,
    };
  }

  onClickedAbrirFechar() {
    this.setState({
      isAberto: !this.state.isAberto,
    });
  }

  render() {
    const sequencia = this.props.sequencia;
    const icone = !this.state.isAberto ? <i className="fa fa-plus" title="Abrir"></i> : <i className="fa fa-minus" title="Fechar"></i>;
    const preview = !this.state.isAberto ? null : <SequenciaItemPreview sequencia={sequencia} />;

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
          <div className="SequenciaItem-expandir" onClick={this.onClickedAbrirFechar.bind(this)}>
            {icone}
          </div>
        </article>
        {preview}
      </li>
    );
  }
}

export default SequenciaItem;
