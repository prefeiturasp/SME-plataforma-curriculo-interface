import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';
import 'components/layout/FullModal.scss';
import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Analytics from 'react-router-ga';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Activity from 'views/activity/Activity';
import Alert from 'components/Alert';
import AppLoading from 'components/loading/AppLoading';
import Classrooms from 'views/profile/classrooms/Classrooms';
import Collection from 'views/profile/collection/Collection';
import Confirm from 'components/Confirm';
import Curriculum from 'views/curriculum/Curriculum';
import EditCollection from 'views/profile/collection/edit/EditCollection';
import EditProfile from 'views/profile/edit/EditProfile';
import Home from 'views/home/Home';
import LearningObjectives from 'views/learningObjectives/LearningObjectives';
import KnowledgeMatrix from 'views/knowledgeMatrix/KnowledgeMatrix';
import KnowledgeMatrixDetail from 'views/knowledgeMatrix/Detail';
import Profile from 'views/profile/Profile';
import Roadmap from 'views/roadmap/Roadmap';
import SaveSequence from 'views/sequence/save/SaveSequence';
import Sequence from 'views/sequence/Sequence';
import Sequences from 'views/sequences/Sequences';
import SustainableDevGoalDetail from 'views/sustainableDevGoals/Detail';
import SustainableDevGoals from 'views/sustainableDevGoals/SustainableDevGoals';

import reducers from 'reducers';
import registerServiceWorker from 'utils/registerServiceWorker';
import theme from 'utils/theme';

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
          <Route exact path="/sequencias" component={Sequences} />
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
          <Route exact path="/sequencia/:slug" component={Sequence} />
          <Route
            exact
            path="/sequencia/:slug1/atividade/:slug2"
            component={Activity}
          />
          <Route exact path="/curriculo" component={Curriculum} />
          <Route exact path="/ods" component={SustainableDevGoals} />
          <Route exact path="/matriz-de-saberes" component={KnowledgeMatrix} />
          <Route
            exact
            path="/objetivos-de-aprendizagem"
            component={LearningObjectives}
          />
          <Route exact path="/descobrir" component={Roadmap} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/colecao/:id" component={Collection} />
        </Switch>
        <Route exact path="/ods/:id" component={SustainableDevGoalDetail} />
        <Route
          exact
          path="/matriz-de-saberes/:index"
          component={KnowledgeMatrixDetail}
        />
        <Route exact path="/turmas" component={Classrooms} />
        <Route exact path="/colecao/:id/editar" component={EditCollection} />
        <Route exact path="/perfil/editar" component={EditProfile} />
        <Route exact path="/sequencia/:slug/salvar" component={SaveSequence} />
      </Fragment>
    );
  }
}

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Analytics id="UA-85250794-5">
        <MuiThemeProvider theme={theme}>
          <Route component={ModalSwitch} />
          <AppLoading />
          <Alert />
          <Confirm />
        </MuiThemeProvider>
      </Analytics>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
