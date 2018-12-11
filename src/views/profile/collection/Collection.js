import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ClassroomYear from 'components/objects/ClassroomYear';
import SequencesList from './SequencesList';
import SequencesNone from './SequencesNone';
import iconClose from 'images/icon/closeBig.svg';
import iconEdit from 'images/icon/edit.svg';
import iconDelete from 'images/icon/delete1.svg';
import imgPlaceholder from 'images/placeholder.jpg';
import styles from './Collection.scss';

class Collection extends Component {
  onClickedClose = () => {
    this.props.history.goBack();
  }

  onClickedDelete = () => {

  }

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
    ];

    const years = [
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

    const name = 'Planeta';
    const count = 1;
    const word = count > 1 ? 'turmas' : 'turma';

    const yearsItems = years.map((year, i) => {
      return (
        <ClassroomYear
          key={i}
          year={year.year}
          color={year.color}
        />
      );
    });

    const contents = sequences.length > 0
      ? <SequencesList items={sequences} />
      : <SequencesNone />;

    return (
      <section className={styles.wrapper}>
        <div className={styles.buttons}>
          <button>
            <img
              src={iconEdit}
              alt="Editar"
            />
          </button>
          <button onClick={this.onClickedDelete}>
            <img
              src={iconDelete}
              alt="Excluir"
            />
          </button>
          <button
            className={styles.btnClose}
            onClick={this.onClickedClose}
          >
            <img
              src={iconClose}
              alt="Fechar"
            />
          </button>
        </div>
        <header className={styles.header}>
          <h2>
            {name}
          </h2>
          <p>
            {count} {word}
          </p>
          <div className={styles.years}>
            {yearsItems}
          </div>
        </header>
        {contents}
      </section>
    );
  }
}

Collection.propTypes = {
};

export default withRouter(Collection);
