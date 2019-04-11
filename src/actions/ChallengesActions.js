const data = [
  {
    id: 1,
    slug: 'projeto-sinais-luminosos-na-aviacao',
    title: 'Projeto Sinais Luminosos na Aviação',
    image_attributes: {
      default_url: "/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--58fdbb10f6ed953969dc099e7f636fd6bd9078ad/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTVRFeE1IZzFOamdHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--03c892762abee13c4bd67eb85ca4b9d0f265bfab/matemtica1.jpg",
      default_size: "large",
      large: {
        "url": "/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--58fdbb10f6ed953969dc099e7f636fd6bd9078ad/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTVRFeE1IZzFOamdHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--03c892762abee13c4bd67eb85ca4b9d0f265bfab/matemtica1.jpg"
      },
      extra_large: {
        "url": "/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--58fdbb10f6ed953969dc099e7f636fd6bd9078ad/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lPTWpJeU1IZ3hNVE0yQmpvR1JWUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--b2e76300f3ece138312bfa40e84cc5186f236c92/matemtica1.jpg"
      },
    },
    main_curricular_component: {
      color: '#008080',
      name: 'Tecnologias de Aprendizagem',
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
      name: 'Tecnologias de Aprendizagem',
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
