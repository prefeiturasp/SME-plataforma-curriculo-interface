import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import FiltersActions from '../actions/FiltersActions.js'
import Activity from './Activity';
import Curriculum from './Curriculum';
import Discover from './Discover';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './Home';
import LearningObjectives from './LearningObjectives';
import KnowledgeMatrices from './KnowledgeMatrices';
import KnowledgeMatricesItem from './KnowledgeMatricesItem';
import Search from './Search';
import Sequence from './sequences/Sequence';
import Sequences from './sequences/Sequences';
import SustainableDevelopmentGoals from './SustainableDevelopmentGoals';
import SustainableDevelopmentGoalsItem from './SustainableDevelopmentGoalsItem';

Modal.setAppElement('#root');

class App extends Component {
  onClickedClose() {
    this.props.dismissSearchWarning();
  }

  render() {
    return (
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
        <Modal
          className="modal"
          overlayClassName="overlay"
          contentLabel="Example Modal"
          isOpen={this.props.showSearchWarning}
          onRequestClose={this.props.dismissSearchWarning}
          shouldCloseOnOverlayClick={true}>
          <button onClick={this.props.dismissSearchWarning}>
            <i className="fa fa-times"></i>
          </button>
          <p>
            <i className="fa fa-exclamation-circle"></i>
            <span>Selecione pelo menos um ano ou componente curricular para encontrar sequencias de atividades.</span>
          </p>
        </Modal>
      </div>
    );
  }
}

App.propTypes = {
  showSearchWarning: PropTypes.bool,
  dismissSearchWarning: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    showSearchWarning: state.FiltersReducer.showSearchWarning,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dismissSearchWarning: () => {
      dispatch(FiltersActions.dismissSearchWarning());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
