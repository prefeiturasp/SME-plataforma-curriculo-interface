import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { API_URL } from '../../constants';
import BodyActions from '../../actions/BodyActions';
import SustainableDevGoalsActions from '../../actions/SustainableDevGoalsActions';
import GoalItem from './GoalItem';
import iconCloseBigWhite from '../../images/iconCloseBigWhite.svg';
import styles from './SustainableDevGoal.css';

class SustainableDevGoal extends Component {
  onClickedClose() {
    this.context.router.history.goBack();
  }
  
  componentDidMount() {
    this.props.showPopup();
    this.props.loadItem(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.hidePopup();
  }

  render() {
    const data = this.props.data;

    const goals = data.goals.map((item, i) => {
      return (
        <GoalItem
          key={i}
          data={item}
          index={i + 1} />
      );
    });

    const style = { backgroundColor: data.color };

    return (
      <section className={styles.wrapper}>
        <header className={styles.header} style={style}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className={styles.number}>
                  {data.sequence}
                </div>
                <h1>{data.name}</h1>
                <h2>{data.description}</h2>
                <img src={API_URL + data.sub_icon} alt={data.name} />
                <p>{data.text}</p>
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
              <NavLink to="/sequencias" className={styles.button}>
                Ver Sequências de Atividades Relacionadas
              </NavLink>
            </div>
          </div>
        </div>
        <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
          <img src={iconCloseBigWhite} alt="Fechar" />
        </button>
      </section>
    );
  }
}

SustainableDevGoal.contextTypes = {
  router: () => true,
};

SustainableDevGoal.propTypes = {
  data: PropTypes.object.isRequired,
  loadItem: PropTypes.func.isRequired,
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
    loadItem: (id) => {
      dispatch(SustainableDevGoalsActions.loadItem(id));
    },
    hidePopup: () => {
      dispatch(BodyActions.hidePopup());
    },
    showPopup: () => {
      dispatch(BodyActions.showPopup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SustainableDevGoal);
