import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CollectionsList from './collections/CollectionsList';
import CollectionsNone from './collections/CollectionsNone';
import Page from '../common/Page';
import ProfileImage from './ProfileImage';
import iconEdit from '../../images/iconEdit.svg';
import styles from './Profile.scss';

class Profile extends Component {
  render() {
    const data = [
      {
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
        title: 'Planeta',
        sequences: 5,
        classrooms: 0,
        years: [],
      },
      {
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

    const contents = data.length > 0
      ? <CollectionsList items={data} />
      : <CollectionsNone />;

    return (
      <Page>
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
