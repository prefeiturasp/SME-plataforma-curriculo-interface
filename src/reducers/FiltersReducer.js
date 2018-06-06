import FiltersActions from '../actions/FiltersActions';

const initialState = {
  categories: [
    {
      id: 1,
      type: 'developmentGoal',
      label: 'Objetivos de Desenvolvimento Sustentável',
    },
    {
      id: 2,
      type: 'knowledgeMatrix',
      label: 'Matriz de Saberes',
    },
    {
      id: 3,
      type: 'learningObjective',
      label: 'Objetivos de Aprendizagem',
    },
    {
      id: 4,
      type: 'axis',
      label: 'Eixo',
    },
    {
      id: 5,
      type: 'activityType',
      label: 'Tipo de Atividade',
    },
  ],
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
    {
      type: 'knowledgeMatrix',
      value: 1,
      label: '1. Pensamento Científico, Crítico e Criatividade',
    },
    {
      type: 'knowledgeMatrix',
      value: 2,
      label: '2. Resolução de Problemas',
    },
    {
      type: 'knowledgeMatrix',
      value: 3,
      label: '3. Comunicação',
    },
    {
      type: 'developmentGoal',
      value: 1,
      image: 'http://via.placeholder.com/60x60/993333/ffffff',
      label: '1. Erradicação da Pobreza',
    },
    {
      type: 'developmentGoal',
      value: 2,
      image: 'http://via.placeholder.com/60x60/339933/ffffff',
      label: '2. Fome Zero e Agricultura Sustentável',
    },
    {
      type: 'developmentGoal',
      value: 3,
      image: 'http://via.placeholder.com/60x60/333399/ffffff',
      label: '3. Saúde e Bem-Estar',
    },
    {
      type: 'learningObjective',
      value: 1,
      label: '1. Lorem ipsum',
    },
    {
      type: 'learningObjective',
      value: 2,
      label: '2. Lorem ipsum',
    },
    {
      type: 'learningObjective',
      value: 3,
      label: '3. Lorem ipsum',
    },
    {
      type: 'axis',
      value: 1,
      label: '1. Lorem ipsum',
    },
    {
      type: 'axis',
      value: 2,
      label: '2. Lorem ipsum',
    },
    {
      type: 'axis',
      value: 3,
      label: '3. Lorem ipsum',
    },
    {
      type: 'activityType',
      value: 1,
      label: '1. Lorem ipsum',
    },
    {
      type: 'activityType',
      value: 2,
      label: '2. Lorem ipsum',
    },
    {
      type: 'activityType',
      value: 3,
      label: '3. Lorem ipsum',
    },
  ],
  isExpanded: false,
  isShowingCategory: false,
  currCategory: null,
};

function FiltersReducer(state = initialState, action) {
  switch (action.type) {
    case FiltersActions.SHOWED_CATEGORY:
      return Object.assign({}, state, {
        isShowingCategory: true,
        currCategory: action.category,
      });

    case FiltersActions.CLOSED_CATEGORY:
      return Object.assign({}, state, {
        isShowingCategory: false,
      });

    case FiltersActions.TOGGLED_FILTER:
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

    case FiltersActions.TOGGLED_PANEL:
      return Object.assign({}, state, {
        isExpanded: !state.isExpanded,
      });

    case FiltersActions.CLEARED_FILTERS:
      return Object.assign({}, state, {
        filters: state.filters.map(item => {
          return {
            ...item,
            isActive: false,
          };
        })
      });

    case FiltersActions.SEARCHED:
      if (state.filters.findIndex(item => item.isActive) >= 0) {
        return Object.assign({}, state, {
          isExpanded: false,
        });
      } else {
        return Object.assign({}, state, {
          showSearchWarning: true,
        });
      }

    case FiltersActions.DISMISSED_SEARCH_WARNING:
      return Object.assign({}, state, {
        showSearchWarning: false,
      });
      
    default:
      return state;
  }
}

export default FiltersReducer;
