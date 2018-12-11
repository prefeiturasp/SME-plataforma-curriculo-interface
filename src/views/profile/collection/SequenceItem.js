import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ConfirmActions from 'actions/ConfirmActions';
import iconCheck from 'images/icon/check.png';
import iconDelete from 'images/icon/delete.svg';
import styles from './SequenceItem.scss';

class SequenceItem extends React.PureComponent {
  onClickedConfirm = () => {
    console.log('confirmed!');
  }

  onClickedDelete = () => {
    this.props.openConfirm(
      'Excluir sequência?',
      'Você não poderá reverter esta ação.',
      'Excluir',
      'Cancelar',
      this.onClickedConfirm,
    );
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

const mapDispatchToProps = dispatch => {
  return {
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(ConfirmActions.open(title, message, labelYes, labelNo, onConfirm));
    },
  };
};

export default connect(null, mapDispatchToProps)(SequenceItem);
