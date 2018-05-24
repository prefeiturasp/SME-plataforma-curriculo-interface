import React, { Component } from 'react';
import YearButton from './YearButton';
import ComponentButton from './ComponentButton';
import CategoryButton from './CategoryButton';
import CategoryPanel from './CategoryPanel';
import styles from'./FilterPanel.css';

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.onClickedCategory = this.onClickedCategory.bind(this);
  }

  onClickedYear(e) {
    console.log('onClickedYear', e.currentTarget);
  }

  onClickedComponent(e) {
    console.log('onClickedComponent', e.currentTarget);
  }

  onClickedCategory(e) {
    console.log('onClickedCategory', e.currentTarget);
  }

  onClickedSearch() {
    console.log('onClickedSearch');
  }

  render() {
    const categories = [
      {
        id: 1,
        label: 'Objetivos de Desenvolvimento Sustentável',
      },
      {
        id: 2,
        label: 'Matriz de Saberes',
      },
      {
        id: 3,
        label: 'Objetivos de Aprendizagem',
      },
      {
        id: 4,
        label: 'Eixo',
      },
      {
        id: 5,
        label: 'Tipo de Atividade',
      },
    ];

    const yearButtons = this.props.filters.filter(item => {
      return item.type === 'year';
    }).map((item, i) => {
      return (
        <YearButton key={i} year={item} onClick={this.onClickedYear} />
      );
    });

    const componentButtons = this.props.filters.filter(item => {
      return item.type === 'component';
    }).map((item, i) => {
      return (
        <ComponentButton key={i} component={item} onClick={this.onClickedComponent} />
      );
    });

    const categoryButtons = categories.map((item, i) => {
      return (
        <CategoryButton key={i} category={item} onClick={this.onClickedCategory} />
      );
    });

    const categoryValues = this.props.filters.filter(item => {
      return item.type === 'knowledgeMatrix';
    });

    return (
      <div className={styles.wrapper}>
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
            <ul>
              {categoryButtons}
            </ul>
            <CategoryPanel items={categoryValues} />
          </div>
        </div>
        <button className="btn" onClick={this.onClickedSearch.bind(this)}>
          Buscar Sequência
        </button>
      </div>
    );
  }
}

export default FilterPanel;
