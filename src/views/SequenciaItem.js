import React, { Component } from 'react';
import SequenciaItemPreview from './SequenciaItemPreview';
import estilos from './SequenciaItem.css';

class SequenciaItem extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
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
    const preview = !this.state.isAberto ? null : (
      <SequenciaItemPreview
        height={this.ref.current.clientHeight}
        sequencia={sequencia} />
    );

    return (
      <li className="col-sm-12 col-md-6 col-lg-3">
        <article className={estilos.container} ref={this.ref}>
          <div className={estilos.imagem}>
            <img src="http://via.placeholder.com/256x160" alt="" />
          </div>
          <div className={estilos.componente}>{sequencia.componente}</div>
          <div className={estilos.titulo}>{sequencia.titulo}</div>
          <div className={estilos.infos}>
            <div className={estilos.info}>
              <div className={estilos.infoValor}>{sequencia.aulas} aulas</div>
              <div className={estilos.infoRotulo}>Tempo estimado</div>
            </div>
            <div className={estilos.info}>
              <div className={estilos.numero}>{sequencia.atividades}</div>
              <div className={estilos.rotulo}>Atividades</div>
            </div>
          </div>
          <div className={estilos.expandir} onClick={this.onClickedAbrirFechar.bind(this)}>
            {icone}
          </div>
        </article>
        {preview}
      </li>
    );
  }
}

export default SequenciaItem;
