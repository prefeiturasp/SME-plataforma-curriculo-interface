import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ActivityActions from '../../actions/ActivityActions';
import GenericItem from '../common/GenericItem';
import ListItem from '../common/ListItem';
import iconGroup from'../../images/iconGroup.svg';
import iconOutdoors from'../../images/iconOutdoors.svg';
import styles from'./Activity.css';

class Activity extends Component {
  render() {
    const filters = [
      <GenericItem key={0} data={this.props.data.sequence.year} />,
      <GenericItem key={1} data={this.props.data.sequence.component} />,
    ];

    const materials = this.props.data.materials.map((item, i) => {
      return (
        <ListItem key={i} string={item} />
      );
    });

    const linkPrev = `/atividade/${this.props.data.prevId}`;
    const linkNext = `/atividade/${this.props.data.nextId}`;
    const link = `/sequencia/${this.props.data.sequence.id}`;

    return (
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h3>Atividade 1</h3>
            <h1>{this.props.data.name}</h1>
            <h2>Sequência didática: {this.props.data.sequence.name}</h2>
            <ul>
              {filters}
            </ul>
          </div>
          <ul className={styles.infos}>
            <li>
              <img src={iconGroup} alt="Grupo" />
              <br />
              Grupo
            </li>
            <li>
              <img src={iconOutdoors} alt="Ambiente Externo" />
              <br />
              Ambiente Externo
            </li>
          </ul>
        </div>
        <div className="container">
          <img
            className={styles.image}
            src={this.props.data.image1}
            alt={this.props.data.name} />
        </div>
        <hr />
        <div className="container">
          <h5>Materiais:</h5>
          <ul>
            {materials}
          </ul>
        </div>
        <hr />
        <div className="container">
          <h4>Orientações</h4>
          <img
            className={styles.image}
            src={this.props.data.image2}
            alt={this.props.data.name} />
          <div className={styles.description}>
            {this.props.data.description}
          </div>
        </div>
        <hr />
        <div className={styles.arrows}>
          <NavLink className={styles.prev} to={linkPrev}>
            <i className="fa fa-arrow-left" />
            Atividade 1
          </NavLink>
          <NavLink className={styles.next} to={linkNext}>
            Atividade 2
            <i className="fa fa-arrow-right" />
          </NavLink>
        </div>
        <div className={styles.footer}>
          <NavLink className={styles.back} to={link}>
            Voltar para a sequência
          </NavLink>
        </div>
      </section>
    );
  }
}

Activity.propTypes = {
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ActivityReducer.currActivity,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(ActivityActions.load());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
