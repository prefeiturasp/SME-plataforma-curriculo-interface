import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import GoalItem from './GoalItem';
import iconCloseBigWhite from '../../images/iconCloseBigWhite.svg';
import styles from './SustainableDevGoal.css';

class SustainableDevGoal extends Component {
  componentDidMount() {
    this.props.showPopup();
  }

  componentWillUnmount() {
    this.props.hidePopup();
  }

  render() {
    const goals = this.props.data.goals.map((item, i) => {
      return (
        <GoalItem key={i} data={item} />
      );
    });

    const style = { backgroundColor: this.props.data.color };

    return (
      <section className={styles.wrapper}>
        <header className={styles.header} style={style}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className={styles.number}>
                  {this.props.data.index}
                </div>
                <h1>{this.props.data.name}</h1>
                <h2>{this.props.data.description}</h2>
                <img src={this.props.data.iconBig} alt={this.props.data.name} />
                <p>{this.props.data.text}</p>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.content}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>Conheça as metas</h2>
              <ul className={styles.list}>
                {goals}
              </ul>
              <NavLink to='/sequencias' className={styles.button}>
                Ver Sequências de Atividades Relacionadas
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink to='/ods' className={styles.close}>
          <img src={iconCloseBigWhite} alt='Fechar' />
        </NavLink>
      </section>
    );
  }
}

SustainableDevGoal.propTypes = {
  data: PropTypes.object.isRequired,
  hidePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SustainableDevGoalsReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hidePopup: () => {
      dispatch(BodyActions.hidePopup());
    },
    showPopup: () => {
      dispatch(BodyActions.showPopup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SustainableDevGoal);
