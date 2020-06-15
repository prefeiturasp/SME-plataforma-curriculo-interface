import Api from 'data/Api';
import AlertActions from './AlertActions';

const ConsultationsActions = {
  LOAD: 'ConsultationsActions.LOAD',
  LOADED: 'ConsultationsActions.LOADED',

  load() {
    return Api.simpleGet(
      '/api/public_consultations',
      ConsultationsActions.LOAD,
      ConsultationsActions.LOADED
    );
  },
};

export default ConsultationsActions;
