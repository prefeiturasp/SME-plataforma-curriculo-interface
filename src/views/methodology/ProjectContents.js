import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Step from './Step';

class ProjectContents extends Component {
  render() {
    const { data } = this.props;
    
    const stepItems = data.steps.map((item, i) => {
      return <Step key={i} step={i+1} data={item} />;
    })

    return (
      <Fragment>
        {stepItems}
      </Fragment>
    );
  }
}

ProjectContents.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.MethodologiesReducer.currItem,
  };
};

export default connect(mapStateToProps)(ProjectContents);
