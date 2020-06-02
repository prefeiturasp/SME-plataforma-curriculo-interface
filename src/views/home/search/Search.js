import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import AlertActions from 'actions/AlertActions';
import CurricularComponentField from './CurricularComponentField';
import FiltersActions from 'actions/FiltersActions';
import SearchField from './SearchField';
import SegmentField from './SegmentField';
import StageField from './StageField';
import YearField from './YearField';
import styles from './Search.scss';

class Search extends Component {
  onSubmit = () => {
    const { filters, filtersExtra, query } = this.props;
    let activeFilters = filters.filter(item => item.isActive);
    activeFilters = activeFilters.concat(filtersExtra.filter(item => item.isActive));
    if (activeFilters.length || query) {
      history.push('/sequencias', { isSearch: true });
    } else {
      this.props.openAlert(
        'Selecione pelo menos um segmento ou componente curricular para encontrar sequências de atividades.'
      );
    }
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Encontre sequências de atividades para a sala de aula</p>
        <div className={styles.box}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <SearchField onSubmit={this.onSubmit} />
            </div>
            <div className="col-md-4 col-sm-12">
              <CurricularComponentField />
            </div>
            <div className="col-md-4 col-sm-12">
              <button className={styles.btn1} onClick={this.onSubmit}>
                Buscar
              </button>
            </div>
            <div className="col-md-4 col-sm-12">
              <SegmentField />
            </div>
            <div className="col-md-4 col-sm-12">
              <StageField />
            </div>
            <div className="col-md-4 col-sm-12">
              <YearField />
            </div>
          </div>
          <button className={styles.btn2} onClick={this.onSubmit}>
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  filters: PropTypes.array,
  filtersExtra: PropTypes.array,
  query: PropTypes.string,
  load: PropTypes.func.isRequired,
  openAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.FiltersReducer.filters,
    filtersExtra: state.FiltersReducer.filters,
    query: state.FiltersReducer.query,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(FiltersActions.load());
    },
    openAlert: message => {
      dispatch(AlertActions.open(message));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
