import AlertActions from 'actions/AlertActions';

const initialState = {
  isOpened: false,
  message: '',
};

function AlertReducer(state = initialState, action) {
  switch (action.type) {
    case AlertActions.CLOSE:
      return initialState;

    case AlertActions.OPEN:
      return {
        ...state,
        isOpened: true,
        message: action.message,
      };

    default:
      return state;
  }
}

export default AlertReducer;
