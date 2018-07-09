import SequencesActions from '../actions/SequencesActions';

const emptyItem = {
  title: '',
  year: '',
  main_curricular_component: {
    name: '',
    color: '',
  },
  curricular_components: [],
  knowledge_matrices: [],
  learning_objectives: [],
  sustainable_development_goals: [],
  books: '',
  activities: [],
  presentation_text: '',
};

const initialState = {
  items: [],
  currItem: emptyItem,
};

function SequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SequencesActions.CLEAR:
      return initialState;

    case SequencesActions.LOAD:
      return {
        ...state,
      };
      
    case SequencesActions.LOADED:
      return {
        ...state,
        items: action.data,
      };
      
    case SequencesActions.LOADED_ITEM:
      return {
        ...state,
        currItem: action.data,
      };

    case SequencesActions.TOGGLE_PREVIEW:
      return {
        ...state,
        items: state.items.map(item => {
          return {
            ...item,
            isExpanded: !item.isExpanded && item.id === action.id,
          };
        }),
      };
      
    default:
      return state;
  }
}

export default SequencesReducer;
