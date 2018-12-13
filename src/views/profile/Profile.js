import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CollectionsList from './collections/CollectionsList';
import CollectionsNone from './collections/CollectionsNone';
import Notification from './Notification';
import Page from 'components/Page';
import ProfileImage from './ProfileImage';
import iconEdit from 'images/icon/edit.svg';
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
          }
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
          }
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
          }
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
          }
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
          }
        ],
      },
    ];

    const contents = collections.length > 0
      ? <CollectionsList items={collections} />
      : <CollectionsNone />;

    const notification = true
      ? <Notification />
      : null;

    return (
      <Page>
        {notification}
        <header className={styles.header}>
          <div className={styles.rowName}>
            <div className={styles.photoAndName}>
              <ProfileImage
                nickname="Marília"
                size={60}
              />
              <h2>
                Marília
              </h2>
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
          <NavLink
            className="btnFullWidth"
            to="/turmas"
          >
            Ver minhas turmas
          </NavLink>
        </header>
        {contents}
      </Page>
    );
  }
}

Profile.propTypes = {
};

export default Profile;
