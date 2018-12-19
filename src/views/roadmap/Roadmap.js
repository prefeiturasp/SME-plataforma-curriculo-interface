import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import Page from 'components/layout/Page';
import RoadmapActions from 'actions/RoadmapActions';
import RoadmapItem from './RoadmapItem';
import styles from './Roadmap.scss';

class Roadmap extends Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    const items = this.props.data.map((item, i) => {
      return <RoadmapItem key={i} index={i} data={item} />;
    });

    return (
      <Page>
        <section className={styles.wrapper}>
          <header className={styles.header}>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1>O que vem por aí</h1>
                <p>
                  O projeto do currículo digital da cidade está em constante
                  evolução. Veja aqui o que já temos planejado para esta
                  plataforma.
                </p>
              </div>
            </div>
          </header>
          <hr />
          <div className="container">
            <div className="row">
              <ul className={styles.list}>{items}</ul>
            </div>
          </div>
          <hr />
          <footer className={styles.footer}>
            <NavLink to="/sequencias" className="btn">
              Encontre sequências de atividades
            </NavLink>
          </footer>
        </section>
      </Page>
    );
  }
}

Roadmap.propTypes = {
  data: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.RoadmapReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(RoadmapActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roadmap);
