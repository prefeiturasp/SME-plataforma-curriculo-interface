import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityChars from './ActivityChars';
import MobileModal from 'components/layout/MobileModal';
import ModalPage from 'components/layout/ModalPage';
import ModalHeader from 'components/header/ModalHeader';

class ActivityCharsMobile extends Component {
  render() {
    return (
      <MobileModal htmlId="activityChars" isExpanded={this.props.isExpanded}>
        <ModalPage id="activityChars">
          <ModalHeader title="Características" onBack={this.props.onBack} />
          <ActivityChars data={this.props.data} />
        </ModalPage>
      </MobileModal>
    );
  }
}

ActivityCharsMobile.propTypes = {
  data: PropTypes.object,
  isExpanded: PropTypes.bool,
  onBack: PropTypes.func.isRequired,
};

export default ActivityCharsMobile;
