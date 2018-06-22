import LearningObjectivesActions from '../actions/LearningObjectivesActions';

const initialState = {
  filters: [
    {
      type: 'year',
      value: 1,
      description: '1º',
    },
    {
      type: 'year',
      value: 2,
      description: '2º',
    },
    {
      type: 'year',
      value: 3,
      description: '3º',
      isActive: true,
    },
    {
      type: 'component',
      value: 1,
      name: 'Arte',
      color: '#01add2',
    },
    {
      type: 'component',
      value: 2,
      name: 'Ciências Naturais',
      color: '#add201',
      isActive: true,
    },
    {
      type: 'component',
      value: 3,
      name: 'Geografia',
      color: '#d201ad',
    },
    {
      type: 'component',
      value: 4,
      name: 'Educação Física',
      color: '#01add2',
    },
    {
      type: 'component',
      value: 5,
      name: 'História',
      color: '#add201',
    },
    {
      type: 'component',
      value: 6,
      name: 'Matemática',
      color: '#d201ad',
    },
  ],
  results: [
    {
      code: 'EF03C02',
      color: '#01add2',
      description: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    },
    {
      code: 'EF03C12',
      color: '#01add2',
      description: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    },
    {
      code: 'EF03C13',
      color: '#01add2',
      description: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    },
  ],
  isShowingObjectives: false,
  isShowingResults: false,
};

function LearningObjectivesReducer(state = initialState, action) {
  switch(action.type) {
    case LearningObjectivesActions.HIDE_OBJECTIVES:
      return Object.assign({}, state, {
        isShowingObjectives: false,
      });

    case LearningObjectivesActions.SHOW_OBJECTIVES:
      return Object.assign({}, state, {
        isShowingObjectives: true,
      });

    case LearningObjectivesActions.HIDE_RESULTS:
      return Object.assign({}, state, {
        isShowingResults: false,
      });

    case LearningObjectivesActions.SEARCH:
      return Object.assign({}, state, {
        isShowingResults: true,
      });

    case LearningObjectivesActions.TOGGLE_FILTER:
      return Object.assign({}, state, {
        filters: state.filters.map(item => {
          if (item.type === action.filter.type && item.value === action.filter.value) {
            return {
              ...item,
              isActive: !item.isActive,
            };
          } else {
            return item;
          }
        })
      });

    default:
      return state;
  }  
}

export default LearningObjectivesReducer;
