import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar1 from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import SnackbarActions from 'actions/SnackbarActions';

class Snackbar extends Component {
  render() {
    const { close, isOpened, message } = this.props;

    return (
      <Snackbar1
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isOpened}
        autoHideDuration={6000}
        onClose={close}
        message={message}
      />
    );
  }
}

Snackbar.propTypes = {
  close: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
  message: PropTypes.any.isRequired,
};

const mapStateToProps = state => {
  return {
    isOpened: state.SnackbarReducer.isOpened,
    message: state.SnackbarReducer.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(SnackbarActions.close());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snackbar);
