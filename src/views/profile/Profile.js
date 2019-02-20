import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import BodyActions from 'actions/BodyActions';
import CollectionsActions from 'actions/CollectionsActions';
import CollectionList from './collections/CollectionList';
import EmptyList from './collections/EmptyList';
import Page from 'components/layout/Page';
import ProfileActions from 'actions/ProfileActions';
import createModalLink from 'utils/createModalLink';
import withWidth from 'components/hoc/withWidth';
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

    const numClassrooms = data.numClasses;
    const wordClassrooms = numClassrooms === 1 ? 'turma' : 'turmas';

    const numComponents = data.numComponents;
    const wordComponents = numComponents === 1 ? 'componente' : 'componentes';

    const contents =
      numCollections > 0 ? <CollectionList items={items} /> : <EmptyList />;

    const size = this.props.windowWidth < 768 ? 60 : 80;

    const linkEdit = createModalLink('/perfil/editar');
    
    return (
      <Page>
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
      // no need to call ProfileActions.load()
      // because it's already called by Header
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
