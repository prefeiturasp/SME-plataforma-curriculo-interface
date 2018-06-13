const BodyActions = {
  HIDE_POPUP: 'HIDE_POPUP',
  SHOW_POPUP: 'SHOW_POPUP',
  
  hidePopup() {
    return { type: BodyActions.HIDE_POPUP };
  },
  showPopup() {
    return { type: BodyActions.SHOW_POPUP };
  },
};

export default BodyActions;
