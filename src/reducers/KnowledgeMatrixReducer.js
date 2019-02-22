import KnowledgeMatrixActions from 'actions/KnowledgeMatrixActions';

const initialState = {
  items: [],
};

function KnowledgeMatrixReducer(state = initialState, action) {
  switch (action.type) {
    case KnowledgeMatrixActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    default:
      return state;
  }
}

export default KnowledgeMatrixReducer;
