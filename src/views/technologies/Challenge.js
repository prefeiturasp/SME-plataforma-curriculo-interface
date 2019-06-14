import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import { API_URL } from 'data/constants';
import ChallengeActions from 'actions/ChallengeActions';
import isLogged from 'data/isLogged';
import iconSave1 from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './Challenge.scss';

class Challenge extends Component {
  onClickedSave = () => {
    if (isLogged()) {
      const { id, isSaved } = this.props.data;
      if (isSaved) {
        this.props.delete(id);
      } else {
        this.props.save(id);
      }
    } else {
      history.push(`/login`, { isModal: true });
    }
  };

  render() {
    const { data } = this.props;
    const { isSaved, slug, title } = data;
    
    const link = `/desafio/${slug}`;

    const thumbnail = data.image_attributes.default_url ? (
      <div className={styles.image}>
        <img
          src={API_URL + data.image_attributes.default_url}
          alt=""
        />
      </div>
    ) : (
      <div className={styles.initials}>TpA</div>
    );

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

const mapDispatchToProps = dispatch => {
  return {
    delete: id => {
      dispatch(ChallengeActions.delete(id));
    },
    save: id => {
      dispatch(ChallengeActions.save(id));
    },
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Challenge);
