import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';

import reducers from './reducers';
import Activity from './views/Activity';
import Curriculum from './views/Curriculum';
import Discover from './views/Discover';
import Footer from './views/common/Footer';
import Header from './views/common/Header';
import Home from './views/Home';
import LearningObjectives from './views/LearningObjectives';
import KnowledgeMatrices from './views/KnowledgeMatrices';
import KnowledgeMatricesItem from './views/KnowledgeMatricesItem';
import Search from './views/Search';
import Sequence from './views/sequences/Sequence';
import Sequences from './views/sequences/Sequences';
import SustainableDevelopmentGoals from './views/SustainableDevelopmentGoals';
import SustainableDevelopmentGoalsItem from './views/SustainableDevelopmentGoalsItem';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/busca' component={Search} />
        <Route path='/sequencias' component={Sequences} />
        <Route path='/sequencia/:id' component={Sequence} />
        <Route path='/atividade/:id' component={Activity} />
        <Route path='/curriculo' component={Curriculum} />
        <Route path='/ods' component={SustainableDevelopmentGoals} />
        <Route path='/ods/:id' component={SustainableDevelopmentGoalsItem} />
        <Route path='/matriz-de-saberes' component={KnowledgeMatrices} />
        <Route path='/matriz-de-saberes/:id' component={KnowledgeMatricesItem} />
        <Route path='/objetivos-de-aprendizagem' component={LearningObjectives} />
        <Route path='/descobrir' component={Discover} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
