import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { withRouter } from 'react-router';
import { API_URL } from 'data/constants';
import SustainableDevGoalsActions from 'actions/SustainableDevGoalsActions';
import GoalItem from './GoalItem';
import iconCloseBigWhite from 'images/icons/closeBigWhite.svg';
import styles from './SustainableDevGoal.css';

class SustainableDevGoal extends Component {
  state = { animationStatus: null };
  
  onClickedClose = () => {
    this.props.history.goBack();
  }

  onEntered = () => {
    this.setState({ animationStatus: 'entered' });
  }
  
  componentDidMount() {
    disableBodyScroll(document.querySelector('#sustainableDevGoal'));
    this.props.loadItem(this.props.match.params.id);
    this.setState({ animationStatus: 'appeared' });
  }

  componentDidUpdate(prevProps) {
    if (this.state.animationStatus === 'appeared' && this.props.data) {
      this.setState({ animationStatus: 'enter' });
      setTimeout(this.onEntered, 1000);
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    const goals = data.goals.map((item, i) => {
      return (
        <GoalItem
          key={i}
          data={item}
          index={i + 1} />
      );
    });

    const classes = [styles.wrapper];
    if (this.state.animationStatus) {
      classes.push(styles[this.state.animationStatus]);
    }

    const style = { backgroundColor: data.color };

    return (
      <section className={classes.join(' ')} id="sustainableDevGoal">
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
        <div className={styles.contents}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>Conheça as metas</h2>
              <ul className={styles.list}>
                {goals}
              </ul>
              <NavLink to={`/sequencias/ods/${this.props.match.params.id}`} className={styles.button}>
                Ver Sequências de Atividades Relacionadas
              </NavLink>
            </div>
          </div>
        </div>
        <button className={styles.close} onClick={this.onClickedClose}>
          <img src={iconCloseBigWhite} alt="Fechar" />
        </button>
      </section>
    );
  }
}

SustainableDevGoal.propTypes = {
  data: PropTypes.object,
  loadItem: PropTypes.func.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SustainableDevGoal));
