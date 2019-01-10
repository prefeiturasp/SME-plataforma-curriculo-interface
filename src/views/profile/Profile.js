import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import BodyActions from 'actions/BodyActions';
import CollectionsActions from 'actions/CollectionsActions';
import CollectionList from './collections/CollectionList';
import EmptyList from './collections/EmptyList';
import Notification from 'components/objects/Notification';
import Page from 'components/layout/Page';
import ProfileActions from 'actions/ProfileActions';
import createModalLink from 'utils/createModalLink';
import withWidth from 'components/hoc/withWidth';
import chevronRight from 'images/chevrons/right.svg';
import iconEdit from 'images/icons/edit.svg';
import styles from './Profile.scss';

class Profile extends Component {
  onClickedRate = () => {};

  componentDidMount() {
    this.props.load();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.id && this.props.data.id) {
      this.props.loadClassrooms();
      this.props.loadCollections();
    }
  }

  render() {
    const { data, items } = this.props;
    const { nickname } = data;

    const numCollections = items.length;
    const wordCollections = numCollections === 1 ? 'coleção' : 'coleções';

    const numClassrooms = 6;
    const wordClassrooms = numClassrooms === 1 ? 'turma' : 'turmas';

    const numComponents = 3;
    const wordComponents = numComponents === 1 ? 'componente' : 'componentes';

    const contents =
      numCollections > 0 ? <CollectionList items={items} /> : <EmptyList />;

    const notification = true ? (
      <Notification
        text="Você completou 3 sequências de atividades recentemente. Avalie agora e nos ajude a construir novos conteúdos."
        labelNo="Agora não"
        labelYes="Avaliar sequência"
        onClickedYes={this.onClickedRate}
      />
    ) : null;

    const size = this.props.windowWidth < 768 ? 60 : 80;

    const linkEdit = createModalLink('/perfil/editar');
    const linkClassrooms = createModalLink('/perfil/turmas');

    return (
      <Page>
        {notification}
        <header className={styles.header}>
          <div className={styles.rowName}>
            <div className={styles.photoAndName}>
              <Avatar size={size} />
              <div className={styles.name}>
                <h2>{nickname}</h2>
                <NavLink to={linkEdit}>Editar perfil</NavLink>
              </div>
            </div>
            <NavLink to={linkEdit}>
              <img src={iconEdit} alt="Editar perfil" />
            </NavLink>
          </div>
          <div className={styles.rowNumbers}>
            <div>
              <em>{numCollections}</em> {wordCollections}
            </div>
            <div>
              <em>{numClassrooms}</em> {wordClassrooms}
            </div>
            <div>
              <em>{numComponents}</em> {wordComponents}
            </div>
          </div>
          <NavLink className="btnSmall btnFullWidth" to={linkClassrooms}>
            Ver minhas turmas
            <img src={chevronRight} alt="" />
          </NavLink>
        </header>
        {contents}
      </Page>
    );
  }
}

Profile.propTypes = {
  data: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
  loadClassrooms: PropTypes.func.isRequired,
  loadCollections: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ProfileReducer,
    items: state.CollectionsReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(ProfileActions.load());
    },
    loadClassrooms: () => {
      dispatch(ProfileActions.loadClassrooms());
    },
    loadCollections: () => {
      dispatch(CollectionsActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth(Profile));
