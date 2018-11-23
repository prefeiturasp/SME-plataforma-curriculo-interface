import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';

class BodyManager extends React.Component {
  onScrolled() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const hasScrolled = scroll > 150;
    document.body.classList.toggle('hasScrolled', hasScrolled);
    this.props.setHasScrolled(hasScrolled);
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
  setHasScrolled: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasPopup: state.BodyReducer.hasPopup,
    isHome: state.BodyReducer.isHome,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setHasScrolled: (value) => {
      dispatch(BodyActions.setHasScrolled(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyManager);
