import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityActions from 'actions/ActivityActions';
import ActivityChars from './chars/ActivityChars';
import Cover from 'views/sequence/Cover';
import ModuleExercise from './ModuleExercise';
import ModuleGallery from './ModuleGallery';
import ModuleLongText from './ModuleLongText';
import ModuleQuestion from './ModuleQuestion';
import ModuleStudent from './ModuleStudent';
import ModuleTextWithTables from './ModuleTextWithTables';
import ModuleTeacher from './ModuleTeacher';
import Title from 'views/sequence/Title';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import styles from './ActivityPrintItem.scss';

class ActivityPrintItem extends Component {
  componentDidMount() {
    this.props.load(this.props.slug1, this.props.slug2);
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { data } = this.props;
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
              return <ModuleTextWithTables key={i} data={block.content.body} />;
          }
        })
      : null;

    return (
      <section className={styles.wrapper}>
        <Cover data={data} sequence={sequence} />
        <Title
          slug={sequence.slug}
          text={`Atividade ${data.sequence}`}
          title={data.title}
        />
        <ActivityChars data={this.props.data} isPrint={true} />
        <div className={styles.description}>{contentBlocks}</div>
      </section>
    );
  }
}

ActivityPrintItem.propTypes = {
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
      dispatch(ActivityActions.load(slug1, slug2));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityPrintItem);
