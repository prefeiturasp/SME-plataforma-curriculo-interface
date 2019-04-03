const ChallengesActions = {
  LOAD: 'ChallengesActions.LOAD',
  LOADED: 'ChallengesActions.LOADED',

  load() {
    return dispatch => {
      dispatch({ type: ChallengesActions.LOAD });

      setTimeout(() => {
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
        dispatch({ data, type: ChallengesActions.LOADED });
      }, 1000);
    };
  },
};

export default ChallengesActions;
