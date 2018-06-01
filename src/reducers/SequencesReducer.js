import SequencesActions from '../actions/SequencesActions';

const sequence = {
  id: 1,
  name: 'Os Movimentos do nosso Planeta',
  description: 'Nesta unidade, as sequências de atividades oferecem diferentes oportunidades para que os estudantes possam ouvir, ler e escrever os textos literários. É importante que mesmo sem saber ler e escrever convencionalmente as crianças participem das situações de intercâmbio de leitores, para elaborar suas próprias interpretações sobre as obras lidas, confrontar ideias de outros colegas e construir significados cada vez mais elaborados sobre textos, preservando assim, o sentido das práticas de linguagem que exercem fora da escola.',
  image: 'http://via.placeholder.com/1110x568',
  classes: 16,
  year: {
    label: '1º ano',
  },
  component: {
    name: 'Ciências Naturais',
    color: '#01add2',
  },
  activities: [
    {
      id: 1,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 2,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 3,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 4,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 5,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 6,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 7,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 8,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 9,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
    {
      id: 10,
      image: 'http://via.placeholder.com/256x128',
      name: 'Identificando os diferentes sons',
      classes: 2,
    },
  ],
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
  books: [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
  ],
  relatedComponents: [
    {
      name: 'Língua Portuguesa',
    },
  ],
};

const initialState = {
  sequences: [sequence, sequence, sequence, sequence, sequence, sequence],
  currSequence: sequence,
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
