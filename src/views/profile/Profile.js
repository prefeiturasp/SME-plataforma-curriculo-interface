import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import CollectionList from './collections/CollectionList';
import EmptyList from './collections/EmptyList';
import Notification from 'components/objects/Notification';
import Page from 'components/layout/Page';
import withWidth from 'components/hoc/withWidth';
import chevronRight from 'images/chevrons/right.svg';
import iconEdit from 'images/icons/edit.svg';
import styles from './Profile.scss';

class Profile extends Component {
  render() {
    const collections = [
      {
        id: 1,
        title: '[2018] EF 1A Matemática (1)',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#ff0784',
            year: '1A',
          },
        ],
      },
      {
        id: 2,
        title: '[2018] EF 1A Matemática (2)',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#ff0784',
            year: '1A',
          },
        ],
      },
      {
        id: 3,
        title: '[2018] EF 1A Ciências Naturais',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#66ac70',
            year: '1A',
          },
        ],
      },
      {
        id: 4,
        title: '[2018] EF 1A História',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#66ac70',
            year: '1A',
          },
        ],
      },
      {
        id: 5,
        title: 'Planeta',
        sequences: 5,
        classrooms: 0,
        years: [],
      },
      {
        id: 6,
        title: 'Água',
        sequences: 0,
        classrooms: 3,
        years: [
          {
            color: '#66ac70',
            year: '1A',
          },
          {
            color: '#ff0784',
            year: '1A',
          },
        ],
      },
    ];

    const contents =
      collections.length > 0 ? (
        <CollectionList items={collections} />
      ) : (
        <EmptyList />
      );

    const notification = true ? (
      <Notification
        text="Você completou 3 sequências de atividades recentemente. Avalie agora e nos ajude a construir novos conteúdos."
        labelNo="Agora não"
        labelYes="Avaliar sequência"
      />
    ) : null;

    const size = this.props.windowWidth < 768 ? 60 : 80;

    return (
      <Page>
        {notification}
        <header className={styles.header}>
          <div className={styles.rowName}>
            <div className={styles.photoAndName}>
              <Avatar nickname="Marília" size={size} />
              <div className={styles.name}>
                <h2>Marília</h2>
                <NavLink to="/perfil/editar">Editar perfil</NavLink>
              </div>
            </div>
            <NavLink to="/perfil/editar">
              <img src={iconEdit} alt="Editar perfil" />
            </NavLink>
          </div>
          <div className={styles.rowNumbers}>
            <div>
              <em>6</em> coleções
            </div>
            <div>
              <em>6</em> turmas
            </div>
            <div>
              <em>3</em> componentes
            </div>
          </div>
          <NavLink className="btnSmall btnFullWidth" to="/turmas">
            Ver minhas turmas
            <img src={chevronRight} alt="" />
          </NavLink>
        </header>
        {contents}
      </Page>
    );
  }
}

Profile.propTypes = {};

export default withWidth(Profile);
