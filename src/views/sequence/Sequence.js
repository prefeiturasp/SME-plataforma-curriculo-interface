import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityItem from './ActivityItem';
import BodyActions from 'actions/BodyActions';
import Notification from 'components/objects/Notification';
import Page from 'components/layout/Page';
import ReadMore from 'components/ReadMore';
import SequenceChars from './chars/SequenceChars';
import SequenceCharsMobile from './chars/SequenceCharsMobile';
import Cover from './Cover';
import Title from './Title';
import SequencesActions from 'actions/SequencesActions';
import Tooltips from 'components/Tooltips';
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

  componentDidMount() {
    this.props.loadItem(this.props.match.params.slug);
  }

  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    const word = data.activities.length > 1 ? 'Atividades' : 'Atividade';
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
        <Notification
          text="Você completou esta sequência. Avalie agora e nos ajude a construir novos conteúdos."
          labelNo="Agora não"
          labelYes="Avaliar sequência"
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <Cover data={data} sequence={data} />
              <Title
                hasButton={true}
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
              <SequenceChars data={this.props.data} />
            </div>
          </div>
        </div>
        <SequenceCharsMobile
          data={this.props.data}
          isExpanded={this.state.isCharsExpanded}
        />
        <Tooltips />
      </Page>
    );
  }
}

Sequence.propTypes = {
  data: PropTypes.object,
  loadItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadItem: slug => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.loadItem(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequence);
