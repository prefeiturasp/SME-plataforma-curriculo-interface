const data = {
  id: 1,
  slug: 'projeto-sinais-luminosos-na-aviacao',
  title: 'Projeto Sinais Luminosos na Aviação',
  deadline: '05/06/2018',
  presentation_text: 'Sinais luminosos são muito importantes na aviação, sobretudo quando os aviões voam à noite.\nIncorpore LEDs ao seu simulador e programe-os para que o avião emita sinais de luz.',
  image_attributes: {
    default_url: '',
    large: {
      url: '',
    },
  },
  curricular_components: [],
  knowledge_matrices: [
    {"sequence":1,"title":"Pensamento Científico, Crítico e Criativo"},
    {"sequence":2,"title":"Resolução de Problemas"},
    {"sequence":3,"title":"Comunicação"},
    {"sequence":5,"title":"Autonomia e Determinação"},
    {"sequence":9,"title":"Repertório Cultural"}
  ],
  learning_objectives: [
    {"code":"EF01M01","description":"Reconhecer a utilização de números no seu contexto diário como indicador de quantidade, ordem, medida e código.","color":"#ff0080"},
    {"code":"EF01M02","description":"Formular hipóteses sobre a leitura e escrita numérica, incluindo números familiares e frequentes.","color":"#ff0080"},{"code":"EF01M03","description":"Contar a quantidade de objetos de coleções (fixas ou móveis) e apresentar o resultado por registros verbais e/ou simbólicos e/ou registros numéricos.","color":"#ff0080"},
    {"code":"EF01M04","description":"Realizar recitações orais (de um em um, de dois em dois) em escala ascendente (do menor para o maior) e descendente (do maior para o menor)","color":"#ff0080"},
    {"code":"EF01M05","description":"Comparar números naturais. ","color":"#ff0080"},
    {"code":"EF01M09","description":"Explorar fatos fundamentais da adição e subtração para a constituição de um repertório a ser utilizado na solução de problemas e nos procedimentos de cálculo (mental ou escrito).","color":"#ff0080"},
    {"code":"EF01M13","description":"Solucionar problemas do campo aditivo (composição), utilizando diferentes estratégias pessoais de representação.","color":"#ff0080"},
    {"code":"EF01M16","description":"Identificar, oralmente, pontos de referência para indicar sua localização na sala de aula, usando terminologia própria (direita, esquerda, frente e atrás).","color":"#ff0080"},
    {"code":"EF01M17","description":"Indicar oralmente a posição onde se encontra na sala de aula, utilizando termos que se referem à posição (direita, esquerda, em cima e embaixo), e representa-la por meio de desenhos.","color":"#ff0080"},
    {"code":"EF01M27","description":"Coletar dados de um acontecimento, organizá-los e representá-los em tabelas simples.","color":"#ff0080"},
    {"code":"EF01M34","description":"Participar de jogos e brincadeiras tradicionais que explorem contagens, cálculos rápidos, movimentos etc., realizando adivinhações, decifrando charadas, levantando hipóteses e testando-as.","color":"#ff0080"}
  ],
  sustainable_development_goals: [
    {"id":4,"name":"Educação de Qualidade","icon_url":"/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUFFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0143ca8d47398934452224a7252d1aa6df72ce8d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTVRRMGVERTBOQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c2a23a1df67cdb0e9fc69933337459a5f713165d/obj4.jpg","sub_icon_url":"/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7eb163629f75e8f01adbd76664153fa90ff44f30/sub_icon4.png"},
    {"id":11,"name":"Cidades e comunidades sustentáveis","icon_url":"/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b2ae3a39c9e3ef12cf077fff49cf1a7d7c62d115/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTVRRMGVERTBOQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c2a23a1df67cdb0e9fc69933337459a5f713165d/obj11.jpg","sub_icon_url":"/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdThFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be710dc8a8c472297679b1d6dcd0d9d98171e94b/sub_icon11.png"}
  ],
  axis: [
    { name: "Letramento digital" },
    { name: "TIC" }
  ],
};

const results = [
  {
    id: 1,
    next: 2,
    author: {
      name: 'Lucas',
      image: null,
    },
    year: '1o ano',
    time: '30 min atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu porttitor nisl. Nulla facilisi. Sed ornare gravida arcu, sed facilisis liberodiam eros',
    attachments: [
      {
        fileName: 'Apresentação.pdf',
        size: '10 MB',
        url: 'apresentacao.pdf',
      },
      {
        fileName: 'Projeto.pdf',
        size: '20 MB',
        url: 'projeto.pdf',
      },
    ],
  },
  {
    id: 2,
    previous: 1,
    next: 3,
    author: {
      name: 'Marina Silva',
      image: 'picture.jpg',
    },
    year: '1o ano',
    time: '1 dia atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu porttitor nisl. Nulla facilisi. Sed ornare gravida arcu, sed facilisis liberodiam eros',
    attachments: [
      {
        fileName: 'Apresentação.pdf',
        size: '10 MB',
        url: 'apresentacao.pdf',
      },
      {
        fileName: 'Projeto.pdf',
        size: '20 MB',
        url: 'projeto.pdf',
      },
    ],
  },
  {
    id: 3,
    previous: 2,
    author: {
      name: 'Flávio Souza',
      image: null,
    },
    year: '1o ano',
    time: '22/03/2019',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu porttitor nisl. Nulla facilisi. Sed ornare gravida arcu, sed facilisis liberodiam eros',
    attachments: [],
  },
];

const ChallengeActions = {
  DELETE: 'ChallengesActions.DELETE',
  DELETED: 'ChallengesActions.DELETED',
  LOAD: 'ChallengeActions.LOAD',
  LOAD_RESULTS: 'ChallengeActions.LOAD_RESULTS',
  LOADED: 'ChallengeActions.LOADED',
  LOADED_RESULTS: 'ChallengeActions.LOADED_RESULTS',
  
  delete(id) {
    return dispatch => {
      dispatch({ type: ChallengeActions.DELETE });

      setTimeout(() => {
        dispatch({ type: ChallengeActions.DELETED });
      }, 1000);
    };
  },
  load(slug) {
    return dispatch => {
      dispatch({ type: ChallengeActions.LOAD });

      setTimeout(() => {
        dispatch({ data, type: ChallengeActions.LOADED });
      }, 1000);
    };
  },
  loadMoreResults(slug) {
    return dispatch => {
      dispatch({ type: ChallengeActions.LOAD_RESULTS });

      setTimeout(() => {
        dispatch({ data: results, type: ChallengeActions.LOADED_RESULTS });
      }, 1000);
    };
  },
  loadResults(slug) {
    return dispatch => {
      dispatch({ type: ChallengeActions.LOAD_RESULTS });

      setTimeout(() => {
        dispatch({ data: results, type: ChallengeActions.LOADED_RESULTS });
      }, 1000);
    };
  }
};

export default ChallengeActions;
