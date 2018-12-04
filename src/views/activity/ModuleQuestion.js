import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleQuestion.scss';

class ModuleQuestion extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.number}>1</div>
          <h4>Leia o texto abaixo:</h4>
        </div>
        <p>Você já ouviu falar no grande compositor musical chamado Ludwing Van Beethoven? Ele nasceu em 1770 na Alemanha e ficou bastante famoso e conhecido em todo o mundo por suas canções clássicas. Porém, aos 26 anos de idade, foi acometido por um sério problema de audição, tornando-se completamente surdo.</p>
        <p>Apesar deste lamentável problema com a surdez, Beethoven continuou por um período a compor, tocar seu piano e a encantar as pessoas com suas belas músicas. Ele dizia que o som não entrava somente pelo seu canal auditivo, mas sim por todo o seu crânio. Por isso, chegou a usar baquetas feitas de madeira entre os seus dentes para apoiar sobre o piano, pois assim podia sentir as notas de suas composições.</p>
        <ul>
          <li>2 colheres</li>
          <li>2 pedaços de madeiras. Apesar deste lamentável problema com a surdez, Beethoven continuou por um período a compor, tocar seu piano e a encantar as pessoas com suas belas músicas. Ele dizia que o som não entrava somente pelo seu canal auditivo, mas sim por todo o seu crânio. Por isso, chegou a usar baquetas feitas de madeira entre os seus dentes para apoiar sobre o piano, pois assim podia sentir as notas de suas composições.</li>
          <li>2 pedras</li>
          <li>1 copo descartável</li>
          <li>2 copos de plástico</li>
          <li>1 balde</li>
        </ul>
        <p className="source">Fonte: Adaptado de <em>A Surdez de Beethoven, o Desafio de um Gênio</em></p>
      </div>
    );
  }
}

export default ModuleQuestion;
