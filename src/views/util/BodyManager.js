import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BodyManager extends React.PureComponent {
  componentDidMount() {
    document.body.classList.toggle('isHome', this.props.isHome);
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('isHome', nextProps.isHome);
  }

  componentWillUnmount() {
    document.body.classList.remove('isHome');
  }

  render() {
    return <span />;
  }
}

BodyManager.propTypes = {
  isHome: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isHome: state.BodyReducer.isHome,
  };
};

export default connect(mapStateToProps)(BodyManager);
