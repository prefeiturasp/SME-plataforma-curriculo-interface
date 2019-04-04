import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AttachmentItem from './AttachmentItem';
import Avatar from 'components/objects/Avatar';
import BodyActions from 'actions/BodyActions';
import ChallengeActions from 'actions/ChallengeActions';
import DesktopModal from 'components/layout/DesktopModal';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import arrowLeft from 'images/arrows/left.svg';
import arrowRight from 'images/arrows/right.svg';
import iconClip from 'images/icons/clip.svg';
import styles from './Result.scss';
import styles1 from 'views/challenge/ResultItem.scss';
import styles2 from 'views/activity/Activity.scss';

class Result extends Component {
  componentDidMount() {
    this.props.load(this.props.match.params.slug);
  }

  render() {
    const { results } = this.props;
    const { id, slug } = this.props.match.params;
    
    const data = results.find(item => {
      return item.id === parseInt(id);
    });

    if (!data) {
      return <span />;
    }

    const icon = data.attachments.length ? <img src={iconClip} alt="Anexos" className={styles.icon} /> : null;
    const attachments = data.attachments.map((item, i) => {
      return (
        <AttachmentItem
          key={i}
          data={item}
        />
      )
    });

    const linkPrev = `/desafio/${slug}/resultado/${data.previous}`;
    const linkNext = `/desafio/${slug}/resultado/${data.next}`;
    const linkResults = `/desafio/${slug}`;

    const arrowPrev = data.previous ? (
      <NavLink className={styles2.prev} to={linkPrev}>
        <img src={arrowLeft} alt="Seta" />
        Anterior
      </NavLink>
    ) : (
      <span />
    );

    const arrowNext = data.next ? (
      <NavLink className={styles2.next} to={linkNext}>
        Próximo
        <img src={arrowRight} alt="Seta" />
      </NavLink>
    ) : null;

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="&nbsp;" />
          <div className={styles.row}>
            <h2>Detalhes do Resultado</h2>
            <div className={styles1.info}>
              <div className={styles1.avatar}>
                <Avatar
                  nickname={data.author.name}
                  photo={data.author.photo}
                  size={50}
                />
              </div>
              <div>
                <div className={styles1.name}>{data.author.name}</div>
                <div className={styles1.date}>{data.year} &middot; {data.time}</div>
              </div>
              {icon}
            </div>
            <div className={styles1.text}>{data.text}</div>
            <div className={styles.attachments}>
              {attachments}
            </div>
            <div className={styles2.arrows}>
              {arrowPrev}
              {arrowNext}
            </div>
            <div className={styles2.footer}>
              <NavLink className={styles2.back} to={linkResults}>
                Voltar para resultados
              </NavLink>
            </div>
          </div>
        </ModalPage>
      </DesktopModal>
    );
  }
}

Result.propTypes = {
  results: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    results: state.ChallengeReducer.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(BodyActions.showLoading());
      dispatch(ChallengeActions.loadResults(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
