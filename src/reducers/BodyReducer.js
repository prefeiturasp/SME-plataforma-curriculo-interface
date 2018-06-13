import BodyActions from '../actions/BodyActions';

const initialState = { hasPopup: false };

function BodyReducer(state = initialState, action) {
  switch (action.type) {
    case BodyActions.HIDE_POPUP:
      return { hasPopup: false };

    case BodyActions.SHOW_POPUP:
      return { hasPopup: true };

    default:
      return initialState;
  }
}

export default BodyReducer;
