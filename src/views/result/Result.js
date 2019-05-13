import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import Attachment from './Attachment';
import Avatar from 'components/objects/Avatar';
import ChallengeActions from 'actions/ChallengeActions';
import DesktopModal from 'components/layout/DesktopModal';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import ModuleGallery from 'views/modules/ModuleGallery';
import withWidth from 'components/hoc/withWidth';
import arrowLeft from 'images/arrows/left.svg';
import arrowRight from 'images/arrows/right.svg';
import iconClip from 'images/icons/clip.svg';
import styles from './Result.scss';
import styles1 from 'views/challenge/Result.scss';
import styles2 from 'views/activity/Activity.scss';

class Result extends Component {
  onClickedPrev = () => {
    const { currResult, match } = this.props;
    const { slug } = match.params;
    const prevId = currResult.prev.substring(currResult.prev.lastIndexOf('/') + 1);
    const linkPrev = `/desafio/${slug}/resultado/${prevId}`;
    history.replace(linkPrev);
  };

  onClickedNext = () => {
    const { currResult, match } = this.props;
    const { slug } = match.params;
    const nextId = currResult.next.substring(currResult.next.lastIndexOf('/') + 1);
    const linkNext = `/desafio/${slug}/resultado/${nextId}`;
    history.replace(linkNext);
  };

  componentDidUpdate(prevProps) {
    const params = this.props.match.params;
    const prevParams = prevProps.match.params;
    if (params.id !== prevParams.id || params.slug !== prevParams.slug) {
      this.props.load(params.slug, params.id);
    }
  }

  componentDidMount() {
    const { id, slug } = this.props.match.params;
    this.props.load(slug, id);
  }

  render() {
    const { currResult, windowWidth } = this.props;
    const { slug } = this.props.match.params;
    
    if (!currResult) {
      return <span />;
    }

    const modalTitle = windowWidth > 768 ? 'Detalhes do Resultado' : '';

    const gallery = currResult.images.length ? <ModuleGallery images={currResult.images} /> : null;
    const videos = currResult.links.map(item  => {
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

    const icon = false ? <img src={iconClip} alt="Anexos" className={styles1.icon} /> : null;
    const attachments = currResult.documents.map((item, i) => {
      return (
        <Attachment
          key={i}
          data={item}
        />
      )
    });

    const linkResults = `/desafio/${slug}`;

    const arrowPrev = currResult.prev ? (
      <button className={styles2.prev} onClick={this.onClickedPrev}>
        <img src={arrowLeft} alt="Seta" />
        Anterior
      </button>
    ) : (
      <span />
    );

    const arrowNext = currResult.next ? (
      <button className={styles2.next} onClick={this.onClickedNext}>
        Próximo
        <img src={arrowRight} alt="Seta" />
      </button>
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
                        nickname={currResult.teacher.name}
                        photo={currResult.teacher.avatar_attributes.default_url}
                        size={50}
                      />
                    </div>
                    <div>
                      <div className={styles1.name}>{currResult.teacher.name}</div>
                      <div className={styles1.date}>{currResult.class_name} &middot; {currResult.created_at}</div>
                    </div>
                    {icon}
                  </div>
                  <div className={styles.text}>{currResult.description}</div>
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
  currResult: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    currResult: state.ChallengeReducer.currResult,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: (slug, resultId) => {
      dispatch(ChallengeActions.loadResult(slug, resultId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth(Result));
