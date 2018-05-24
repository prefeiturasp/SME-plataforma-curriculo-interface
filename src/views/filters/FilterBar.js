import React, { Component } from 'react';
import ActiveItem from'./ActiveItem';
import styles from'./FilterBar.css';

class FilterBar extends Component {
  onClickedItem(e) {
    
  }

  onClickedExpand() {

  }

  render() {
    const items = this.props.filters.map((item, i) => {
      return (
        <ActiveItem
          key={i}
          filter={item}
          onClick={this.onClickedItem.bind(this)} />
      );
    })

    return (
      <div className={styles.wrapper}>
        <ul>
          {items}
        </ul>
        <button className="btn" onClick={this.onClickedExpand.bind(this)}>
          <i className="fa fa-sliders-h"></i>
          Filtros
        </button>
      </div>
    );
  }
}

export default FilterBar;
