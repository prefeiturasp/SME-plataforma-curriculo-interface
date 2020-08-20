import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './ProfilePopover.scss';

class BooksPopover extends React.PureComponent {
  render() {
    return (
      <div className={styles.popover} onMouseLeave={this.props.onMouseLeave}>
        <NavLink to="/cadernos-respostas" className={styles.btn}>
          Cadernos dos Professores
        </NavLink>
        <NavLink to="/materiais-complementares" className={styles.btn}>
          Materiais Complementares
        </NavLink>
      </div>
    );
  }
}

BooksPopover.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BooksPopover);
