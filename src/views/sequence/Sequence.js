import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import ActivityItem from './ActivityItem';
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
import createModalLink from 'utils/createModalLink';
import isLogged from 'data/isLogged';
import styles from './Sequence.scss';

class Sequence extends Component {
  state = {
    isCharsExpanded: false,
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
  }

  render() {
    const { data, isSaved, performed } = this.props;

    if (!data) {
      return <span />;
    }

    const isPerformed = !!performed.find(item => item.activity_sequence_id === data.id);
    const notification = isPerformed
      ? <Notification
          text="Você completou esta sequência. Avalie agora e nos ajude a construir novos conteúdos."
          labelNo="Agora não"
          labelYes="Avaliar sequência"
          onClickedYes={this.onClickedRate}
        />
      : null;

    const word = data.activities.length === 1 ? 'Atividade' : 'Atividades';
    const activities = data.activities.map((item, i) => {
      return (
        <ActivityItem
          key={i}
          data={item}
          index={i + 1}
          sequenceSlug={data.slug}
        />
      );
    });

    const description = data.presentation_text.replace(/\r\n/g, '<br>');

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
              <div className={styles.activities}>
                <h3>
                  {data.activities.length} {word}
                </h3>
                <div className="row">{activities}</div>
              </div>
            </div>
            <div className={styles.chars}>
              <SequenceChars data={data} />
            </div>
          </div>
        </div>
        <SequenceCharsMobile
          data={this.props.data}
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
  performed: PropTypes.array,
  load: PropTypes.func.isRequired,
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
