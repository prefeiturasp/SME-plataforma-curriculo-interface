const AlertActions = {
  CLOSE: 'AlertActions.CLOSE',
  OPEN: 'AlertActions.OPEN',

  close() {
    return { type: AlertActions.CLOSE };
  },
  open(message) {
    return { message, type: AlertActions.OPEN };
  },
};

export default AlertActions;
