import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleImage.scss';

class ModuleImage extends React.PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <img
          src={this.props.src}
          alt={this.props.alt}
        />
        <p
          className="source"
          dangerouslySetInnerHTML={{__html: this.props.source}}
        />
      </div>
    );
  }
}

ModuleImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ModuleImage;
