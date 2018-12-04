import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReadMore from '../util/ReadMore';
import styles from './ModuleLongText.scss';

class ModuleLongText extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h5>Narrativa de Victor Frankenstein</h5>
        <ReadMore
          lines={15}
          children="Como pode o verme ser o herdeiro das maravilhas de um olho ou de um cérebro?<br/>Era o que eu pensava enquanto me debruçava, com um misto de nojo e fascínio, sobre os corpos em decomposição no laboratório. Nenhum prazer da juventude me deixaria tão realizado quanto a tarefa a que eu me entregara.<br/>Dois anos antes, quando fiz dezessete anos, meu pai, Alphonse Frankenstein, me mandara para a universidade de Ingolstadt, no Sul da Alemanha. Já me apaixonara por química no colégio em Genebra, mas ele achou importante que eu completasse os estudos fora da Suíça. E foi em Ingolstadt, ao assistir às aulas de herr Waldman, que passei a admirar os velhos alquimistas.<br/>Como pode o verme ser o herdeiro das maravilhas de um olho ou de um cérebro?<br/>Era o que eu pensava enquanto me debruçava, com um misto de nojo e fascínio, sobre os corpos em decomposição no laboratório. Nenhum prazer da juventude me deixaria tão realizado quanto a tarefa a que eu me entregara.<br/>Dois anos antes, quando fiz dezessete anos, meu pai, Alphonse Frankenstein, me mandara para a universidade de Ingolstadt, no Sul da Alemanha. Já me apaixonara por química no colégio em Genebra, mas ele achou importante que eu completasse os estudos fora da Suíça. E foi em Ingolstadt, ao assistir às aulas de herr Waldman, que passei a admirar os velhos alquimistas."
        />
      </div>
    );
  }
}

export default ModuleLongText;
