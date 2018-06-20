import SustainableDevGoalsActions from '../actions/SustainableDevGoalsActions';

const initialState = {
  items: [
    // {
    //   id: 1,
    //   index: 1,
    //   color: '#e5233d',
    //   icon: 'http://via.placeholder.com/60x40',
    //   iconBig: 'http://via.placeholder.com/210x90',
    //   name: 'Erradicação da Pobreza',
    //   description: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
    //   text: 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano.Até 2015, a pobreza havia sido reduzida significamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia.<br><br>Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável, Por isso, a grande pioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!',
    //   goals: [
    //     {
    //       number: '1.1',
    //       text: 'Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia.',
    //     },
    //     {
    //       number: '1.1',
    //       text: 'Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia.',
    //     },
    //     {
    //       number: '1.1',
    //       text: 'Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia.',
    //     },
    //     {
    //       number: '1.1',
    //       text: 'Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia.',
    //     },
    //     {
    //       number: '1.1',
    //       text: 'Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia.',
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   index: 2,
    //   color: '#dea73a',
    //   icon: 'http://via.placeholder.com/60x40',
    //   iconBig: 'http://via.placeholder.com/210x90',
    //   name: 'Fome Zero e Agricultura Sustentável',
    //   description: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
    //   text: 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano.Até 2015, a pobreza havia sido reduzida significamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia.<br><br>Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável, Por isso, a grande pioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!',
    // },
    // {
    //   id: 3,
    //   index: 3,
    //   color: '#4c9f45',
    //   icon: 'http://via.placeholder.com/60x40',
    //   iconBig: 'http://via.placeholder.com/210x90',
    //   name: 'Saúde e Bem-estar',
    //   description: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
    //   text: 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano.Até 2015, a pobreza havia sido reduzida significamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia.<br><br>Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável, Por isso, a grande pioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!',
    // },
    // {
    //   id: 4,
    //   index: 4,
    //   color: '#c5202e',
    //   icon: 'http://via.placeholder.com/60x40',
    //   iconBig: 'http://via.placeholder.com/210x90',
    //   name: 'Educação de Qualidade',
    //   description: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
    //   text: 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano.Até 2015, a pobreza havia sido reduzida significamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia.<br><br>Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável, Por isso, a grande pioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!',
    // },
    // {
    //   id: 5,
    //   index: 5,
    //   color: '#f0412b',
    //   icon: 'http://via.placeholder.com/60x40',
    //   iconBig: 'http://via.placeholder.com/210x90',
    //   name: 'Igualdade de Gênero',
    //   description: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
    //   text: 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano.Até 2015, a pobreza havia sido reduzida significamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia.<br><br>Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável, Por isso, a grande pioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!',
    // },
    // {
    //   id: 6,
    //   index: 6,
    //   color: '#29bee2',
    //   icon: 'http://via.placeholder.com/60x40',
    //   iconBig: 'http://via.placeholder.com/210x90',
    //   name: 'Água Potável e Saneamento',
    //   description: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
    //   text: 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano.Até 2015, a pobreza havia sido reduzida significamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia.<br><br>Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável, Por isso, a grande pioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!',
    // },
  ],
  currItem: null,
};

function SustainableDevGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case SustainableDevGoalsActions.LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case SustainableDevGoalsActions.LOADED:
      return {
        ...state,
        isLoading: false,
        items: action.data,
      };

    case SustainableDevGoalsActions.LOAD_ITEM:
      return {
        ...state,
        isLoading: true,
      };

    case SustainableDevGoalsActions.LOADED_ITEM:
      return {
        ...state,
        isLoading: false,
        currItem: action.data,
      };

    default:
      return state;
  }
}

export default SustainableDevGoalsReducer;
