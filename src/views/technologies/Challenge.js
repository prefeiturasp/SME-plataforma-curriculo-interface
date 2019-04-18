import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { history } from 'index';
import isLogged from 'data/isLogged';
import iconSave1 from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './Challenge.scss';

class Challenge extends Component {
  onClickedSave = () => {
    if (isLogged()) {
      
    } else {
      history.push(`/login`, { isModal: true });
    }
  };

  render() {
    const { data } = this.props;
    const { slug, title } = data;
    
    const link = `/desafio/${slug}`;

    const thumbnail = data.image_attributes.default_url ? (
      <div className={styles.image}>
        <img
          src={data.image_attributes.default_url}
          srcSet={`${data.image_attributes.thumb.url}, ${data.image_attributes.extra_thumb.url} 2x`}
          alt=""
        />
      </div>
    ) : (
      <div className={styles.initials}>TpA</div>
    );

    const isSaved = data.already_saved_in_collection || data.isSaved;
    const iconSave = isSaved ? iconSaved : iconSave1;
    const labelSave = isSaved ? 'Salvo' : 'Salvar';

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <article className={styles.wrapper}>
          <NavLink to={link} aria-label={title}>{thumbnail}</NavLink>
          <button className={styles.btnSave} onClick={this.onClickedSave}>
            <img src={iconSave} alt={labelSave} />
          </button>
          <div className={styles.date}>
            Desafio em andamento até <strong>05/06/2018</strong>
          </div>
          <div className={styles.title}>
            <NavLink to={link}>{title}</NavLink>
          </div>
        </article>
      </div>
    );
  }
}

Challenge.propTypes = {
  data: PropTypes.object.isRequired,
};

Challenge.defaultProps = {
  data: {
    slug: 'projeto-sinais-luminosos-na-aviacao',
    title: 'Projeto Sinais Luminosos na Aviação',
    image_attributes: {
      default_url: 'https://placeimg.com/640/480/nature',
      thumb: {
        url: 'https://placeimg.com/320/240/nature',
      },
      extra_thumb: {
        url: 'https://placeimg.com/640/480/nature',
      },
    },
  },
};

export default Challenge;
