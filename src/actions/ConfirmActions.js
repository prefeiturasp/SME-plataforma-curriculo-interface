const ConfirmActions = {
  CLOSE: 'ConfirmActions.CLOSE',
  OPEN: 'ConfirmActions.OPEN',
  
  close() {
    return { type: ConfirmActions.CLOSE };
  },
  open(title, message, labelYes, labelNo, onConfirm) {
    return { title, message, labelYes, labelNo, onConfirm, type: ConfirmActions.OPEN };
  },
};

export default ConfirmActions;
