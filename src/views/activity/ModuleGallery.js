import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import styles from './ModuleGallery.scss';

class ModuleGallery extends Component {
  renderLeftNav = (onClick, disabled) => {
    return (
      <button
        className={styles.btnLeft}
        disabled={disabled}
        onClick={onClick}
      />
    );
  }

  renderRightNav = (onClick, disabled) => {
    return (
      <button
        className={styles.btnRight}
        disabled={disabled}
        onClick={onClick}
      />
    );
  }

  renderFullscreenButton = (onClick, isFullscreen) => {
    return (
      <button
        className={styles.btnFull}
        onClick={onClick}
      />
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <ImageGallery
          items={this.props.images}
          renderLeftNav={this.renderLeftNav}
          renderRightNav={this.renderRightNav}
          renderFullscreenButton={this.renderFullscreenButton}
          showPlayButton={false}
          showThumbnails={false}
          slideDuration={300}
          useBrowserFullscreen={false}
        />
      </div>
    );
  }
}

ModuleGallery.propTypes = {
  images: PropTypes.array,
};

export default ModuleGallery;
