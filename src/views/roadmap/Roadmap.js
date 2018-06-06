import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import RoadmapActions from '../../actions/RoadmapActions';
import RoadmapItem from './RoadmapItem';

class Roadmap extends Component {
  render() {
    const items = this.props.data.map((item, i) => {
      return (
        <RoadmapItem key={i} data={item} />
      );
    });

    return (
      <section>
        <h1>O que vem por aí</h1>
        <h2>O projeto do currículo digital da cidade está em constante evolução. Veja aqui o que já temos planejado para esta plataforma.</h2>
        <hr />
        {items}
        <hr />
        <NavLink to="/sequencias" class="btn">
          Encontre sequências de atividades
        </NavLink>
      </section>
    );
  }
}

Roadmap.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    data: state.RoadmapReducer.items,
  };
};

export default connect(mapStateToProps)(Roadmap);
