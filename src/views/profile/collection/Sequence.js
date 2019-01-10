import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import CollectionActions from 'actions/CollectionActions';
import ConfirmActions from 'actions/ConfirmActions';
import iconCheck from 'images/icons/check.png';
import iconDelete from 'images/icons/delete.svg';
import styles from './Sequence.scss';

class Sequence extends React.PureComponent {
  onClickedConfirm = () => {
    this.props.removeSequence(this.props.collectionId, this.props.id);
    this.props.loadSequences(this.props.collectionId);
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
    const { data } = this.props;
    const { component, componentColor, isCompleted, slug, title } = data;

    const image = API_URL + data.image_attributes.default_url;

    const link = `/sequencia/${slug}`;

    const bar = isCompleted ? (
      <div className={styles.bar}>
        <span>
          <img src={iconCheck} alt="Sequência realizada" />
          Sequência realizada
        </span>
        <button>Avaliar</button>
      </div>
    ) : null;

    const thumbnail = data.image_attributes.default_url ? (
      <NavLink className={styles.image} to={link}>
        <img
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.thumb.url}, ${API_URL}${
            data.image_attributes.extra_thumb.url
          } 2x`}
          alt=""
        />
      </NavLink>
    ) : (
      <div className={styles.initials}>
        {data.main_curricular_component.name
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
                <h4 style={{ color: componentColor }}>{component}</h4>
                <h3>{title}</h3>
              </NavLink>
              <button onClick={this.onClickedDelete}>
                <img src={iconDelete} alt="Excluir" />
              </button>
            </div>
          </div>
          {bar}
        </div>
      </div>
    );
  }
}

Sequence.propTypes = {
  collectionId: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  openConfirm: PropTypes.func.isRequired,
  loadSequences: PropTypes.func.isRequired,
  removeSequence: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
    loadSequences: collectionId => {
      dispatch(CollectionActions.loadSequences(collectionId));
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
