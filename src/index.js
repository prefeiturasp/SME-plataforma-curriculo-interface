import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import Activity from './views/activity/Activity';
import AppModal from './views/util/AppModal';
import BodyManager from './views/util/BodyManager';
import Curriculum from './views/curriculum/Curriculum';
import Footer from './views/common/Footer';
import Header from './views/common/Header';
import Home from './views/home/Home';
import LearningObjectives from './views/learningObjectives/LearningObjectives';
import KnowledgeMatrices from './views/knowledgeMatrices/KnowledgeMatrices';
import KnowledgeMatrix from './views/knowledgeMatrices/KnowledgeMatrix';
import Roadmap from './views/roadmap/Roadmap';
import Sequence from './views/sequence/Sequence';
import Sequences from './views/sequences/Sequences';
import SustainableDevGoal from './views/sustainableDevGoals/SustainableDevGoal';
import SustainableDevGoals from './views/sustainableDevGoals/SustainableDevGoals';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/sequencias' component={Sequences} />
        <Route path='/sequencia/:id' component={Sequence} />
        <Route path='/atividade/:id' component={Activity} />
        <Route path='/curriculo' component={Curriculum} />
        <Route path='/ods' component={SustainableDevGoals} />
        <Route path='/ods/:id' component={SustainableDevGoal} />
        <Route path='/matrizes-de-saberes' component={KnowledgeMatrices} />
        <Route path='/matrizes-de-saberes/:id' component={KnowledgeMatrix} />
        <Route path='/objetivos-de-aprendizagem' component={LearningObjectives} />
        <Route path='/descobrir' component={Roadmap} />
        <Footer />
        <AppModal />
        <BodyManager />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
