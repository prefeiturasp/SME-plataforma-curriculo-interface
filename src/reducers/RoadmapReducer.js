import RoadpmapActions from '../actions/RoadmapActions';

const initialState = {
  items: [
    // {
    //   title: 'Conheça e explore o Currículo da Cidade.',
    //   text: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    //   isPublished: true,
    // },
    // {
    //   title: 'Conheça e explore o Currículo da Cidade.',
    //   text: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    //   isPublished: true,
    // },
    // {
    //   title: 'Conheça e explore o Currículo da Cidade.',
    //   text: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    //   isPublished: false,
    // },
    // {
    //   title: 'Conheça e explore o Currículo da Cidade.',
    //   text: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    //   isPublished: false,
    // },
  ],
};

function RoadmapReducer(state = initialState, action) {
  switch (action.type) {
    case RoadpmapActions.LOAD:
      return { ...state, isLoading: true };

    case RoadpmapActions.LOADED:
      return { ...state, isLoading: false, items: action.data };

    default:
      return state;
  }
}

export default RoadmapReducer;
