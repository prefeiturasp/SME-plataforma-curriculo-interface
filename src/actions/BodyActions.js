const BodyActions = {
  ENTER_HOME: 'BA_ENTER_HOME',
  EXIT_HOME: 'BA_EXIT_HOME',
  HIDE_LOADING: 'BA_HIDE_LOADING',
  SHOW_LOADING: 'BA_SHOW_LOADING',
  HIDE_POPUP: 'BA_HIDE_POPUP',
  SHOW_POPUP: 'BA_SHOW_POPUP',
  
  enterHome() {
    return { type: BodyActions.ENTER_HOME };
  },
  exitHome() {
    return { type: BodyActions.EXIT_HOME };
  },
  hideLoading() {
    return { type: BodyActions.HIDE_LOADING };
  },
  showLoading() {
    return { type: BodyActions.SHOW_LOADING };
  },
  hidePopup() {
    return { type: BodyActions.HIDE_POPUP };
  },
  showPopup() {
    return { type: BodyActions.SHOW_POPUP };
  },
};

export default BodyActions;
