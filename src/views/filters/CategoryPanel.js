import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItemButton from './CategoryItemButton';
import CategoryItemImageButton from './CategoryItemImageButton';
import styles from './CategoryPanel.css';

class CategoryPanel extends Component {
  onClickedClose() {
    
  }

  render() {
    const hasImage = this.props.items.findIndex(item => item.image) >= 0;
    const classes = hasImage ? [styles.wrapper, styles.images] : [styles.wrapper];
    
    const items = this.props.items.map((item, i) => {
      return hasImage ? (
        <CategoryItemImageButton key={i} data={item} />
      ) : (
        <CategoryItemButton key={i} data={item} />
      );
    });

    return (
      <div>
        <ul className={classes.join(' ')}>
          {items}
        </ul>
        <button className={styles.back} onClick={this.onClickedClose.bind(this)}>
          <i className="fa fa-chevron-left"></i>
          Voltar
        </button>
      </div>
    );
  }
}

CategoryPanel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CategoryPanel;
