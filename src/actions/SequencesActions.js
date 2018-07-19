import getFiltersQueryString from './getFiltersQueryString';
import loadData from './loadData';

const SequencesActions = {
  CLEAR: 'SequencesActions.CLEAR',
  LOAD: 'SequencesActions.LOAD',
  LOAD_ITEM: 'SequencesActions.LOAD_ITEM',
  LOAD_MORE: 'SequencesActions.LOAD_MORE',
  LOADED: 'SequencesActions.LOADED',
  LOADED_ITEM: 'SequencesActions.LOADED_ITEM',
  LOADED_MORE: 'SequencesActions.LOADED_MORE',
  SEARCH: 'SequencesActions.SEARCH',
  TOGGLE_PREVIEW: 'SequencesActions.TOGGLE_PREVIEW',
  
  clearSearch() {
    return { type: SequencesActions.CLEAR };
  },
  search(filters) {
    const queryString = getFiltersQueryString(filters);
    return loadData(`/api/sequencias?${queryString}`, SequencesActions.SEARCH, SequencesActions.LOADED);
  },
  load() {
    return loadData('/api/sequencias', SequencesActions.LOAD, SequencesActions.LOADED);
  },
  loadItem(slug) {
    return loadData(`/api/sequencias/${slug}`, SequencesActions.LOAD_ITEM, SequencesActions.LOADED_ITEM);
  },
  loadMore(page) {
    return loadData(page, SequencesActions.LOAD_MORE, SequencesActions.LOADED_MORE);
  },
  loadWithFilter(filter) {
    const queryString = getFiltersQueryString([filter]);
    return loadData(`/api/sequencias?${queryString}`, SequencesActions.LOAD, SequencesActions.LOADED);
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLE_PREVIEW, id };
  },
};

export default SequencesActions;
