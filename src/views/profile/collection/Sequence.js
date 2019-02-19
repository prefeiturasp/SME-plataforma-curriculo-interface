import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import CollectionActions from 'actions/CollectionActions';
import ConfirmActions from 'actions/ConfirmActions';
import iconDelete from 'images/icons/delete.svg';
import styles from './Sequence.scss';

class Sequence extends React.PureComponent {
  onClickedConfirm = () => {
    this.props.removeSequence(this.props.collectionId, this.props.id);
  };

  onClickedDelete = () => {
    this.props.openConfirm(
      'Excluir sequência?',
      'Você não poderá reverter esta ação.',
      'Excluir',
      'Cancelar',
      this.onClickedConfirm
    );
  };

  render() {
    const {
      component,
      image,
      slug,
      title,
    } = this.props;

    const link = `/sequencia/${slug}`;

    const thumbnail = image.default_url ? (
      <NavLink className={styles.image} to={link}>
        <img
          src={API_URL + image.default_url}
          srcSet={`${API_URL}${image.thumb.url}, ${API_URL}${
            image.extra_thumb.url
          } 2x`}
          alt=""
        />
      </NavLink>
    ) : (
      <div className={styles.initials}>
        {component.name
          .split(' ')
          .map(s => s.charAt(0))
          .join('')}
      </div>
    );

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            {thumbnail}
            <div className={styles.info}>
              <NavLink className={styles.text} to={link}>
                <h4 style={{ color: component.color }}>{component.name}</h4>
                <h3>{title}</h3>
              </NavLink>
              <button onClick={this.onClickedDelete}>
                <img src={iconDelete} alt="Excluir" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Sequence.propTypes = {
  collectionId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  component: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openConfirm: PropTypes.func.isRequired,
  removeSequence: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
    removeSequence: (collectionId, sequenceId) => {
      dispatch(CollectionActions.removeSequence(collectionId, sequenceId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sequence);
