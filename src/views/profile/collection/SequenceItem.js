import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import iconCheck from 'images/icon/check.png';
import iconDelete from 'images/icon/delete.svg';
import styles from './SequenceItem.scss';

class SequenceItem extends React.PureComponent {
  onClickedDelete = () => {

  }

  render() {
    const { component, componentColor, image, isCompleted, name, slug } = this.props;

    const link = `/sequencia/${slug}`;

    const bar = isCompleted
      ? <div className={styles.bar}>
          <span>
            <img
              src={iconCheck}
              alt="Sequência realizada"
            />
            Sequência realizada
          </span>
          <button>
            Avaliar
          </button>
        </div>
      : null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <NavLink className={styles.image} to={link}>
            <img
              src={image}
              alt={name}
            />
          </NavLink>
          <NavLink className={styles.info} to={link}>
            <h4 style={{color: componentColor}}>
              {component}
            </h4>
            <h3>
              {name}
            </h3>
          </NavLink>
          <button onClick={this.onClickedDelete}>
            <img
              src={iconDelete}
              alt="Excluir"
            />
          </button>
        </div>
        {bar}
      </div>
    );
  }
}

SequenceItem.propTypes = {
  component: PropTypes.string.isRequired,
  componentColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SequenceItem;
