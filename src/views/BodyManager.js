import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class BodyManager extends React.Component {
  static propTypes = {
    hasPopup: PropTypes.bool
  }
  static defaultProps = {
    hasPopup: false
  }
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

const mapStateToProps = state => {
  return {
    hasPopup: state.FiltersReducer.isExpanded,
  };
};

export default connect(mapStateToProps)(BodyManager);
