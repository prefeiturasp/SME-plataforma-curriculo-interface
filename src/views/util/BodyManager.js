import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BodyManager extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('hasPopup', this.props.hasPopup)
    document.body.classList.toggle('isHome', this.props.isHome)
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('hasPopup', nextProps.hasPopup)
    document.body.classList.toggle('isHome', nextProps.isHome)
  }

  componentWillUnmount() {
    document.body.classList.remove('hasPopup')
    document.body.classList.remove('isHome')
  }

  render() {
    return <span></span>
  }
}

BodyManager.propTypes = {
  hasPopup: PropTypes.bool.isRequired,
  isHome: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    hasPopup: state.BodyReducer.hasPopup,
    isHome: state.BodyReducer.isHome,
  };
};

export default connect(mapStateToProps)(BodyManager);
