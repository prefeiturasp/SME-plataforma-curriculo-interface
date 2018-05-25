import SequenceActions from '../actions/SequencesActions';

const sequence = {
  id: 1,
  component: 'Ciências Naturais',
  title: 'Os Movimentos do nosso Planeta',
  classes: 16,
  activities: 10,
  knowledgeMatrices: [
    {
      number: 1,
      name: 'Pensamento Científico, Crítico e Criatividade',
    },
    {
      number: 6,
      name: 'Abertura à Diversidade',
    },
  ],
  learningObjectives: [
    {
      code1: 'EF03',
      code2: 'C',
      code3: '02',
      color: '#01add2',
    },
    {
      code1: 'EF03',
      code2: 'C',
      code3: '12',
      color: '#01add2',
    },
    {
      code1: 'EF03',
      code2: 'C',
      code3: '13',
      color: '#01add2',
    },
  ],
  developmentGoals: [
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Erradicar a Pobreza',
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Acabar com a Fome',
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Vida Saudável',
    },
  ],
};

const initialState = {
  sequences: [sequence, sequence, sequence, sequence, sequence, sequence],
};

function SequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SequenceActions.LOADED:
      return state;

    case SequenceActions.LOADED_MORE:
      return state;
      
    default:
      return state;
  }
}

export default SequencesReducer;
