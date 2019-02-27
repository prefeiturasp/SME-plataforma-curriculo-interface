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
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Activity from 'views/activity/Activity';
import Alert from 'components/Alert';
import AppLoading from 'components/loading/AppLoading';
import Classrooms from 'views/profile/classrooms/Classrooms';
import Collection from 'views/profile/collection/Collection';
import Confirm from 'components/Confirm';
import CreateCollection from 'views/profile/collection/create/CreateCollection';
import Curriculum from 'views/curriculum/Curriculum';
import EditCollection from 'views/profile/collection/edit/EditCollection';
import EditProfile from 'views/profile/edit/EditProfile';
import Home from 'views/home/Home';
import LearningObjectives from 'views/learningObjectives/LearningObjectives';
import KnowledgeMatrix from 'views/knowledgeMatrix/KnowledgeMatrix';
import KnowledgeMatrixDetail from 'views/knowledgeMatrix/Detail';
import Login from 'views/login/Login';
import Profile from 'views/profile/Profile';
import Roadmap from 'views/roadmap/Roadmap';
import SaveSequence from 'views/sequence/save/SaveSequence';
import Sequence from 'views/sequence/Sequence';
import Sequences from 'views/sequences/Sequences';
import Snackbar from 'components/Snackbar';
import SustainableDevGoalDetail from 'views/sustainableDevGoals/Detail';
import SustainableDevGoals from 'views/sustainableDevGoals/SustainableDevGoals';

import reducers from 'reducers';
import registerServiceWorker from 'utils/registerServiceWorker';
import theme from 'utils/theme';

export const history = createBrowserHistory();

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
          <Route exact path="/" component={Home} />
          <Route path="/sequencias" component={Sequences} />
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
          <Route exact path="/curriculo" component={Curriculum} />
          <Route path="/ods" component={SustainableDevGoals} />
          <Route path="/matriz-de-saberes" component={KnowledgeMatrix} />
          <Route
            exact
            path="/objetivos-de-aprendizagem"
            component={LearningObjectives}
          />
          <Route exact path="/descobrir" component={Roadmap} />
          <Route path="/perfil" component={Profile} />
          <Route path="/colecao/:id" component={Collection} />
        </Switch>
        <ModalRoute
          path="/ods/:id"
          parentPath="/ods"
          component={SustainableDevGoalDetail}
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
          path="/colecao/:id/editar"
          component={EditCollection}
          {...modalProps}
        />
        <ModalRoute exact path="/login" component={Login} {...modalProps} />
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

registerServiceWorker();
