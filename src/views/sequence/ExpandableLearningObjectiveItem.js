import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LearningObjectiveItem from '../common/LearningObjectiveItem';
import styles from './ExpandableLearningObjectiveItem.css';

class ExpandableLearningObjectiveItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: props.isExpanded };
  }

  onClickedToggle() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const classes = this.state.isExpanded ? [styles.wrapper, styles.isExpanded] : [styles.wrapper];
    const chevron = this.state.isExpanded ? "fa fa-chevron-up" : "fa fa-chevron-down";

    return (
      <li className={classes.join(' ')}>
        <button className={styles.toggler} onClick={this.onClickedToggle.bind(this)}>
          <LearningObjectiveItem data={this.props.data} />
          <i className={chevron} />
        </button>
        <div className={styles.description}>
          {this.props.data.description}
        </div>
      </li>
    );
  }
}

ExpandableLearningObjectiveItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExpandableLearningObjectiveItem;
