import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';

import Activity from './views/Activity';
import Curriculum from './views/Curriculum';
import Discover from './views/Discover';
import Footer from './views/Footer';
import Header from './views/Header';
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

ReactDOM.render(
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
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
