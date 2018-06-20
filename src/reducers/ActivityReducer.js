import ActivityActions from '../actions/ActivityActions';

const initialState = {
  currActivity: {
    id: 2,
    prevId: 1,
    nextId: 3,
    thumbnail: 'http://via.placeholder.com/256x128',
    cover: 'http://via.placeholder.com/1110x568',
    image: 'http://via.placeholder.com/1110x568',
    name: 'Identificando os diferentes sons',
    classes: 2,
    description: 'Nesta unidade, as sequências de atividades oferecem diferentes oportunidades para que os estudantes possam ouvir, ler e escrever os textos literários. É importante que mesmo sem saber ler e escrever convencionalmente as crianças participem das situações de intercâmbio de leitores, para elaborar suas próprias interpretações sobre as obras lidas, confrontar ideias de outros colegas e construir significados cada vez mais elaborados sobre textos, preservando assim, o sentido das práticas de linguagem que exercem fora da escola.',
    sequence: {
      id: 1,
      name: 'Os Movimentos do nosso Planeta',
      year: {
        label: '1º ano',
      },
      curricularComponent: {
        label: 'Ciências Naturais',
        color: '#01add2',
      },
    },
    materials: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
  },
};

function ActivityReducer(state = initialState, action) {
  switch (action.type) {
    case ActivityActions.LOAD:
      return state;

    default:
      return state;
  }
}

export default ActivityReducer;
