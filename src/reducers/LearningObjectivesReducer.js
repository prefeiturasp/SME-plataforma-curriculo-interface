import LearningObjectivesActions from '../actions/LearningObjectivesActions';

const initialState = {
  filters: [
    {
      type: 'year',
      value: 1,
      label: '1º',
    },
    {
      type: 'year',
      value: 2,
      label: '2º',
    },
    {
      type: 'year',
      value: 3,
      label: '3º',
      isActive: true,
    },
    {
      type: 'component',
      value: 1,
      label: 'Arte',
      color: '#01add2',
    },
    {
      type: 'component',
      value: 2,
      label: 'Ciências Naturais',
      color: '#add201',
      isActive: true,
    },
    {
      type: 'component',
      value: 3,
      label: 'Geografia',
      color: '#d201ad',
    },
    {
      type: 'component',
      value: 4,
      label: 'Educação Física',
      color: '#01add2',
    },
    {
      type: 'component',
      value: 5,
      label: 'História',
      color: '#add201',
    },
    {
      type: 'component',
      value: 6,
      label: 'Matemática',
      color: '#d201ad',
    },
  ],
  results: [
    {
      code1: 'EF03',
      code2: 'C',
      code3: '02',
      color: '#01add2',
      description: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    },
    {
      code1: 'EF03',
      code2: 'C',
      code3: '12',
      color: '#01add2',
      description: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    },
    {
      code1: 'EF03',
      code2: 'C',
      code3: '13',
      color: '#01add2',
      description: 'Identificar transformações de energia e identificar variáveis que influem nesse fenômeno (por exemplo, ao bater na mesa, transformamos energia mecânica em energia sonora).',
    },
  ],
  isShowingResults: false,
};

function LearningObjectivesReducer(state = initialState, action) {
  switch(action.type) {
    case LearningObjectivesActions.CLOSED_RESULTS:
      return Object.assign({}, state, {
        isShowingResults: false,
      });

    case LearningObjectivesActions.SEARCHED:
      return Object.assign({}, state, {
        isShowingResults: true,
      });

    case LearningObjectivesActions.TOGGLED_FILTER:
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
