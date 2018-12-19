import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ClassroomYear from 'components/objects/ClassroomYear';
import ConfirmActions from 'actions/ConfirmActions';
import EmptyList from './EmptyList';
import ModalPage from 'components/layout/ModalPage';
import Page from 'components/layout/Page';
import SequenceList from './SequenceList';
import iconClose from 'images/icons/closeBig.svg';
import iconEdit from 'images/icons/edit.svg';
import iconDelete from 'images/icons/delete1.svg';
import imgPlaceholder from 'images/placeholder.jpg';
import styles from './Collection.scss';

class Collection extends Component {
  onClickedClose = () => {
    this.props.history.goBack();
  };

  onClickedConfirm = () => {};

  onClickedDelete = () => {
    this.props.openConfirm(
      'Excluir essa coleção e todas as suas sequências de atividades?',
      'Sua coleção Favoritos e todas as suas 5 sequências serão excluídos permanentemente.',
      'Excluir',
      'Cancelar',
      this.onClickedConfirm
    );
  };

  render() {
    const sequences = [
      {
        name: 'Os Movimentos do nosso Planeta',
        component: 'Ciências Naturais',
        componentColor: '#70b279',
        isCompleted: true,
        image: imgPlaceholder,
        slug: 'os-movimentos-do-nosso-planeta',
      },
      {
        name: 'Animais de estimação',
        component: 'Matemática',
        componentColor: '#ff007f',
        image: imgPlaceholder,
        slug: 'animais-de-estimacao',
      },
      {
        name: 'Os Movimentos do nosso Planeta',
        component: 'Ciências Naturais',
        componentColor: '#70b279',
        isCompleted: true,
        image: imgPlaceholder,
        slug: 'os-movimentos-do-nosso-planeta',
      },
      {
        name: 'Animais de estimação',
        component: 'Matemática',
        componentColor: '#ff007f',
        image: imgPlaceholder,
        slug: 'animais-de-estimacao',
      },
      {
        name: 'Os Movimentos do nosso Planeta',
        component: 'Ciências Naturais',
        componentColor: '#70b279',
        isCompleted: true,
        image: imgPlaceholder,
        slug: 'os-movimentos-do-nosso-planeta',
      },
      {
        name: 'Animais de estimação',
        component: 'Matemática',
        componentColor: '#ff007f',
        image: imgPlaceholder,
        slug: 'animais-de-estimacao',
      },
    ];

    const classrooms = [
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
    ];

    const id = 1;
    const name = 'Planeta';
    const word = classrooms.length > 1 ? 'turmas' : 'turma';
    const link = `/colecao/${id}/editar`;

    const years = classrooms.map((year, i) => {
      return <ClassroomYear key={i} year={year.year} color={year.color} />;
    });

    const contents =
      sequences.length > 0 ? <SequenceList items={sequences} /> : <EmptyList />;

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

Collection.propTypes = {};

const mapDispatchToProps = dispatch => {
  return {
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Collection));
