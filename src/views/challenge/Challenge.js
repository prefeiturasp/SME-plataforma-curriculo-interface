import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BodyActions from 'actions/BodyActions';
import Page from 'components/layout/Page';
import ChallengeActions from 'actions/ChallengeActions';
import ChallengesActions from 'actions/ChallengesActions';
import ChallengeChars from './chars/ChallengeChars';
import ChallengeCharsMobile from './chars/ChallengeCharsMobile';
import Cover from './Cover';
import ResultItem from './ResultItem';
import Title from 'views/sequence/Title';
import Tooltips from 'components/Tooltips';
import isLogged from 'data/isLogged';
import styles from 'views/sequence/Sequence.scss';
import styles1 from './Challenge.scss';

class Challenge extends Component {
  state = {
    currTab: 0,
    isCharsExpanded: false,
    isPrint: false,
  };

  onChangedTab = (e, index) => {
    this.setState({
      ...this.state,
      currTab: index,
    })
  };

  onClickedChars = () => {
    this.setState({
      isCharsExpanded: !this.state.isCharsExpanded,
    });
  };

  onClickedLoadMore = () => {
    this.props.loadMore(this.props.match.params.slug);
  };

  onClickedResults = () => {
    this.setState({
      ...this.state,
      currTab: 1,
    });
  };

  onSwiped = index => {
    this.setState({
      ...this.state,
      currTab: index,
    });
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
    const { data, results, isSaved } = this.props;
    const { currTab, isPrint } = this.state;

    if (!data) {
      return <span />;
    }

    const styles2 = theme => ({
      indicator: {
        backgroundColor: '#008080',
      },
    });

    const description = data.presentation_text.replace(/\r\n/g, '<br>');
    const link = `/desafio/${data.slug}/enviar`;
    const wordResults = results.length === 1 ? 'resultado' : 'resultados';

    const resultItems = results.map((item, i) => {
      return (
        <ResultItem
          key={i}
          data={item}
        />
      );
    });

    return (
      <Page>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <Cover data={data} />
              <Title
                hasButton={true}
                isSaved={isSaved}
                slug={data.slug}
                text="Desafio em andamento até 05/06/2018"
                title={data.title}
              />
            </div>
          </div>
        </div>
        <Tabs
          className={styles1.tabs}
          classes={{
            indicator: styles2.indicator,
          }}
          indicatorColor="primary"
          value={currTab}
          variant="fullWidth"
          onChange={this.onChangedTab}
        >
          <Tab label="Sobre" />
          <Tab label="Resultados" />
        </Tabs>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <SwipeableViews
                index={currTab}
                onChangeIndex={this.onSwiped}
              >
                <div>
                  <button className={styles.btnChars} onClick={this.onClickedChars}>
                    Ver características
                  </button>
                  <div className={styles.description}>
                    {description}
                  </div>
                  <NavLink to={link} className="btnFullWidth">
                    Enviar resultado
                  </NavLink>
                  <br />
                  <button className="btnFullWidth" onClick={this.onClickedResults}>
                    Ou visualize outros resultados
                  </button>
                </div>
                <div>
                  <div className={styles1.callToAction}>
                    <h2>Sua turma participou deste desafio?</h2>
                    <p>Compartilhe conosco como foi o processo e resultado final do projeto executado.</p>
                    <NavLink to={link} className="btnFullWidth">
                      Enviar resultado
                    </NavLink>
                  </div>
                  <h3 className={styles1.numResults}>{results.length} {wordResults}</h3>
                  <div>{resultItems}</div>
                  <div className={styles1.center}>
                    <button className={styles1.btnLoadMore} onClick={this.onClickedLoadMore}>
                      Ver mais resultados
                    </button>
                  </div>
                </div>
              </SwipeableViews>
            </div>
            <div className={styles.chars}>
              <ChallengeChars data={data} isPrint={isPrint} />
            </div>
          </div>
        </div>
        <ChallengeCharsMobile
          data={data}
          isExpanded={this.state.isCharsExpanded}
          onBack={this.onClickedChars}
        />
        <Tooltips />
      </Page>
    );
  }
}

Challenge.propTypes = {
  data: PropTypes.object,
  results: PropTypes.array,
  isSaved: PropTypes.bool,
  load: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ChallengeReducer.currItem,
    results: state.ChallengeReducer.results,
    isSaved: state.ChallengeReducer.isSaved,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(BodyActions.showLoading());
      dispatch(ChallengeActions.load(slug));
      dispatch(ChallengeActions.loadResults(slug));
      if (isLogged()) {
        dispatch(ChallengesActions.loadPerformed());
      }
    },
    loadMore: slug => {
      dispatch(ChallengeActions.loadMoreResults(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);
