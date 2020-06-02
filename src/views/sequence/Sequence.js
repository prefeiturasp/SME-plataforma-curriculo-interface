import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import ActivityItem from './ActivityItem';
import ActivityPrintItem from 'views/activity/ActivityPrintItem';
import BodyActions from 'actions/BodyActions';
import Notification from 'components/objects/Notification';
import Page from 'components/layout/Page';
import ReadMore from 'components/ReadMore';
import SequenceActions from 'actions/SequenceActions';
import SequencesActions from 'actions/SequencesActions';
import SequenceChars from './chars/SequenceChars';
import SequenceCharsMobile from './chars/SequenceCharsMobile';
import Cover from './Cover';
import Title from './Title';
import Tooltips from 'components/Tooltips';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import createModalLink from 'utils/createModalLink';
import isLogged from 'data/isLogged';
import styles from './Sequence.scss';

class Sequence extends Component {
  state = {
    isCharsExpanded: false,
    isPrint: false,
  };

  onClickedChars = () => {
    this.setState({
      isCharsExpanded: !this.state.isCharsExpanded,
    });
  };

  onClickedRate = () => {
    const link = createModalLink(
      `/sequencia/${this.props.match.params.slug}/avaliar`
    );
    history.push(link);
  };

  componentDidMount() {
    this.props.load(this.props.match.params.slug);

    if (this.props.location.pathname.match(/imprimir/)) {
      this.setState({
        ...this.state,
        isPrint: true
      });
    }

  }

  componentDidUpdate(prevProps) {
    console.log(this.state.isPrint, !prevProps.data, this.props.data);
    if (this.state.isPrint && !prevProps.data && this.props.data) {
      setTimeout(window.print, 2000);
    }
  }

  render() {
    const { data, isSaved, performed } = this.props;
    const { isPrint } = this.state;

    if (!data) {
      return <span />;
    }

    const isPerformed = !!this.props.performed.find(
      item => item.activity_sequence_id === data.id
    );

    const notification =
      isPerformed ? (
        <Notification
          text="Você salvou esta sequência. Avalie agora e nos ajude a construir novos conteúdos."
          labelNo="Agora não"
          labelYes="Avaliar sequência"
          onClickedYes={this.onClickedRate}
        />
      ) : null;

    const word = data.activities.length === 1 ? 'Atividade' : 'Atividades';
    const activities = data.activities.map((item, i) => {
      return isPrint
        ? (
            <ActivityPrintItem
              key={i}
              data={item}
              index={i + 1}
              sequenceSlug={data.slug}
              slug1={data.slug}
              slug2={item.slug}
            />
          )
        : (
            <ActivityItem
              key={i}
              data={item}
              index={i+ 1}
              sequenceSlug={data.slug}
            />
          );
    });

    const description = data.presentation_text.replace(/\r\n/g, '<br>');
    const references = data.books ? (
      <div className={styles.references}>
        <h3>Referências</h3>
        <div dangerouslySetInnerHTML={{ __html: convertQuillToHtml(data.books) }} />
      </div>
    ) : null;

    return (
      <Page>
        {notification}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <Cover data={data} sequence={data} />
              <Title
                hasButton={true}
                isSaved={isSaved}
                slug={data.slug}
                text="Sequência de atividades"
                title={data.title}
              />
              <button className={styles.btnChars} onClick={this.onClickedChars}>
                Ver características
              </button>
              <div className={styles.description}>
                <ReadMore lines={15} children={description} />
              </div>
              {references}
              <div className={styles.activities}>
                <h3>
                  {data.activities.length} {word}
                </h3>
                <div className="row">{activities}</div>
              </div>
            </div>
            <div className={styles.chars}>
              <SequenceChars data={data} isPrint={isPrint} />
            </div>
          </div>
        </div>
        <SequenceCharsMobile
          data={data}
          isExpanded={this.state.isCharsExpanded}
          onBack={this.onClickedChars}
        />
        <Tooltips />
      </Page>
    );
  }
}

Sequence.propTypes = {
  data: PropTypes.object,
  isSaved: PropTypes.bool,
  load: PropTypes.func.isRequired,
  performed: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    data: state.SequenceReducer.currItem,
    isSaved: state.SequenceReducer.isSaved,
    performed: state.SequencesReducer.performed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(BodyActions.showLoading());
      dispatch(SequenceActions.load(slug));
      if (isLogged()) {
        dispatch(SequenceActions.loadCollections(slug));
        dispatch(SequencesActions.loadPerformed());
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequence);
