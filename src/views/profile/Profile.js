import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import Avatar from './Avatar';
import BodyActions from 'actions/BodyActions';
import ChallengesActions from 'actions/ChallengesActions';
import ChallengeList from './challenges/ChallengeList';
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
  onClickedChallenge = () => {
    history.push('/desafio/projeto-sinais-luminosos-na-aviacao');
  };

  componentDidMount() {
    this.props.load();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.id && this.props.data.id) {
      this.props.loadChallenges();
      this.props.loadClassrooms();
      this.props.loadCollections();
    }
  }

  render() {
    const { data, challenges, collections } = this.props;
    const { nickname } = data;

    const numCollections = collections.length;
    const wordCollections = numCollections === 1 ? 'coleção' : 'coleções';
    const collectionList =
      numCollections > 0 ? <CollectionList items={collections} /> : <EmptyList />;

    const challengeList = <ChallengeList items={challenges} />;

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
          </div>
        </header>
        {collectionList}
        {challengeList}
      </Page>
    );
  }
}

Profile.propTypes = {
  challenges: PropTypes.array.isRequired,
  collections: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadChallenges: PropTypes.func.isRequired,
  loadClassrooms: PropTypes.func.isRequired,
  loadCollections: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    challenges: state.ChallengesReducer.saved,
    collections: state.CollectionsReducer.items,
    data: state.ProfileReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      // no need to call ProfileActions.load()
      // because it's already called by Header
    },
    loadChallenges: () => {
      dispatch(ChallengesActions.loadAll());
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
