import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityItem from './ActivityItem';
import BodyActions from 'actions/BodyActions';
import Page from 'components/layout/Page';
import ReadMore from 'components/ReadMore';
import SequenceActions from 'actions/SequenceActions';
import SequencesActions from 'actions/SequencesActions';
import SequenceChars from './chars/SequenceChars';
import SequenceCharsMobile from './chars/SequenceCharsMobile';
import Cover from './Cover';
import Title from './Title';
import Tooltips from 'components/Tooltips';
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

  componentDidMount() {
    this.props.load(this.props.match.params.slug);
  }

  render() {
    const { data, isSaved } = this.props;

    if (!data) {
      return <span />;
    }

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
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequenceReducer.currItem,
    isSaved: state.SequenceReducer.isSaved,
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
