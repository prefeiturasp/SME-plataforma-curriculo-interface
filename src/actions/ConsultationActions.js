import Api from 'data/Api';
import AlertActions from './AlertActions';

const ConsultationActions = {
  LOAD: 'ConsultationActions.LOAD',
  LOADED: 'ConsultationActions.LOADED',

  load(id) {
    return Api.simpleGet(
      `/api/public_consultations/${id}`,
      ConsultationActions.LOAD,
      ConsultationActions.LOADED
    );
  },
};

export default ConsultationActions;
