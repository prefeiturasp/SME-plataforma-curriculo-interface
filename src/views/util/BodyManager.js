import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BodyManager extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('hasPopup', this.props.hasPopup)
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('hasPopup', nextProps.hasPopup)
  }

  componentWillUnmount() {
    document.body.classList.remove('hasPopup')
  }

  render() {
    return <span></span>
  }
}

BodyManager.propTypes = {
  hasPopup: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    hasPopup: state.BodyReducer.hasPopup,
  };
};

export default connect(mapStateToProps)(BodyManager);
