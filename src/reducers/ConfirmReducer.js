import ConfirmActions from 'actions/ConfirmActions';

const initialState = {
  isOpened: false,
  labelNo: '',
  labelYes: '',
  message: '',
  onConfirm: null,
  title: '',
};

function ConfirmReducer(state = initialState, action) {
  switch (action.type) {
    case ConfirmActions.CLOSE:
      return initialState;

    case ConfirmActions.OPEN:
      return {
        ...state,
        isOpened: true,
        labelNo: action.labelNo,
        labelYes: action.labelYes,
        message: action.message,
        onConfirm: action.onConfirm,
        title: action.title,
      };

    default:
      return state;
  }
}

export default ConfirmReducer;
