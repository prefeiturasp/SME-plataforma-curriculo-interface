const SnackbarActions = {
  CLOSE: 'SnackbarActions.CLOSE',
  OPEN: 'SnackbarActions.OPEN',

  close() {
    return { type: SnackbarActions.CLOSE };
  },
  open(message) {
    return { message, type: SnackbarActions.OPEN };
  },
};

export default SnackbarActions;
