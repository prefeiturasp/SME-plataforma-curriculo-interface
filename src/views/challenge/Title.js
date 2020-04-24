import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import ChallengeActions from 'actions/ChallengeActions';
import isLogged from 'data/isLogged';
import iconSave from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './Title.scss';

class Title extends Component {
  onClickedSave = () => {
    if (isLogged()) {
      this.props.save(this.props.id);
    } else {
      history.push(`/login`, { isModal: true });
    }
  };

  render() {
    const { deadline, isSaved, title } = this.props;

    const icon = isSaved ? iconSaved : iconSave;
    const label = isSaved ? 'Salvo' : 'Salvar';
    
    const btnSave1 = (
      <button className={styles.btnSave1} onClick={this.onClickedSave}>
        <img src={icon} alt={label} />
        {label}
      </button>
    );

    const btnSave2 = (
      <button className={styles.btnSave2} onClick={this.onClickedSave}>
        <img src={icon} alt={label} />
        {label}
      </button>
    );

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>Desafio em andamento até <strong>{deadline}</strong></p>
          <h1>{title}</h1>
        </div>
        {btnSave1}
        {btnSave2}
      </div>
    );
  }
}

Title.propTypes = {
  deadline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    delete: id => {
      dispatch(ChallengeActions.delete(id));
    },
    save: id => {
      dispatch(ChallengeActions.save(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Title);
