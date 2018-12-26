import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ActivityActions from 'actions/ActivityActions';
import ActivityChars from './chars/ActivityChars';
import ActivityCharsMobile from './chars/ActivityCharsMobile';
import BodyActions from 'actions/BodyActions';
import ModuleExercise from './ModuleExercise';
import ModuleGallery from './ModuleGallery';
import ModuleLongText from './ModuleLongText';
import ModuleQuestion from './ModuleQuestion';
import ModuleStudent from './ModuleStudent';
import ModuleTeacher from './ModuleTeacher';
import Page from 'components/layout/Page';
import Cover from 'views/sequence/Cover';
import SequencePreview from './SequencePreview';
import Title from 'views/sequence/Title';
import Tooltips from 'components/Tooltips';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import arrowLeft from 'images/arrows/left.svg';
import arrowRight from 'images/arrows/right.svg';
import styles from 'views/sequence/Sequence.scss';
import styles1 from './Activity.scss';

class Activity extends Component {
  state = {
    isCharsExpanded: false,
  };

  onClickedChars = () => {
    this.setState({
      isCharsExpanded: !this.state.isCharsExpanded,
    });
  };

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

    const contentBlocks = data.content_blocks
      ? data.content_blocks.map((block, i) => {
          switch (block.type) {
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
              return <ModuleGallery key={i} images={block.images} />;

            default:
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: convertQuillToHtml(block.content.body),
                  }}
                />
              );
          }
        })
      : null;

    const linkPrev = `/sequencia/${sequence.slug}/atividade/${
      data.last_activity
    }`;
    const linkNext = `/sequencia/${sequence.slug}/atividade/${
      data.next_activity
    }`;
    const linkSequence = `/sequencia/${sequence.slug}`;

    const arrowPrev = data.last_activity ? (
      <NavLink className={styles1.prev} to={linkPrev}>
        <img src={arrowLeft} alt="Seta" />
        Atividade {data.sequence - 1}
      </NavLink>
    ) : (
      <span />
    );

    const arrowNext = data.next_activity ? (
      <NavLink className={styles1.next} to={linkNext}>
        Atividade {data.sequence + 1}
        <img src={arrowRight} alt="Seta" />
      </NavLink>
    ) : null;

    return (
      <Page>
        <section className={styles.wrapper}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-8">
                <SequencePreview data={data} sequence={sequence} isInActivity />
                <Cover data={data} sequence={sequence} />
                <Title text={`Atividade ${data.sequence}`} title={data.title} />
                <button
                  className={styles.btnChars}
                  onClick={this.onClickedChars}
                >
                  Ver características
                </button>
                <div className={styles.description}>{contentBlocks}</div>
              </div>
              <div className={styles.chars}>
                <ActivityChars data={this.props.data} />
              </div>
            </div>
          </div>
          <hr />
          <div className={styles1.arrows}>
            {arrowPrev}
            {arrowNext}
          </div>
          <div className={styles1.footer}>
            <NavLink className={styles1.back} to={linkSequence}>
              Voltar para a sequência
            </NavLink>
          </div>
          <ActivityCharsMobile
            data={this.props.data}
            isExpanded={this.state.isCharsExpanded}
          />
          <Tooltips />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
