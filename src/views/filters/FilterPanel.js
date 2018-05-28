import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import FiltersActions from '../../actions/FiltersActions.js'
import YearButton from './YearButton';
import ComponentButton from './ComponentButton';
import CategoryButton from './CategoryButton';
import CategoryPanel from './CategoryPanel';
import styles from'./FilterPanel.css';

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  onClickedSearch() {
    this.props.search();
  }

  onClickedClose() {
    this.props.togglePanel();
  }

  render() {
    const style = this.props.isExpanded ? { height: this.ref.current.clientHeight } : {};
    
    const yearButtons = this.props.filters
      .filter(item => item.type === 'year')
      .map((item, i) => {
        return (
          <YearButton key={i} data={item} />
        );
      });

    const componentButtons = this.props.filters
      .filter(item => item.type === 'component')
      .map((item, i) => {
        return (
          <ComponentButton key={i} data={item} />
        );
      });

    const categoryButtons = this.props.categories.map((item, i) => {
      return (
        <CategoryButton key={i} data={item} />
      );
    });

    return (
      <div className={styles.wrapper} style={style}>
        <div ref={this.ref}>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h4>Ano</h4>
              <h5>Ciclo de Alfabetização</h5>
              <ul className={styles.buttons}>
                {yearButtons}
              </ul>
              <p className={styles.warning}>
                <i className="fa fa-exclamation-circle"></i>
                <span>Em breve, estão disponíveis sequências para todos os os ciclos do Ensino Fundamental.</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <h4>Componente Curricular</h4>
              <ul className={styles.buttons}>
                {componentButtons}
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h4>Filtros</h4>
              <div className={styles.categories}>
                <ul>
                  {categoryButtons}
                </ul>
                <CategoryPanel />
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={this.onClickedSearch.bind(this)}>
            Buscar Sequência
          </button>
          <button className={styles.close} onClick={this.onClickedClose.bind(this)}>
            <i className="fa fa-times" title="Fechar"></i>
          </button>
        </div>
      </div>
    );
  }
}

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool,
  search: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    categories: state.FiltersReducer.categories,
    filters: state.FiltersReducer.filters,
    isExpanded: state.FiltersReducer.isExpanded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: () => {
      dispatch(FiltersActions.search());
    },
    togglePanel: () => {
      dispatch(FiltersActions.togglePanel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
