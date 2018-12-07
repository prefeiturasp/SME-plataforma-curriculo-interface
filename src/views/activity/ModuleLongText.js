import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReadMore from '../util/ReadMore';
import styles from './ModuleLongText.scss';

class ModuleLongText extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h4>{this.props.title}</h4>
        <ReadMore
          lines={15}
          children={this.props.text}
        />
      </div>
    );
  }
}

ModuleLongText.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModuleLongText;
