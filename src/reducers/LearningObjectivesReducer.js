import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const initialState = {
  filters: [],
  results: [],
  isShowingObjectives: false,
  isShowingResults: false,
};

function LearningObjectivesReducer(state = initialState, action) {
  switch (action.type) {
    case LearningObjectivesActions.LOAD:
      return {
        ...state,
      };

    case LearningObjectivesActions.LOADED:
      const filters = [];
      const keys = ['years', 'curricular_components'];

      keys.forEach(key => {
        const list = action.data[key];
        if (list) {
          list.forEach(item => {
            filters.push({ ...item, type: key });
          });
        }
      });

      return {
        ...state,
        filters,
      };

    case LearningObjectivesActions.HIDE_OBJECTIVES:
      return {
        ...state,
        isShowingObjectives: false,
      };

    case LearningObjectivesActions.SHOW_OBJECTIVES:
      return {
        ...state,
        isShowingObjectives: true,
      };

    case LearningObjectivesActions.SEARCH:
      return {
        ...state,
        results: [],
      };

    case LearningObjectivesActions.LOADED_RESULTS:
      return {
        ...state,
        results: action.data.learning_objectives || [],
        isShowingResults: true,
      };

    case LearningObjectivesActions.HIDE_RESULTS:
      return {
        ...state,
        isShowingResults: false,
      };

    case LearningObjectivesActions.TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map(item => {
          const name1 = item.name || item.title || item.description;
          const name2 =
            action.filter.name ||
            action.filter.title ||
            action.filter.description;
          if (item.type === action.filter.type && name1 === name2) {
            return {
              ...item,
              isActive: !item.isActive,
            };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
}

export default LearningObjectivesReducer;
