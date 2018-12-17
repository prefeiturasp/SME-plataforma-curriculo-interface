import FiltersActions from 'actions/FiltersActions';

function clearFilter(item) {
  return {
    ...item,
    isActive: false,
  };
}

function processFilters(data, state, keys) {
  const result = [];

  keys.forEach(key => {
    const list = data[key];
    if (list) {
      list.forEach(item => {
        const isActive = state.cachedFilter
          ? key === state.cachedFilter.type && item.id === state.cachedFilter.id
          : false;
        result.push({ ...item, isActive, type: key });
      });
    }
  });

  return result;
}

function toggleFilter(data) {
  return function(item) {
    const name1 = item.name || item.title || item.description;
    const name2 = data.name || data.title || data.description;
    if (item.type === data.type && name1 === name2) {
      return {
        ...item,
        isActive: !item.isActive,
      };
    } else {
      return item;
    }
  };
}

const initialState = {
  currCategory: null,
  cachedFilter: null,
  filters: [],
  filtersExtra: [],
  isExpanded: false,
  isShowingCategory: false,
};

function FiltersReducer(state = initialState, action) {
  switch (action.type) {
    case FiltersActions.LOAD:
      return {
        ...state,
      };

    case FiltersActions.LOADED:
      return {
        ...state,
        filters: processFilters(action.data, state, [
          'years',
          'curricular_components',
          'sustainable_development_goals',
          'knowledge_matrices',
          'activity_types',
        ]),
      };

    case FiltersActions.LOADED_EXTRA:
      return {
        ...state,
        filtersExtra: processFilters(action.data, state, [
          'learning_objectives',
          'axes',
        ]),
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

    case FiltersActions.CLEAR_FILTERS:
      return {
        ...state,
        isExpanded: false,
        cachedFilter: null,
        filters: state.filters.map(clearFilter),
        filtersExtra: state.filtersExtra.map(clearFilter),
      };

    case FiltersActions.CACHE_FILTER:
      return {
        ...state,
        cachedFilter: action.filter,
      };

    case FiltersActions.TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map(toggleFilter(action.filter)),
        filtersExtra: state.filtersExtra.map(toggleFilter(action.filter)),
      };

    case FiltersActions.TOGGLE_PANEL:
      return {
        ...state,
        isExpanded: !state.isExpanded,
      };

    case FiltersActions.SEARCH:
      return {
        ...state,
        isExpanded: false,
      };

    default:
      return state;
  }
}

export default FiltersReducer;
