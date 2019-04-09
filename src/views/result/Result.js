import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Attachment from './Attachment';
import Avatar from 'components/objects/Avatar';
import BodyActions from 'actions/BodyActions';
import ChallengeActions from 'actions/ChallengeActions';
import DesktopModal from 'components/layout/DesktopModal';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import ModuleGallery from 'views/activity/ModuleGallery';
import withWidth from 'components/hoc/withWidth';
import arrowLeft from 'images/arrows/left.svg';
import arrowRight from 'images/arrows/right.svg';
import iconClip from 'images/icons/clip.svg';
import styles from './Result.scss';
import styles1 from 'views/challenge/Result.scss';
import styles2 from 'views/activity/Activity.scss';

class Result extends Component {
  componentDidMount() {
    this.props.load(this.props.match.params.slug);
  }

  render() {
    const { results, windowWidth } = this.props;
    const { id, slug } = this.props.match.params;
    
    const data = results.find(item => {
      return item.id === parseInt(id);
    });

    if (!data) {
      return <span />;
    }

    const modalTitle = windowWidth > 768 ? 'Detalhes do Resultado' : '';

    const gallery = data.images.length ? <ModuleGallery images={data.images} /> : null;
    const videos = data.videos.map(item  => {
      const index = item.indexOf('v=') + 2;
      const id = item.substring(index);
      return (
        <iframe
          key={id}
          title={id}
          className={styles.video}
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    });

    const icon = data.attachments.length ? <img src={iconClip} alt="Anexos" className={styles1.icon} /> : null;
    const attachments = data.attachments.map((item, i) => {
      return (
        <Attachment
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
      <DesktopModal isFixed>
        <ModalPage>
          <ModalHeader title={modalTitle} />
          <div className={styles.wrapper}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-10 offset-lg-1">
                  <h2 className={styles.title}>Detalhes do Resultado</h2>
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
                  <div className={styles.text}>{data.text}</div>
                  <hr />
                  <div className={styles.attachments}>
                    {gallery}
                    {videos}
                    <div className="row">
                      {attachments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
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
)(withWidth(Result));
