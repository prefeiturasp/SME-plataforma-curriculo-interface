import SequencesActions from '../actions/SequencesActions';

const sequence = {
  id: 1,
  component: 'Ciências Naturais',
  title: 'Os Movimentos do nosso Planeta',
  classes: 16,
  activities: [
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      image: 'http://via.placeholder.com/60x60',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
  ],
  description: 'Nesta unidade, as sequências de atividades oferecem diferentes oportunidades para que os estudantes possam ouvir, ler e escrever os textos literários. É importante que mesmo sem saber ler e escrever convencionalmente as crianças participem das situações de intercâmbio de leitores, para elaborar suas próprias interpretações sobre as obras lidas, confrontar ideias de outros colegas e construir significados cada vez mais elaborados sobre textos, preservando assim, o sentido das práticas de linguagem que exercem fora da escola.',
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
  currSequence: null,
};

function SequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SequencesActions.LOADED:
      return state;

    case SequencesActions.LOADED_MORE:
      return state;
      
    default:
      return state;
  }
}

export default SequencesReducer;
