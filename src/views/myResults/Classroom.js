import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import ClassroomYear from 'components/objects/ClassroomYear';
import createModalLink from 'utils/createModalLink';
import iconEdit from 'images/icons/edit.svg';
import styles from 'views/classrooms/Classroom.scss';

class Classroom extends React.PureComponent {
  onClickedEdit = () => {
    history.replace(`/desafio/${this.props.challenge.slug}/resultado/1`);
  };

  render() {
    const { level, name, year } = this.props;

    return (
      <div className={styles.wrapper}>
        <ClassroomYear size={50} year={year} />
        <div className={styles.info}>
          <div className={styles.name}>
            {name} | {level}
          </div>
          <button onClick={this.onClickedEdit}>
            <img src={iconEdit} alt="Editar resultado" />
          </button>
        </div>
      </div>
    );
  }
}

Classroom.propTypes = {
  challenge: PropTypes.object.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    challenge: state.ChallengeReducer.currItem,
  };
};

export default connect(mapStateToProps)(Classroom);
