import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import iconCloseBig from '../../images/iconCloseBig.svg';
import styles from './KnowledgeMatrixItem.css';

class KnowledgeMatrixItem extends Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className={styles.number}>
                {this.props.data.index}
              </div>
              <h1>{this.props.data.name}</h1>
              <h2>Saber</h2>
              <p>{this.props.data.know}</p>
              <h2>Para</h2>
              <p>{this.props.data.to}</p>
              <NavLink to='/sequencias' className={styles.button}>
                Ver Sequências de Atividades Relacionadas
              </NavLink>
              <NavLink to='/matriz-de-saberes' className={styles.close}>
                <img src={iconCloseBig} alt='Fechar' />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

KnowledgeMatrixItem.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.KnowledgeMatrixReducer.currItem,
  };
};

export default connect(mapStateToProps)(KnowledgeMatrixItem);
