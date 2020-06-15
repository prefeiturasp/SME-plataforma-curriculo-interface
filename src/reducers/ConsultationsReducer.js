import ConsultationsActions from 'actions/ConsultationsActions';

const initialState = {
  items: [],
  currItem: null,
  isLoading: false,
};

function ConsultationsReducer(state = initialState, action) {
  switch (action.type) {
    case ConsultationsActions.LOAD:
      return {
        ...state,
        items: [],
        isLoading: true,
      };

    case ConsultationsActions.LOADED:
      return {
        ...state,
        items: action.data,
        isLoading: false,
      };

    case ConsultationsActions.LOADED_ITEM:
      return {
        ...state,
        currItem: action.data,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default ConsultationsReducer;
