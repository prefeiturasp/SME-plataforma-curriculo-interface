import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BodyManager extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('hasModal', this.props.hasModal);
    document.body.classList.toggle('isHome', this.props.isHome);
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('hasModal', nextProps.hasModal);
    document.body.classList.toggle('isHome', nextProps.isHome);
  }

  componentWillUnmount() {
    document.body.classList.remove('hasModal');
    document.body.classList.remove('isHome');
  }

  render() {
    return <span />;
  }
}

BodyManager.propTypes = {
  hasModal: PropTypes.bool.isRequired,
  isHome: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    hasModal: state.BodyReducer.hasModal,
    isHome: state.BodyReducer.isHome,
  };
};

export default connect(mapStateToProps)(BodyManager);
