import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';

import Atividade from './views/Atividade';
import Busca from './views/Busca';
import Cabecalho from './views/Cabecalho';
import Curriculo from './views/Curriculo';
import Descobrir from './views/Descobrir';
import Rodape from './views/Rodape';
import Home from './views/Home';
import MatrizDeSaberes from './views/MatrizDeSaberes';
import MatrizDeSaberesItem from './views/MatrizDeSaberesItem';
import ObjetivosDeAprendizagem from './views/ObjetivosDeAprendizagem';
import Ods from './views/Ods';
import OdsItem from './views/OdsItem';
import Sequencia from './views/Sequencia';
import Sequencias from './views/Sequencias';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Cabecalho />
      <Route exact path='/' component={Home} />
      <Route path='/busca' component={Busca} />
      <Route path='/sequencias' component={Sequencias} />
      <Route path='/sequencia/:id' component={Sequencia} />
      <Route path='/atividade/:id' component={Atividade} />
      <Route path='/curriculo' component={Curriculo} />
      <Route path='/ods' component={Ods} />
      <Route path='/ods/:id' component={OdsItem} />
      <Route path='/matriz-de-saberes' component={MatrizDeSaberes} />
      <Route path='/matriz-de-saberes/:id' component={MatrizDeSaberesItem} />
      <Route path='/objetivos-de-aprendizagem' component={ObjetivosDeAprendizagem} />
      <Route path='/descobrir' component={Descobrir} />
      <Rodape />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
