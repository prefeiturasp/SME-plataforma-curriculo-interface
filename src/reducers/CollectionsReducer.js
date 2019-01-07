import CollectionsActions from 'actions/CollectionsActions';

const initialState = {
  items: [
    {
      id: 1,
      name: '[2018] EF 1A Matemática (1)',
      sequences: 2,
      classrooms: 1,
      years: [
        {
          color: '#ff0784',
          year: '1A',
        },
      ],
    },
    {
      id: 2,
      name: '[2018] EF 1A Matemática (2)',
      sequences: 2,
      classrooms: 1,
      years: [
        {
          color: '#ff0784',
          year: '1A',
        },
      ],
    },
    {
      id: 3,
      name: '[2018] EF 1A Ciências Naturais',
      sequences: 2,
      classrooms: 1,
      years: [
        {
          color: '#66ac70',
          year: '1A',
        },
      ],
    },
    {
      id: 4,
      name: '[2018] EF 1A História',
      sequences: 2,
      classrooms: 1,
      years: [
        {
          color: '#66ac70',
          year: '1A',
        },
      ],
    },
    {
      id: 5,
      name: 'Planeta',
      sequences: 5,
      classrooms: 0,
      years: [],
    },
    {
      id: 6,
      name: 'Água',
      sequences: 0,
      classrooms: 3,
      years: [
        {
          color: '#66ac70',
          year: '1A',
        },
        {
          color: '#ff0784',
          year: '1A',
        },
      ],
    },
  ],
};

function CollectionsReducer(state = initialState, action) {
  switch (action.type) {
    case CollectionsActions.LOAD:
      return {
        ...state,
      };

    case CollectionsActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    default:
      return state;
  }
}

export default CollectionsReducer;
