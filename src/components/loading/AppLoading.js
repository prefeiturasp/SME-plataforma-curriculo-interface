import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './Loading';
import styles from './AppLoading.scss';

class AppLoading extends React.PureComponent {
  render() {
    const classes = this.props.isVisible
      ? [styles.wrapper, styles.isVisible]
      : [styles.wrapper];

    return (
      <div className={classes.join(' ')}>
        <Loading />
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
