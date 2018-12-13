import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Sticky from 'react-stickynode';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import ActivityActions from 'actions/ActivityActions';
import BodyActions from 'actions/BodyActions';
import ModuleExercise from './ModuleExercise';
import ModuleGallery from './ModuleGallery';
import ModuleLongText from './ModuleLongText';
import ModuleQuestion from './ModuleQuestion';
import ModuleStudent from './ModuleStudent';
import ModuleTable from './ModuleTable';
import ModuleTeacher from './ModuleTeacher';
import Page from 'components/Page';
import SequenceCover from 'components/sequence/SequenceCover';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import arrowLeft from 'images/arrow/left.svg';
import arrowRight from 'images/arrow/right.svg';
import iconPrint from 'images/icon/print.svg';
import iconSave from 'images/icon/save.svg';
import styles from './Activity.scss';

class Activity extends Component {
  componentDidMount() {
    const params = this.props.match.params;
    this.props.load(params.slug1, params.slug2);
  }

  componentDidUpdate(prevProps) {
    const params = this.props.match.params;
    const prevParams = prevProps.match.params;
    if (params.slug2 !== prevParams.slug2) {
      this.props.load(params.slug1, params.slug2);
    }
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const data = this.props.data;
    const sequence = data.activity_sequence;
    
    const sequenceImage = data.image_attributes.default_url ? (
      <img
        className={styles.sequenceImage}
        src={API_URL + data.image_attributes.default_url}
        srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
        alt={sequence.title} />
    ) : null;

    const contentBlocks = data.content_blocks
      ? data.content_blocks.map((block, i) => {
          switch(block.type) {
            case 'to_teacher':
              return (
                <ModuleTeacher
                  key={i}
                  text={convertQuillToHtml(block.content.body)}
                />
              );

            case 'to_student':
              return (
                <ModuleStudent
                  key={i}
                  text={convertQuillToHtml(block.content.body)}
                />
              );

            case 'question':
              return (
                <ModuleQuestion
                  key={i}
                  number={block.content.number}
                  title={block.content.title}
                  text={convertQuillToHtml(block.content.body)}
                />
              );

            case 'predefined_exercise':
              return (
                <ModuleExercise
                  key={i}
                  icon={block.content.icon_url}
                  title={block.content.title}
                  text={convertQuillToHtml(block.content.body)}
                />
              );

            case 'long_text':
              return (
                <ModuleLongText
                  key={i}
                  title={block.content.title}
                  text={convertQuillToHtml(block.content.body)}
                />
              );

            case 'gallery':
              return (
                <ModuleGallery
                  key={i}
                  images={block.images}
                />
              );

            default:
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{__html: convertQuillToHtml(block.content.body)}}
                />
              );
          }
        })
      : null;

    const linkChars = `/sequencia/${sequence.slug}/atividade/${this.props.match.params.slug2}/caracteristicas`;
    const linkPrint = `/imprimir/sequencia/${sequence.slug}/atividade/${this.props.match.params.slug2}`;
    const linkPrev = `/sequencia/${sequence.slug}/atividade/${data.last_activity}`;
    const linkNext = `/sequencia/${sequence.slug}/atividade/${data.next_activity}`;
    const link = `/sequencia/${sequence.slug}`;

    const arrowPrev = data.last_activity
      ? <NavLink className={styles.prev} to={linkPrev}>
          <img src={arrowLeft} alt="Seta" />
          Atividade {data.sequence - 1}
        </NavLink>
      : <span />;

    const arrowNext = data.next_activity
      ? <NavLink className={styles.next} to={linkNext}>
          Atividade {data.sequence + 1}
          <img src={arrowRight} alt="Seta" />
        </NavLink>
      : null;

    return (
      <Page>
      <section className={styles.wrapper}>
        <Sticky>
          <div className={styles.sequence}>
            {sequenceImage}
            <div>
              <p>Sequência de atividades</p>
              <NavLink to={link}>
                <h1>{sequence.title}</h1>
              </NavLink>
            </div>
            <button className={styles.btnSave}>
              <img src={iconSave} alt="Salvar" />
              Salvar
            </button>
          </div>
        </Sticky>
        <header className={styles.header}>
          <SequenceCover
            data={data}
            sequence={sequence}
          />
          <div className={styles.info}>
            <div>
              <p>Atividade {data.sequence}</p>
              <h1>{data.title}</h1>
            </div>
          </div>
          <NavLink className={styles.btnInfo} to={linkChars}>
            Ver características
          </NavLink>
          <NavLink className={styles.btnPrint} to={linkPrint}>
            <img src={iconPrint} alt="Imprimir" />
            Imprimir
          </NavLink>
        </header>
        <div className="container">
          <div className="row">
            <div className={styles.description}>
              {contentBlocks}
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.arrows}>
          {arrowPrev}
          {arrowNext}
        </div>
        <div className={styles.footer}>
          <NavLink className={styles.back} to={link}>
            Voltar para a sequência
          </NavLink>
        </div>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id="tooltipLearningObjectives"
          className="tooltip">
          <strong>O que são os objetivos de aprendizagem?</strong>
          <p>O desenvolvimento que procura satisfazer as necessidades da geração atual, sem comprometer a capacidades das gerações futuras de satisfazerem as suas próprias necessidades.</p>
        </ReactTooltip>
      </section>
      </Page>
    );
  }
}

Activity.propTypes = {
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  let slug = '';
  if (ownProps.match) {
    const params = ownProps.match.params;
    slug = `${params.slug1}_${params.slug2}`;
  } else {
    slug = `${ownProps.slug1}_${ownProps.slug2}`;
  }

  return {
    data: state.ActivityReducer[slug],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: (slug1, slug2) => {
      dispatch(BodyActions.showLoading());
      dispatch(ActivityActions.load(slug1, slug2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
