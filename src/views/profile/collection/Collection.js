import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import BodyActions from 'actions/BodyActions';
import ClassroomYear from 'components/objects/ClassroomYear';
import CollectionActions from 'actions/CollectionActions';
import ConfirmActions from 'actions/ConfirmActions';
import EmptyList from './EmptyList';
import Page from 'components/layout/Page';
import SequenceList from './SequenceList';
import createModalLink from 'utils/createModalLink';
import iconClose from 'images/icons/closeBig.svg';
import iconEdit from 'images/icons/edit.svg';
import iconDelete from 'images/icons/delete1.svg';
import styles from './Collection.scss';

class Collection extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.load(id);
    this.props.loadSequences(id);
  }

  onClickedClose = () => {
    history.goBack();
  };

  onClickedConfirm = () => {
    this.props.delete(this.props.match.params.id);
    history.goBack();
  };

  onClickedDelete = () => {
    const { name } = this.props.data;
    const { sequences } = this.props;

    const numSequences = sequences.length;
    const wordSequences = numSequences === 1 ? 'sequência' : 'sequências';

    this.props.openConfirm(
      'Excluir essa coleção e todas as suas sequências de atividades?',
      `Sua coleção ${name} e todas as suas ${numSequences} ${wordSequences} serão excluídos permanentemente.`,
      'Excluir',
      'Cancelar',
      this.onClickedConfirm
    );
  };

  render() {
    const { classrooms, sequences } = this.props;
    const { id, name } = this.props.data;

    const word = classrooms.length === 1 ? 'turma' : 'turmas';
    const link = createModalLink(`/colecao/${id}/editar`);

    const years = classrooms.map((year, i) => {
      return <ClassroomYear key={i} year={year.year} color={year.color} />;
    });

    const contents = sequences.length ? (
      <SequenceList collectionId={id} items={sequences} />
    ) : (
      <EmptyList />
    );

    return (
      <Page>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <NavLink to={link}>
              <img src={iconEdit} alt="Editar" />
            </NavLink>
            <button onClick={this.onClickedDelete}>
              <img src={iconDelete} alt="Excluir" />
            </button>
            <button className={styles.btnClose} onClick={this.onClickedClose}>
              <img src={iconClose} alt="Fechar" />
            </button>
          </div>
          <header className={styles.info}>
            <h2>{name}</h2>
            <p>
              {classrooms.length} {word}
            </p>
            <div className={styles.years}>{years}</div>
          </header>
        </div>
        {contents}
      </Page>
    );
  }
}

Collection.propTypes = {
  classrooms: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  openConfirm: PropTypes.func.isRequired,
  sequences: PropTypes.array.isRequired,
};

Collection.defaultProps = {
  classrooms: [
    {
      year: '2D',
      color: '#ff007f',
    },
    {
      year: '2D',
      color: '#66ac70',
    },
    {
      year: '3A',
      color: '#ff007f',
    },
    {
      year: '1A',
      color: '#ff7e2c',
    },
  ],
};

const mapStateToProps = state => {
  return {
    data: state.CollectionReducer.data,
    sequences: state.CollectionReducer.sequences,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: id => {
      dispatch(CollectionActions.delete(id));
    },
    load: id => {
      dispatch(BodyActions.showLoading());
      dispatch(CollectionActions.load(id));
    },
    loadSequences: id => {
      dispatch(CollectionActions.loadSequences(id));
    },
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
