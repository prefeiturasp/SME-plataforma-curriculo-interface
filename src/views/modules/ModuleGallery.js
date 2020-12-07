import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import styles from './ModuleGallery.scss';
import { API_URL } from 'data/constants';

class ModuleGallery extends Component {
  gallery = null;
  state = {
    index: 0,
    isFading: false,
  };

  onSlide = index => {
    this.setState({
      ...this.state,
      isFading: true,
    });
    setTimeout(this.onSlide1, 400, index);
  };

  onSlide1 = index => {
    this.setState({
      index,
      isFading: false,
    });
  };

  renderItem = item => {
    return (
      <img
        className={styles.item}
        src={item.original}
        alt={item.originalAlt || item.description}
      />
    );
  };

  renderLeftNav = (onClick, disabled) => {
    return (
      <button
        aria-label="Imagem anterior"
        className={styles.btnLeft}
        disabled={disabled}
        onClick={onClick}
      />
    );
  };

  renderRightNav = (onClick, disabled) => {
    return (
      <button
        aria-label="Próxima imagem"
        className={styles.btnRight}
        disabled={disabled}
        onClick={onClick}
      />
    );
  };

  render() {
    if (typeof this.props.images === 'undefined') {
      return <div></div>
    }
    const items = this.props.images.map(image => {
      const attrs = image.file_attributes || image.archives_attributes;
      const description = image.subtitle || '';
      return {
        original: API_URL + attrs.default_url,
        description: description,
      };
    });

    const { isFading, index } = this.state;
    const classes = isFading
      ? [styles.description, styles.isFading]
      : [styles.description];
    const description = items[index].description;

    return (
      <div className={styles.wrapper}>
        <ImageGallery
          ref={ref => (this.gallery = ref)}
          items={items}
          onSlide={this.onSlide}
          renderItem={this.renderItem}
          renderLeftNav={this.renderLeftNav}
          renderRightNav={this.renderRightNav}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          slideDuration={300}
        />
        <div className={[classes.join(' ')]}>{description}</div>
      </div>
    );
  }
}

ModuleGallery.propTypes = {
  images: PropTypes.array,
};

export default ModuleGallery;
