import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DesktopModal from 'components/layout/DesktopModal';
import ModalPage from 'components/layout/ModalPage';
import School from './School';
import ModalHeader from 'components/header/ModalHeader';
import styles from './Classrooms.scss';

class Classrooms extends Component {
  render() {
    const { schools } = this.props;

    const items = schools.map((school, i) => {
      return (
        <School key={i} name={school.name} classrooms={school.classrooms} />
      );
    });

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Minhas turmas" />
          <div className={styles.list}>{items}</div>
        </ModalPage>
      </DesktopModal>
    );
  }
}

Classrooms.propTypes = {
  schools: PropTypes.array.isRequired,
};

Classrooms.defaultProps = {
  schools: [],
};

export default Classrooms;
