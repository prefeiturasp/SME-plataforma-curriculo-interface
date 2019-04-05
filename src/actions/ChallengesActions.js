const data = [
  {
    id: 1,
    slug: 'projeto-sinais-luminosos-na-aviacao',
    title: 'Projeto Sinais Luminosos na Aviação',
    image_attributes: {},
    main_curricular_component: {
      color: '#008080',
      name: 'Tecnologias de Aprendizado',
    },
    performeds_status: {
      performed: false,
    },
  },
  {
    id: 2,
    slug: 'projeto-sinais-luminosos-na-aviacao',
    title: 'Projeto Sinais Luminosos na Aviação',
    image_attributes: {},
    main_curricular_component: {
      color: '#008080',
      name: 'Tecnologias de Aprendizado',
    },
    performeds_status: {
      performed: true,
    },
  },
];

const performed = [
  {
    id: 1,
  },
];

const ChallengesActions = {
  LOAD: 'ChallengesActions.LOAD',
  LOAD_PERFORMED: 'ChallengesActions.LOAD_PERFORMED',
  LOADED: 'ChallengesActions.LOADED',
  LOADED_PERFORMED: 'ChallengesActions.LOADED_PERFORMED',

  load() {
    return dispatch => {
      dispatch({ type: ChallengesActions.LOAD });

      setTimeout(() => {
        dispatch({ data, type: ChallengesActions.LOADED });
      }, 1000);
    };
  },
  loadPerformed() {
    return dispatch => {
      dispatch({ type: ChallengesActions.LOAD_PERFORMED });

      setTimeout(() => {
        dispatch({ data: performed, type: ChallengesActions.LOADED_PERFORMED });
      }, 1000);
    };
  },
};

export default ChallengesActions;
