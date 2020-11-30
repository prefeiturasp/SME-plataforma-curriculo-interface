import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './ProfilePopover.scss';

class CurriculoPopover extends React.PureComponent {
  render() {
    return (
      <div className={styles.popover} onMouseLeave={this.props.onMouseLeave}>
        <NavLink to="/curriculo-ensino-fundamental" className={styles.btn}>
          Ensino Fundamental
        </NavLink>
        <NavLink to="/curriculo-ensino-medio" className={styles.btn}>
          Ensino Médio
        </NavLink>
        <NavLink to="/tecnologias-para-aprendizagem" className={styles.btn}>
          Tecnologias Para Aprendizagem
        </NavLink>
      </div>
    );
  }
}

CurriculoPopover.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CurriculoPopover);
