import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import { API_URL } from 'data/constants';
import AuthActions from 'actions/AuthActions';
import isLogged from 'data/isLogged';
import iconSave from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './SequencePreview.scss';

class SequencePreview extends Component {
  onClickedSave = () => {
    if (isLogged()) {
      history.push(`/sequencia/${this.props.sequence.slug}/salvar`, {
        isModal: true,
      });
    } else {
      this.props.login();
    }
  };

  render() {
    const { isInActivity, isSaved, sequence } = this.props;
    
    const image = sequence.image_attributes.default_url ? (
      <img
        className={styles.image}
        src={API_URL + sequence.image_attributes.default_url}
        alt={sequence.title}
      />
    ) : null;

    let btnSave = null;
    let title = <h1>{sequence.title}</h1>;

    if (isInActivity) {
      const linkSequence = `/sequencia/${sequence.slug}`;

      title = <NavLink to={linkSequence}>{title}</NavLink>;

      const icon = isSaved ? iconSaved : iconSave;
      const label = isSaved ? 'Salvo' : 'Salvar';

      btnSave = (
        <button className={styles.btnSave} onClick={this.onClickedSave}>
          <img src={icon} alt={label} />
          {label}
        </button>
      );
    }

    return (
      <Sticky>
        <div className={styles.wrapper}>
          {image}
          <div>
            <p>Sequência de atividades</p>
            {title}
          </div>
          {btnSave}
        </div>
      </Sticky>
    );
  }
}

SequencePreview.propTypes = {
  isInActivity: PropTypes.bool,
  isSaved: PropTypes.bool,
  sequence: PropTypes.object.isRequired,
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
)(SequencePreview);
