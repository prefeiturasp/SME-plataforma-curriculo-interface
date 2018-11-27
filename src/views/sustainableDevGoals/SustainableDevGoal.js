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
  constructor(props) {
    super(props);
    this.state = { animationStatus: null };
  }

  onClickedClose() {
    this.context.router.history.goBack();
  }

  onEntered() {
    this.setState({ animationStatus: 'entered' });
  }
  
  componentDidMount() {
    this.props.showModal();
    this.props.loadItem(this.props.match.params.id);
    this.setState({ animationStatus: 'appeared' });
  }

  componentDidUpdate(prevProps) {
    if (this.state.animationStatus === 'appeared' && this.props.data) {
      this.setState({ animationStatus: 'enter' });
      setTimeout(this.onEntered.bind(this), 1000);
    }
  }

  componentWillUnmount() {
    this.props.hideModal();
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
      <section className={classes.join(' ')}>
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
        <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
          <img src={iconCloseBigWhite} alt="Fechar" />
        </button>
      </section>
    );
  }
}

SustainableDevGoal.contextTypes = {
  router: PropTypes.object.isRequired,
};

SustainableDevGoal.propTypes = {
  data: PropTypes.object,
  loadItem: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
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
    hideModal: () => {
      dispatch(BodyActions.hideModal());
    },
    showModal: () => {
      dispatch(BodyActions.showModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SustainableDevGoal);
