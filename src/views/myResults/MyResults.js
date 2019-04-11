import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import BigPreview from 'components/objects/BigPreview';
import ChallengeActions from 'actions/ChallengeActions';
import ChallengePreview from 'views/result/send/ChallengePreview';
import DesktopModal from 'components/layout/DesktopModal';
import ModalFooter from 'components/footer/ModalFooter';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import School from './School';
import styles from './MyResults.scss';
import styles1 from 'views/sequence/save/SaveSequence.scss';

class MyResults extends Component {
  onClickedAddResult = () => {
    const slug = this.props.match.params.slug;
    history.replace(`/desafio/${slug}/enviar`);
  };

  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.loadChallenge(slug);
  }

  render() {
    const { challenge, schools } = this.props;

    if (!challenge) {
      return <span />;
    }

    const items = schools.map((school, i) => {
      return (
        <School key={i} name={school.name} classrooms={school.classrooms} />
      );
    });

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Resultado" />
          <div className={styles.row}>
            <div className={styles1.col1}>
              <BigPreview data={challenge} label="Desafio" />
            </div>
            <div className={styles1.col2}>
              <div className={styles1.small}>
                <ChallengePreview challenge={challenge} />
                <hr />
              </div>
              <div className={styles.list}>{items}</div>
            </div>
          </div>
          <ModalFooter label="Adicionar resultado" onClick={this.onClickedAddResult} />
        </ModalPage>
      </DesktopModal>
    );
  }
}

MyResults.propTypes = {
  schools: PropTypes.array.isRequired,
};

MyResults.defaultProps = {
  schools: [
    {
      name: 'EMEF João de Deus',
      classrooms: [
        {
          year: '2D',
          name: '2o ano D',
          level: 'EF',
        },
        {
          year: '3A',
          name: '3o ano A',
          level: 'EJA',
        },
      ],
    },
    {
      name: 'EMEF Maria da Silva',
      classrooms: [
        {
          year: '1A',
          name: '1o ano A',
          level: 'EF',
        },
        {
          year: '3A',
          name: '3o ano A',
          level: 'EJA',
        },
      ],
    },
    {
      name: 'EMEF Maria da Silva',
      classrooms: [
        {
          year: '1A',
          name: '1o ano A',
          level: 'EF',
        },
        {
          year: '3A',
          name: '3o ano A',
          level: 'EJA',
        },
      ],
    },
  ],
};

const mapStateToProps = state => {
  return {
    challenge: state.ChallengeReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadChallenge: slug => {
      dispatch(ChallengeActions.load(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyResults);
