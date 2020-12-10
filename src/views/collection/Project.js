import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import CollectionActions from 'actions/CollectionActions';
import ConfirmActions from 'actions/ConfirmActions';
import createModalLink from 'utils/createModalLink';
import iconCheck from 'images/icons/check.png';
import iconDelete from 'images/icons/delete.svg';
import styles from './Project.scss';
import logoPrefecture from 'views/project/images/prefecture.jpg';

class Project extends React.PureComponent {
  onClickedConfirm = () => {
    this.props.removeProject(this.props.collectionId, this.props.id);
  };

  onClickedDelete = () => {
    this.props.openConfirm(
      'Excluir projeto?',
      'Você não poderá reverter esta ação.',
      'Excluir',
      'Cancelar',
      this.onClickedConfirm
    );
  };

  render() {
    const { id, curricularComponents, image, slug, title } = this.props;

    const link = `/projeto/${slug}`;

    const thumbnail = image ? (
      <div className={styles.image}>
        <img
          src={image}
          alt=""
        />
      </div>
    ) : (
      <div className={styles.image}>
        <img
          src={logoPrefecture}
          alt=""
        />
      </div>
    );

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            {thumbnail}
            <div className={styles.info}>
              <NavLink className={styles.text} to={link}>
                {curricularComponents && (
                  curricularComponents.map((curricular_component, idx) => {
                    if(idx > 2) {
                      return <label key={idx}></label>
                    } else {
                      return <label key={idx} style={{marginLeft: '5px', marginRight: '5px', color: curricular_component.color}}>{curricular_component.name}</label>
                    }
                  })
                )}
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

Project.propTypes = {
  collectionId: PropTypes.number,
  id: PropTypes.number.isRequired,
  curricularComponents: PropTypes.array,
  image: PropTypes.object,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openConfirm: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
    removeProject: (collectionId, sequenceId) => {
      dispatch(CollectionActions.removeProject(collectionId, sequenceId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Project);
