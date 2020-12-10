import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsActions from 'actions/CollectionsActions';
import Collection from './Collection';
import DesktopModal from 'components/layout/DesktopModal';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import ProjectActions from 'actions/ProjectActions';
import createModalLink from 'utils/createModalLink';
import iconPlus from 'images/icons/plus1.svg';
import styles from './SaveProject.scss';

class SaveProject extends Component {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (!this.props.data || this.props.data.slug !== slug) {
      this.props.load(slug);
    }
    this.props.loadCollections();
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { collections, data, inCollections, isSaved } = this.props;

    const items = collections.map((item, i) => {
      return <Collection key={i} projectId={data.id} {...item} />;
    });

    const base = this.props.location.pathname.match(/projetos/)
      ? 'projetos'
      : 'projeto';
    const link = createModalLink(`/${base}/${data.slug}/criar-colecao`);
    link.state.projectId = data.id;

    const btnCreate = (
      <NavLink className={styles.btn} to={link}>
        <img src={iconPlus} alt="Criar coleção" />
        Criar coleção
      </NavLink>
    );

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Salvar Projetos" />
          <div className={styles.row}>
            <div className={styles.col1}>
            </div>
            <div className={styles.col2}>
              <div className={styles.small}>
                <hr />
              </div>
              <div className={styles.list}>
                <p>Selecione uma coleção</p>
                {items}
              </div>
              <div className={styles.footer}>{btnCreate}</div>
            </div>
          </div>
        </ModalPage>
      </DesktopModal>
    );
  }
}

SaveProject.propTypes = {
  collections: PropTypes.array.isRequired,
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
  loadCollections: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    collections: state.CollectionsReducer.items,
    data: state.ProjectReducer.currItem,
    inCollections: state.ProjectReducer.collections,
    isSaved: state.ProjectReducer.isSaved,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(ProjectActions.load(slug));
      dispatch(ProjectActions.loadCollections(slug));
    },
    loadCollections: () => {
      dispatch(CollectionsActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveProject);
