import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AuthActions from 'actions/AuthActions';
import isLogged from 'data/isLogged';
import iconSave from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './Title.scss';

class Title extends Component {
  onClickedSave = () => {
    if (isLogged()) {
      this.props.history.push(`/sequencia/${this.props.slug}/salvar`, { isModal: true });
    } else {
      this.props.login();
    }
  };

  render() {
    const { hasButton, isSaved, slug, text, title } = this.props;

    const icon = isSaved ? iconSaved : iconSave;
    const label = isSaved ? 'Salvo' : 'Salvar';

    const button = hasButton ? (
      <button className={styles.btnSave} onClick={this.onClickedSave}>
        <img src={icon} alt={label} />
        {label}
      </button>
    ) : null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>{text}</p>
          <h1>{title}</h1>
        </div>
        {button}
      </div>
    );
  }
}

Title.propTypes = {
  hasButton: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(AuthActions.login());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Title));
