import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/loading/Loading';
import styles from './ResultsLoading.css';

class ResultsLoading extends Component {
  render() {
    const style = { height: this.props.height };
    return (
      <div className="container">
        <div className={styles.wrapper} style={style}>
          <Loading />
        </div>
      </div>
    );
  }
}

ResultsLoading.propTypes = {
  height: PropTypes.number.isRequired,
};

export default ResultsLoading;
