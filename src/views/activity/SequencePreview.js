import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
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

    let btnSave1 = null;
    let btnSave2 = null;
    let title = <h1>{sequence.title}</h1>;

    if (isInActivity) {
      const linkSequence = `/sequencia/${sequence.slug}`;

      title = <NavLink to={linkSequence}>{title}</NavLink>;

      const icon = isSaved ? iconSaved : iconSave;
      const label1 = isSaved ? 'Salvo' : 'Salvar';
      const label2 = isSaved ? 'Sequência salva' : 'Salvar sequência';

      btnSave1 = (
        <button className={styles.btnSave1} onClick={this.onClickedSave}>
          <img src={icon} alt={label1} />
          {label1}
        </button>
      );

      btnSave2 = (
        <button className={styles.btnSave2} onClick={this.onClickedSave}>
          <img src={icon} alt={label2} />
          {label2}
        </button>
      );
    }

    return (
      <Headroom disableInlineStyles>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {image}
            <div className={styles.info}>
              <p>Sequência de atividades</p>
              {title}
            </div>
            {btnSave1}
            {btnSave2}
          </div>
        </div>
      </Headroom>
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
