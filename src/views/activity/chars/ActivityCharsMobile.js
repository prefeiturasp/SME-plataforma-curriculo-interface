import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityChars from './ActivityChars';
import MobileModal from 'components/layout/MobileModal';
import ModalPage from 'components/layout/ModalPage';
import SimpleHeader from 'components/header/SimpleHeader';

class ActivityCharsMobile extends Component {
  render() {
    return (
      <MobileModal
        htmlId="activityChars"
        isExpanded={this.props.isExpanded}
      >
        <ModalPage id="activityChars">
          <SimpleHeader
            back={true}
            title="Características"
          />
          <ActivityChars data={this.props.data} />
        </ModalPage>
      </MobileModal>
    );
  }
}

ActivityCharsMobile.propTypes = {
  data: PropTypes.object,
  isExpanded: PropTypes.bool,
};

export default ActivityCharsMobile;
