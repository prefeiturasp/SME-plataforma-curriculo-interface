import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SustainableDevGoalButton from './SustainableDevGoalButton';
import styles from './SustainableDevGoals.css';

class SustainableDevGoals extends Component {
  render() {
    const items = this.props.data.map((item, i) => {
      return (
        <SustainableDevGoalButton key={i} data={item} />
      );
    });

    return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>Objetivos de Desenvolvimento Sustentável (ODS)</h1>
              <p>Temas prementes, como direitos humanos, meio ambiente, desigualdades sociais e regionais, intolerâncias culturais e religiosas, abusos de poder, populações excluídas, avanços tecnológicos e seus impactos, política, economia, educação financeira, consumo e sustentabilidade, entre outros, precisam ser debatidos e enfrentados, a fim de que façam a humanidade avançar.</p>
              <p>O desafio que se apresenta é entender como essas temáticas atuais podem ser integradas a uma proposta inovadora e emancipatória de currículo, bem como ao cotidiano de escolas e salar de aula. Foi com essa intenção que o Currículo da Cidade incorporou os Objetivos de Desenvolvimento Sustentável (ODS).</p>
            </div>
          </div>
        </header>
        <hr />
        <div className="container">
          <div className="row">
            <h2 className="col-md-8 offset-md-2">Conheça os Objetivos de Desenvolvimento Sustentável</h2>
          </div>
          <ul className={styles.list}>
            {items}
          </ul>
        </div>
      </section>
    );
  }
}

SustainableDevGoals.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SustainableDevGoalsReducer.items,
  };
};

export default connect(mapStateToProps)(SustainableDevGoals);
