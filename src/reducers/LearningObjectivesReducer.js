import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const initialState = {
  filters: [],
  results: [],
  isShowingObjectives: false,
  isShowingResults: false,
};

function clearSegment(data) {
  return function(item) {
    if (item === data){
      return {
        ...item,
        isActive: false,
      }
    }else {
      return item;
    }
  };
}

function processStages(data, state, keys) {
  const result = [];

  keys.forEach(key => {
    const list = data[key];
    if (list) {
      list.forEach(item => {
        let isActive = false
        state.filters.forEach(entry => {
          if (entry.id === item.id && entry.isActive && key === entry.type) {
            isActive = true
          }
        })
        result.push({ ...item, isActive, type: key });
      });
    }
  });

  return result;
}

function LearningObjectivesReducer(state = initialState, action) {
  switch (action.type) {
    case LearningObjectivesActions.LOADED:
      const filters = [];
      const keys = ['segments', 'stages', 'years', 'curricular_components'];

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

    case LearningObjectivesActions.LOADED_STAGES:
      return {
        ...state,
        filters: processStages(action.data, state, [
          'segments',
          'stages',
          'years',
          'curricular_components',
        ]),
      };

    case LearningObjectivesActions.LOADED_YEARS:
      return {
        ...state,
        filters: processStages(action.data, state, [
          'segments',
          'stages',
          'years',
          'curricular_components',
        ]),
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

    case LearningObjectivesActions.TOGGLE_SEGMENTS:
      return {
        ...state,
        filters: state.filters.map(clearSegment(action.filterToRemove)),
      };

    case LearningObjectivesActions.TOGGLE_STAGES:
      return {
        ...state,
        filters: state.filters.map(clearSegment(action.filterToRemove)),
      };

    default:
      return state;
  }
}

export default LearningObjectivesReducer;
