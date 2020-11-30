import Api from 'data/Api';
import getTeacherId from 'data/getTeacherId';

const ProjectActions = {
  LOAD: 'ProjectActions.LOAD',
  LOADED: 'ProjectActions.LOADED',

  load(slug) {
    return Api.simpleGet(
      `/api/projects/${slug}`,
      ProjectActions.LOAD,
      ProjectActions.LOADED
    );
  },
};

export default ProjectActions;
