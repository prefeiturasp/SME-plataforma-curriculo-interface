import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import Page from '../common/Page';
import ProfileImage from './ProfileImage';
import iconCollections from '../../images/iconCollections.svg';
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

    let contents;

    if (data.length > 0) {
      const collections = data.map((item, i) => {
        return (
          <CollectionItem
            key={i}
            title={item.title}
            sequences={item.sequences}
            classrooms={item.classrooms}
            years={item.years}
          />
        );
      });

      contents = (
        <section className={styles.contents}>
          <h3>Coleções</h3>
          {collections}
          <button className="btnFullWidth">
            Criar uma nova coleção
          </button>
        </section>
      );
    } else {
      contents = (
        <section className={styles.contents}>
          <img
            src={iconCollections}
            alt="Coleções"
          />
          <h3>Você ainda não possui coleções</h3>
          <p>Crie uma nova coleção para salvar sequências de atividades  e acessá-las mais tarde.</p>
          <button className="btn">
            Criar coleção
          </button>
        </section>
      );
    }

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
              <em>6</em>
              coleções
            </div>
            <div>
              <em>6</em>
              turmas
            </div>
            <div>
              <em>3</em>
              componentes
            </div>
          </div>
          <button className="btnFullWidth">
            Ver minhas turmas
          </button>
        </header>
        {contents}
      </Page>
    );
  }
}

Profile.propTypes = {
};

export default Profile;
