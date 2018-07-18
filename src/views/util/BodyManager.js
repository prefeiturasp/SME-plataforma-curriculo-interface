import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BodyManager extends React.Component {
  onScrolled() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    document.body.classList.toggle('hasScrolled', scroll > 150);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrolled.bind(this));
    document.body.classList.toggle('hasPopup', this.props.hasPopup);
    document.body.classList.toggle('isHome', this.props.isHome);
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('hasPopup', nextProps.hasPopup);
    document.body.classList.toggle('isHome', nextProps.isHome);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrolled.bind(this));
    document.body.classList.remove('hasPopup');
    document.body.classList.remove('hasScrolled');
    document.body.classList.remove('isHome');
  }

  render() {
    return <span />;
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
