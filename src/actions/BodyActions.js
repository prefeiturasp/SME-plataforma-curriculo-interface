const BodyActions = {
  ENTER_HOME: 'BodyActions.ENTER_HOME',
  EXIT_HOME: 'BodyActions.EXIT_HOME',
  HIDE_LOADING: 'BodyActions.HIDE_LOADING',
  SHOW_LOADING: 'BodyActions.SHOW_LOADING',
  HIDE_MODAL: 'BodyActions.HIDE_MODAL',
  SHOW_MODAL: 'BodyActions.SHOW_MODAL',
  HIDE_POPUP: 'BodyActions.HIDE_POPUP',
  SHOW_POPUP: 'BodyActions.SHOW_POPUP',
  
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
  hideModal() {
    return { type: BodyActions.HIDE_MODAL };
  },
  showModal(message) {
    return { message, type: BodyActions.SHOW_MODAL };
  },
  hidePopup() {
    return { type: BodyActions.HIDE_POPUP };
  },
  showPopup() {
    return { type: BodyActions.SHOW_POPUP };
  },
};

export default BodyActions;
