import FiltersActions from '../actions/FiltersActions';

const initialState = {
  filters: [],
  isExpanded: false,
  isShowingCategory: false,
  currCategory: null,
};

function FiltersReducer(state = initialState, action) {
  switch (action.type) {
    case FiltersActions.LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case FiltersActions.LOADED:
      const filters = [];
      const keys = [
        'years',
        'curricular_components',
        'sustainable_development_goals',
        'knowledge_matrices',
        'learning_objectives',
        'activity_types',
        'axes',
      ];

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
        isLoading: false,
      };

    case FiltersActions.HIDE_CATEGORY:
      return {
        ...state,
        isShowingCategory: false,
      };

    case FiltersActions.SHOW_CATEGORY:
      return {
        ...state,
        isShowingCategory: true,
        currCategory: action.category,
      };

    case FiltersActions.TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map(item => {
          const name1 = item.name || item.title || item.description;
          const name2 = action.filter.name || action.filter.title || action.filter.description;
          if (item.type === action.filter.type && name1 === name2) {
            return {
              ...item,
              isActive: !item.isActive,
            };
          } else {
            return item;
          }
        })
      };

    case FiltersActions.TOGGLE_PANEL:
      return {
        ...state,
        isExpanded: !state.isExpanded,
      };

    case FiltersActions.CLEAR_FILTERS:
      return {
        ...state,
        filters: state.filters.map(item => {
          return {
            ...item,
            isActive: false,
          };
        })
      };

    case FiltersActions.SEARCH:
      if (state.filters.findIndex(item => item.isActive) >= 0) {
        return {
          ...state,
          isExpanded: false,
        };
      } else {
        return {
          ...state,
          showSearchWarning: true,
        };
      }

    case FiltersActions.DISMISS_SEARCH_WARNING:
      return {
        ...state,
        showSearchWarning: false,
      };
      
    default:
      return state;
  }
}

export default FiltersReducer;
