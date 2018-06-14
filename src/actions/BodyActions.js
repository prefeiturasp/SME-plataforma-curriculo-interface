const BodyActions = {
  ENTER_HOME: 'ENTER_HOME',
  EXIT_HOME: 'EXIT_HOME',
  HIDE_POPUP: 'HIDE_POPUP',
  SHOW_POPUP: 'SHOW_POPUP',
  
  enterHome() {
    return { type: BodyActions.ENTER_HOME };
  },
  exitHome() {
    return { type: BodyActions.EXIT_HOME };
  },
  hidePopup() {
    return { type: BodyActions.HIDE_POPUP };
  },
  showPopup() {
    return { type: BodyActions.SHOW_POPUP };
  },
};

export default BodyActions;
