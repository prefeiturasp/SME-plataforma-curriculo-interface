import React, { Component } from 'react';
import CategoryItemButton from './CategoryItemButton';
import CategoryItemImageButton from './CategoryItemImageButton';
import styles from './CategoryPanel.css';

class CategoryPanel extends Component {
  render() {
    const shouldUseImage = this.props.items.findIndex(item => {
      return item.image;
    }) >= 0;

    const classes = [styles.wrapper];
    if (shouldUseImage) {
      classes.push(styles.images);
    }
    
    const items = this.props.items.map((item, i) => {
      return shouldUseImage ? (
        <CategoryItemImageButton key={i} item={item} />
      ) : (
        <CategoryItemButton key={i} item={item} />
      );
    });

    return (
      <ul className={classes.join(' ')}>
        {items}
      </ul>
    );
  }
}

export default CategoryPanel;
