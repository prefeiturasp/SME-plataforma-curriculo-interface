import ProjectsActions from 'actions/ProjectsActions';

const initialState = {
	items: [],
	isSearching: false,
	nextPage: null,
	totalItems: 0,
};

function ProjectsReducer(state = initialState, action) {
	switch (action.type) {

	case ProjectsActions.LOAD:
		return {
			...state,
			isSearching: true,
		};

	case ProjectsActions.LOADED:
		return {
			...state,
			items: action.data,
			isSearching: false,
			nextPage: action.nextPage,
			totalItems: action.totalItems,
		};

	case ProjectsActions.LOAD_MORE:
		return {
			...state,
			isSearching: true,
		};

	case ProjectsActions.LOADED_MORE:
		return {
			...state,
			items: state.items.concat(action.data),
			isSearching: false,
			nextPage: action.nextPage,
		};

	case ProjectsActions.SEARCH:
		return {
			...state,
			isSearching: true,
		};


	case ProjectsActions.TOGGLE_PREVIEW:
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

export default ProjectsReducer;
