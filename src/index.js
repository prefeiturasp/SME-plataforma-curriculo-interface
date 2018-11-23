import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Analytics from 'react-router-ga';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import Activity from './views/activity/Activity';
import ActivityPrint from './views/activity/ActivityPrint';
import AppLoading from './views/util/AppLoading';
import AppModal from './views/util/AppModal';
import BodyManager from './views/util/BodyManager';
import Curriculum from './views/curriculum/Curriculum';
import Footer from './views/footer/Footer';
import Header from './views/header/Header';
import Home from './views/home/Home';
import LearningObjectives from './views/learningObjectives/LearningObjectives';
import KnowledgeMatrix from './views/knowledgeMatrix/KnowledgeMatrix';
import KnowledgeMatrixItem from './views/knowledgeMatrix/KnowledgeMatrixItem';
import Roadmap from './views/roadmap/Roadmap';
import ScrollToTop from './views/util/ScrollToTop';
import Sequence from './views/sequence/Sequence';
import SequencePrint from './views/sequence/SequencePrint';
import Sequences from './views/sequences/Sequences';
import SustainableDevGoal from './views/sustainableDevGoals/SustainableDevGoal';
import SustainableDevGoals from './views/sustainableDevGoals/SustainableDevGoals';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.scss';

class ModalSwitch extends Component {
  componentWillUpdate(nextProps) {
    const location = this.props.location;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const location = this.props.location;

    const isModalSustainableDevGoal = !!(
      location.state &&
      location.state.isModalSustainableDevGoal &&
      this.previousLocation !== location
    );

    const isModalKnowledgeMatrix = !!(
      location.state &&
      location.state.isModalKnowledgeMatrix &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Switch location={isModalSustainableDevGoal || isModalKnowledgeMatrix ? this.previousLocation : location}>
          <Route exact path='/' component={Home} />
          <Route exact path='/sequencias' component={Sequences} />
          <Route exact path='/sequencias/ods/:ods' component={Sequences} />
          <Route exact path='/sequencias/matriz-de-saberes/:mds' component={Sequences} />
          <Route exact path='/sequencias/objetivos-de-aprendizagem/:oda' component={Sequences} />
          <Route exact path='/sequencia/:slug' component={Sequence} />
          <Route exact path='/sequencia/:slug1/atividade/:slug2' component={Activity} />
          <Route exact path='/imprimir/sequencia/:slug' component={SequencePrint} />
          <Route exact path='/imprimir/sequencia/:slug1/atividade/:slug2' component={ActivityPrint} />
          <Route exact path='/curriculo' component={Curriculum} />
          <Route exact path='/ods' component={SustainableDevGoals} />
          <Route exact path='/matriz-de-saberes' component={KnowledgeMatrix} />
          <Route exact path='/objetivos-de-aprendizagem' component={LearningObjectives} />
          <Route exact path='/descobrir' component={Roadmap} />
        </Switch>
        {isModalSustainableDevGoal ? <Route exact path='/ods/:id' component={SustainableDevGoal} /> : null}
        {isModalKnowledgeMatrix ? <Route exact path='/matriz-de-saberes/:index' component={KnowledgeMatrixItem} /> : null}
      </div>
    );
  }
}

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Analytics id="UA-85250794-5">
        <ScrollToTop>
          <Header />
            <Route component={ModalSwitch} />
          <Footer />
          <AppLoading />
          <AppModal />
          <BodyManager />
        </ScrollToTop>
      </Analytics>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
