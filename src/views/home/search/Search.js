import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurricularComponentField from './CurricularComponentField';
import FiltersActions from 'actions/FiltersActions';
import SearchField from './SearchField';
import YearField from './YearField';
import styles from './Search.scss';

class Search extends Component {
  onClicked = () => {
    this.props.search();
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Encontre sequências de atividades para a sala de aula</p>
        <div className={styles.box}>
          <SearchField />
          <YearField />
          <CurricularComponentField />
          <button className={styles.btn1} onClick={this.onClicked}>
            Buscar
          </button>
        </div>
        <button className={styles.btn2} onClick={this.onClicked}>
          Buscar
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(FiltersActions.load());
    },
    search: () => {
      
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
