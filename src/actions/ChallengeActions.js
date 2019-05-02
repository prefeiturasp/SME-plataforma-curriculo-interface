import Api from 'data/Api';
import SnackbarActions from 'actions/SnackbarActions';

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
    images: [
    ],
    videos: [
      'https://www.youtube.com/watch?v=iAncnIdt2vw',
    ],
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
    images: [
    ],
    videos: [
      'https://www.youtube.com/watch?v=iAncnIdt2vw',
    ],
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
    images: [],
    videos: [],
    attachments: [],
  },
];

const ChallengeActions = {
  DELETE: 'ChallengesActions.DELETE',
  DELETED: 'ChallengesActions.DELETED',
  LOAD: 'ChallengeActions.LOAD',
  LOAD_MORE_RESULTS: 'ChallengeActions.LOAD_MORE_RESULTS',
  LOAD_RESULTS: 'ChallengeActions.LOAD_RESULTS',
  LOADED: 'ChallengeActions.LOADED',
  LOADED_MORE_RESULTS: 'ChallengeActions.LOADED_MORE_RESULTS',
  LOADED_RESULTS: 'ChallengeActions.LOADED_RESULTS',
  SAVE: 'ChallengeActions.SAVE',
  SAVED: 'ChallengeActions.SAVED',
  
  delete(id) {
    return dispatch => {
      dispatch({ type: ChallengeActions.DELETE });

      setTimeout(() => {
        dispatch({ type: ChallengeActions.DELETED });
      }, 1000);
    };
  },
  load(slug) {
    return Api.simpleGet(
      `/api/desafios/${slug}`,
      ChallengeActions.LOAD,
      ChallengeActions.LOADED
    );
  },
  loadMoreResults(page) {
    return dispatch => {
      dispatch({ type: ChallengeActions.LOAD_MORE_RESULTS });

      setTimeout(() => {
        dispatch({ data: results, type: ChallengeActions.LOADED_MORE_RESULTS });
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
  },
  save(id) {
    return dispatch => {
      dispatch({ type: ChallengeActions.SAVE });

      setTimeout(() => {
        dispatch({ type: ChallengeActions.SAVED });
        dispatch(SnackbarActions.open('Desafio salvo'));
      }, 1000);
    };
  },
};

export default ChallengeActions;
