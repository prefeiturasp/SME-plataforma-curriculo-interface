import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Curriculum extends Component {
  render() {
    return (
      <section>
        <h1>Currículo</h1>
        <ul>
          <li>
            <NavLink to='/ods'>ODS</NavLink>
          </li>
          <li>
            <NavLink to='/matrizes-de-saberes'>Matrizes de Saberes</NavLink>
          </li>
          <li>
            <NavLink to='/objetivos-de-aprendizagem'>Objetivos de Aprendizagem</NavLink>
          </li>
        </ul>
      </section>
    );
  }
}

export default Curriculum;
