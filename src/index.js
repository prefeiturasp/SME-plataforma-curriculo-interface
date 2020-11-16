import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';
import 'react-router-modal/css/react-router-modal.css';
import 'components/layout/FullModal.scss';
import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Analytics from 'react-router-ga';
import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Activity from 'views/activity/Activity';
import Alert from 'components/Alert';
import AnswerBooks from 'views/answerBooks/AnswerBooks';
import ComplementBooks from 'views/complementBooks/ComplementBooks';
import AppLoading from 'components/loading/AppLoading';
import Challenge from 'views/challenge/Challenge';
import Classrooms from 'views/classrooms/Classrooms';
import Collection from 'views/collection/Collection';
import Confirm from 'components/Confirm';
import Consultations from 'views/consultations/Consultations';
import ConsultationDetail from 'views/consultations/Detail';
import CreateCollection from 'views/collection/create/CreateCollection';
import Basic from 'views/curriculum/Basic';
import Medium from 'views/curriculum/Medium';
import SurveyForm from 'views/surveyForm/SurveyForm';
import EditCollection from 'views/collection/edit/EditCollection';
import EditProfile from 'views/profile/edit/EditProfile';
import Home from 'views/home/Home';
import LearningObjectives from 'views/learningObjectives/LearningObjectives';
import KnowledgeMatrix from 'views/knowledgeMatrix/KnowledgeMatrix';
import KnowledgeMatrixDetail from 'views/knowledgeMatrix/Detail';
import Login from 'views/login/Login';
import Methodology from 'views/methodology/Methodology';
import MyResults from 'views/myResults/MyResults';
import Profile from 'views/profile/Profile';
import RateSequence from 'views/sequence/rate/RateSequence';
import Rating from 'views/sequence/rating/Rating';
import Result from 'views/result/Result';
import SaveSequence from 'views/sequence/save/SaveSequence';
import SendResult from 'views/result/send/SendResult';
import Sequence from 'views/sequence/Sequence';
import Sequences from 'views/sequences/Sequences';
import Projects from 'views/projects/Projects';
import CreateProject from 'views/projects/CreateProject';
import Snackbar from 'components/Snackbar';
import SustainableDevGoalDetail from 'views/sustainableDevGoals/Detail';
import SustainableDevGoals from 'views/sustainableDevGoals/SustainableDevGoals';
import Technologies from 'views/technologies/Technologies';

import moment from 'moment';
import reducers from 'reducers';
// import registerServiceWorker from 'utils/registerServiceWorker';
import theme from 'utils/theme';

export const history = createBrowserHistory();

moment.updateLocale('pt-br', {
  relativeTime : {
    past : '%s atrás',
  },
});

const store = createStore(reducers, applyMiddleware(thunk));

const fullModalProps = {
  className: 'fullModal',
  inClassName: 'fullModalIn',
  outClassName: 'fullModalOut',
  backdropClassName: 'backdrop',
  backdropInClassName: 'backdropIn',
  backdropOutClassName: 'backdropOut',
  outDelay: 500,
  onBackdropClick: history.goBack
};

const modalProps = {
  className: 'modal',
  inClassName: 'modalIn',
  outClassName: 'modalOut',
  backdropClassName: 'backdrop',
  backdropInClassName: 'backdropIn',
  backdropOutClassName: 'backdropOut',
  outDelay: 300,
  onBackdropClick: history.goBack
};

class ModalSwitch extends Component {
  componentWillUpdate(nextProps) {
    const location = this.props.location;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const location = this.props.location;
    const isModal = !!(
      location.state &&
      location.state.isModal &&
      this.previousLocation !== location
    );
    const locationProp = isModal ? this.previousLocation : location;

    return (
      <Fragment>
        <Switch location={locationProp}>
          <Route path= "/cadernos-respostas" component={AnswerBooks}/>
          <Route path= "/materiais-complementares" component={ComplementBooks}/>
          <Route exact path="/" component={Home} />
          <Route path="/sequencias" component={Sequences} />
          <Route path="/projetos" component={Projects} />
          <Route path="/novo-projeto" component={CreateProject} />
          <Route path="/consultas-publicas" component={Consultations} />
          <Route exact path="/sequencias/ods/:ods" component={Sequences} />
          <Route
            exact
            path="/sequencias/matriz-de-saberes/:mds"
            component={Sequences}
          />
          <Route
            exact
            path="/sequencias/objetivos-de-aprendizagem/:oda"
            component={Sequences}
          />
          <Route path="/sequencia/:slug" component={Sequence} key={1} />
          <Route path="/imprimir/sequencia/:slug" component={Sequence} key={2} />
          <Route exact path="/atividade/:slug1/:slug2" component={Activity} key={1} />
          <Route exact path="/imprimir/atividade/:slug1/:slug2" component={Activity} key={2} />
          <Route exact path="/curriculo-ensino-fundamental" component={Basic} />
          <Route exact path="/curriculo-ensino-medio" component={Medium} />
          <Route path="/pesquisas/:id/criar-resposta" component={SurveyForm} key={1} />
          <Route path="/ods" component={SustainableDevGoals} />
          <Route path="/matriz-de-saberes" component={KnowledgeMatrix} />
          <Route
            exact
            path="/objetivos-de-aprendizagem"
            component={LearningObjectives}
          />
          <Route path="/perfil" component={Profile} />
          <Route path="/colecao/:id" component={Collection} />
          <Route path="/desafio/:slug" component={Challenge} />
          <Route path="/tecnologias-para-aprendizagem" component={Technologies} />
          <Route exact path="/metodologia/:slug" component={Methodology} />
        </Switch>
        <ModalRoute
          path="/ods/:id"
          parentPath="/ods"
          component={SustainableDevGoalDetail}
          {...fullModalProps}
        />
        <ModalRoute
          path="/consultas-publicas/:id"
          parentPath="/consultas-publicas"
          component={ConsultationDetail}
          {...fullModalProps}
        />
        <ModalRoute
          exact
          path="/matriz-de-saberes/:index"
          parentPath="/matriz-de-saberes"
          component={KnowledgeMatrixDetail}
          {...fullModalProps}
        />
        <ModalRoute
          exact
          path="/perfil/turmas"
          component={Classrooms}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/perfil/criar-colecao"
          component={CreateCollection}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/perfil/editar"
          component={EditProfile}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="Create/colecao/:id/editar"
          componCreateent={EditCollection}
          {...modalProps}
        />
        <ModalRoute exact path="/login" component={Login} {...modalProps} />
        <ModalRoute
          exact
          path="/sequencia/:slug/avaliacao"
          component={Rating}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/sequencia/:slug/avaliar"
          component={RateSequence}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/sequencia/:slug/criar-colecao"
          component={CreateCollection}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/sequencias/:slug/criar-colecao"
          component={CreateCollection}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/sequencia/:slug/salvar"
          component={SaveSequence}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/sequencias/:slug/salvar"
          component={SaveSequence}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/desafio/:slug/enviar"
          component={SendResult}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/desafio/:slug/meus-resultados"
          component={MyResults}
          {...modalProps}
        />
        <ModalRoute
          exact
          path="/desafio/:slug/resultado/:id"
          component={Result}
          {...modalProps}
        />
        <ModalContainer />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Analytics id="UA-85250794-5">
        <MuiThemeProvider theme={theme}>
          <Route component={ModalSwitch} />
          <AppLoading />
          <Snackbar />
          <Alert />
          <Confirm />
        </MuiThemeProvider>
      </Analytics>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
