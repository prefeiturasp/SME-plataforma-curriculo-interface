import React, { Component } from 'react';
import logoLicense from './images/by-nc-sa.svg';
import logoPrefecture from './images/prefecture.png';
import logoPrefecture2x from './images/prefecture@2x.png';
import logoUnesco from './images/unesco.png';
import logoUnesco2x from './images/unesco@2x.png';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.logos}>
          <img
            src={logoUnesco}
            srcSet={`${logoUnesco}, ${logoUnesco2x} 2x`}
            alt="Unesco - Cooperação - Representação no Brasil"
          />
          <img
            src={logoPrefecture}
            srcSet={`${logoPrefecture}, ${logoPrefecture2x} 2x`}
            alt="Prefeitura de São Paulo - Educação"
          />
        </div>
        <div className={styles.license}>
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0">
            <img
              src={logoLicense}
              alt="Creative Commons - Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional"
            />
          </a>
          <p>
            Todo o conteúdo desta plataforma está licenciado com uma Licença{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0">
              Creative Commons - Atribuição-NãoComercial-CompartilhaIgual 4.0
              Internacional
            </a>
            , exceto quando indicado de maneira diferente em conteúdos
            específicos. O código-fonte da plataforma também é aberto e está
            disponível no{' '}
            <a href="https://github.com/prefeiturasp/SME-plataforma-curriculo">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
