import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MobileModal from 'components/layout/MobileModal';
import ModalPage from 'components/layout/ModalPage';
import SequenceChars from './SequenceChars';
import SimpleHeader from 'components/header/SimpleHeader';

class SequenceCharsMobile extends Component {
  render() {
    return (
      <MobileModal
        htmlId="sequenceChars"
        isExpanded={this.props.isExpanded}
      >
        <ModalPage id="sequenceChars">
          <SimpleHeader
            back={true}
            title="Características"
          />
          <SequenceChars data={this.props.data} />
        </ModalPage>
      </MobileModal>
    );
  }
}

SequenceCharsMobile.propTypes = {
  data: PropTypes.object,
  isExpanded: PropTypes.bool,
};

export default SequenceCharsMobile;
