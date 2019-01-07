import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import styles from './Notification.scss';

class Notification extends Component {
  state = {
    isExpanded: true,
  };

  onClickedNo = () => {
    this.setState({
      isExpanded: false,
    });
  };

  render() {
    const { labelNo, labelYes, text } = this.props;

    return (
      <Collapse in={this.state.isExpanded}>
        <div className={styles.wrapper}>
          <div className="container">
            <p>{text}</p>
            <div className={styles.buttons}>
              <button onClick={this.onClickedNo}>{labelNo}</button>
              <button onClick={this.props.onClickedYes}>{labelYes}</button>
            </div>
          </div>
        </div>
      </Collapse>
    );
  }
}

Notification.propTypes = {
  labelNo: PropTypes.string.isRequired,
  labelYes: PropTypes.string.isRequired,
  onClickedYes: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Notification;
