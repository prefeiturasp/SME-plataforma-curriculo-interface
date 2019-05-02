import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import iconEdit from 'images/icons/edit.svg';
import styles from './Classroom.scss';

class Classroom extends React.PureComponent {
  onClickedEdit = () => {
    history.replace(`/desafio/${this.props.challenge.slug}/resultado/1`);
  };

  render() {
    const { name } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.info}>
          {name}
        </div>
        <button className={styles.btnEdit} onClick={this.onClickedEdit}>
          <img src={iconEdit} alt="Editar resultado" />
        </button>
      </div>
    );
  }
}

Classroom.propTypes = {
  challenge: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    challenge: state.ChallengeReducer.currItem,
  };
};

export default connect(mapStateToProps)(Classroom);
