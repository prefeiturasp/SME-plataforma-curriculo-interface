import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import iconLoading from '../../images/iconLoading.png';
import styles from './AppLoading.css';

class AppLoading extends Component {
  render() {
    const classes = this.props.isVisible ? [styles.wrapper, styles.isVisible] : [styles.wrapper];

    return (
      <div className={classes.join(' ')}>
        <img src={iconLoading} alt="Carregando" />
      </div>
    );
  }
}

AppLoading.propTypes = {
  isVisible: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    isVisible: state.BodyReducer.isLoading,
  };
};

export default connect(mapStateToProps)(AppLoading);
