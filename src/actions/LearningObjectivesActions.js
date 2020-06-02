import Api from 'data/Api';
import getFiltersQueryString from 'data/getFiltersQueryString';

const LearningObjectivesActions = {
  LOAD: 'LearningObjectivesActions.LOAD',
  LOADED: 'LearningObjectivesActions.LOADED',
  LOADED_STAGES: 'FiltersActions.LOADED_STAGES',
  LOADED_YEARS: 'FiltersActions.LOADED_YEARS',
  HIDE_OBJECTIVES: 'LearningObjectivesActions.HIDE_OBJECTIVES',
  SHOW_OBJECTIVES: 'LearningObjectivesActions.SHOW_OBJECTIVES',
  SEARCH: 'LearningObjectivesActions.SEARCH',
  LOADED_RESULTS: 'LearningObjectivesActions.LOADED_RESULTS',
  HIDE_RESULTS: 'LearningObjectivesActions.HIDE_RESULTS',
  TOGGLE_FILTER: 'LearningObjectivesActions.TOGGLE_FILTER',
  TOGGLE_SEGMENTS: 'FiltersActions.TOGGLE_SEGMENTS',
  TOGGLE_STAGES: 'FiltersActions.TOGGLE_STAGES',

  load() {
    return Api.simpleGet(
      '/api/filtros',
      LearningObjectivesActions.LOAD,
      LearningObjectivesActions.LOADED
    );
  },
  toggleSegments(filter) {
    return (dispatch, getState) => {
      let filterToRemove = getState().LearningObjectivesReducer.filters.filter(
        item => (item !== filter) && (item.type === 'segments') && (item.isActive === true)
      );
      if (filterToRemove.length > 0) {
        filterToRemove = filterToRemove[0];
        dispatch({ type: LearningObjectivesActions.TOGGLE_SEGMENTS, filterToRemove });
      }
      dispatch({ type: LearningObjectivesActions.TOGGLE_FILTER, filter });
    };
  },
  toggleStages(filter) {
    return (dispatch, getState) => {
      let filterToRemove = getState().FiltersReducer.filters.filter(
        item => (item !== filter) && (item.type === 'stages') && (item.isActive === true)
      );
      if (filterToRemove.length > 0) {
        filterToRemove = filterToRemove[0];
        dispatch({ type: LearningObjectivesActions.TOGGLE_STAGES, filterToRemove });
      }
      dispatch({ type: LearningObjectivesActions.TOGGLE_FILTER, filter });
    };
  },
  getStages(filter) {
    return (dispatch, getState) => {
      if (filter.isActive === true){
        let queryString = `segment_id[]=${filter.id}`
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: LearningObjectivesActions.LOADED_STAGES })
        );
      } else {
        return Api.get(dispatch, `/api/filtros`).then(response =>
          dispatch({ ...response, type: LearningObjectivesActions.LOADED_STAGES })
        );
      }
    };
  },
  getYears(filter) {
    return (dispatch, getState) => {
      let segment = getState().LearningObjectivesReducer.filters.filter(
        item => (item.type === 'segments') && (item.isActive === true)
      );
      if (filter.isActive === true){
        let queryString = `stage_id[]=${filter.id}&segment_id[]=${segment[0].id}`
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: LearningObjectivesActions.LOADED_YEARS })
        );
      } else {
        return Api.get(dispatch, `/api/filtros`).then(response =>
          dispatch({ ...response, type: LearningObjectivesActions.LOADED_YEARS })
        );
      }
    };
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: LearningObjectivesActions.TOGGLE_FILTER, filter });
      const filters = getState().LearningObjectivesReducer.filters.filter(
        item => item.isActive
      );
      const queryString = getFiltersQueryString(filters);

      if (filter.type === 'segments') {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: LearningObjectivesActions.LOADED_STAGES })
        );
      }
      if (filter.type = "stages") {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: LearningObjectivesActions.LOADED_YEARS })
        );
      }
    };
  },
  hideObjectives() {
    return { type: LearningObjectivesActions.HIDE_OBJECTIVES };
  },
  showObjectives() {
    return { type: LearningObjectivesActions.SHOW_OBJECTIVES };
  },
  search(filters) {
    const queryString = getFiltersQueryString(filters);
    return Api.simpleGet(
      `/api/filtros?${queryString}`,
      LearningObjectivesActions.SEARCH,
      LearningObjectivesActions.LOADED_RESULTS
    );
  },
  hideResults() {
    return { type: LearningObjectivesActions.HIDE_RESULTS };
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLE_FILTER, filter };
  },
};

export default LearningObjectivesActions;
