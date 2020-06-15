import ConsultationActions from 'actions/ConsultationActions';

const initialState = {
  currItem: null,
  isLoading: false,
};

function ConsultationReducer(state = initialState, action) {
  switch (action.type) {
    case ConsultationActions.LOAD:
      return {
        ...state,
        currItem: null,
        isLoading: true,
      };

    case ConsultationActions.LOADED:
      return {
        ...state,
        currItem: action.data,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default ConsultationReducer;
