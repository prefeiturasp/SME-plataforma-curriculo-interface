import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import getProjectFiltersQueryString, {
  getSearchQueryString,
} from 'data/getProjectFiltersQueryString';

const ProjectsActions = {
  LOAD: 'ProjectsActions.LOAD',
	LOADED: 'ProjectsActions.LOADED',
	LOAD_MORE: 'ProjectsActions.LOAD_MORE',
  LOADED_MORE: 'ProjectsActions.LOADED_MORE',
  SEARCH: 'ProjectsActions.SEARCH',
  TOGGLE_PREVIEW: 'ProjectsActions.TOGGLE_PREVIEW',

  load() {
		return Api.simpleGet(
			'/api/projects',
			ProjectsActions.LOAD,
			ProjectsActions.LOADED
		);
	},
	loadMore(page) {
    return Api.simpleGet(
      page,
      ProjectsActions.LOAD_MORE,
      ProjectsActions.LOADED_MORE
    );
  },
  search() {
    return (dispatch, getState) => {
      const state = getState().ProjectFiltersReducer;
      const { filters, filtersExtra, order, query } = state;
      const activeFilters = filters.filter(item => item.isActive);
      const activeFiltersExtra = filtersExtra.filter(item => item.isActive);
      const queryString = getSearchQueryString(activeFilters, activeFiltersExtra, query, order);

      dispatch({ type: ProjectsActions.SEARCH });
      return Api.get(dispatch, `/api/projects?${queryString}`)
        .then(response =>
          dispatch({ ...response, type: ProjectsActions.LOADED })
        )
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  loadWithFilter(filter) {
    const queryString = getProjectFiltersQueryString([filter]);
    return Api.simpleGet(
      `/api/projects?${queryString}`,
      ProjectsActions.SEARCH,
      ProjectsActions.LOADED
    );
  },
  togglePreview(id) {
    return { type: ProjectsActions.TOGGLE_PREVIEW, id };
  },
  alertError(error) {
    return dispatch => {
      return dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
    };
  },
};

export default ProjectsActions;
