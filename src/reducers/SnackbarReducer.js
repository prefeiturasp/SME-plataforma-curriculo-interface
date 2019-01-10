import SnackbarActions from 'actions/SnackbarActions';

const initialState = {
  isOpened: false,
  message: '',
};

function SnackbarReducer(state = initialState, action) {
  switch (action.type) {
    case SnackbarActions.CLOSE:
      return initialState;

    case SnackbarActions.OPEN:
      return {
        ...state,
        isOpened: true,
        message: action.message,
      };

    default:
      return state;
  }
}

export default SnackbarReducer;
