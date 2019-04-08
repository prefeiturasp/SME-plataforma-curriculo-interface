import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
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
import Loading from 'components/loading/Loading';
import Result from './Result';
import Title from './Title';
import Tooltips from 'components/Tooltips';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import isLogged from 'data/isLogged';
import chevronDown from 'images/chevrons/down.svg';
import chevronUp from 'images/chevrons/up.svg';
import styles from './Challenge.scss';

class Challenge extends Component {
  state = {
    currTab: 0,
    isCharsExpanded: false,
    isMaterialsExpanded: true,
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

  onClickedMaterials = () => {
    this.setState({
      ...this.state,
      isMaterialsExpanded: !this.state.isMaterialsExpanded,
    });
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
    if (this.state.isPrint && !prevProps.data && this.props.data) {
      setTimeout(window.print, 2000);
    }
  }

  render() {
    const { data, results, isLoading, isSaved } = this.props;
    const { currTab, isMaterialsExpanded, isPrint } = this.state;

    if (!data) {
      return <span />;
    }

    const chevron = isMaterialsExpanded ? chevronUp : chevronDown;
    const label = isMaterialsExpanded ? 'Ocultar' : 'Exibir';

    const description = convertQuillToHtml(data.text);

    const link = `/desafio/${data.slug}/enviar`;

    const wordResults = results.length === 1 ? 'resultado' : 'resultados';
    const Results = results.map((item, i) => {
      return (
        <Result
          key={i}
          data={item}
          slug={data.slug}
        />
      );
    });

    const hasNextPage = true
    const button = hasNextPage ? (
      <button className={styles.btnLoadMore} onClick={this.onClickedLoadMore}>
        Ver mais resultados
      </button>
    ) : null;

    const loadingOrButton = isLoading ? <Loading /> : button;

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
                deadline={data.deadline}
                title={data.title}
              />
            </div>
          </div>
        </div>
        <Tabs
          className={styles.tabs}
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
                  <div className={styles.category}>
                    <h3 className={styles.categoryName}>Categoria</h3>
                    <div className={styles.categoryValue}>Projeto</div>
                  </div>
                  <div className={styles.materials}>
                    <div className={styles.btnMaterials} onClick={this.onClickedMaterials}>
                      <h3 className={styles.categoryName}>Recursos didáticos utilizados</h3>
                      <img src={chevron} alt={label} />
                    </div>
                    <Collapse in={this.state.isMaterialsExpanded}>
                      <ul>
                        <li>Arduino</li>
                        <li>Servo</li>
                        <li>Sensor linear</li>
                      </ul>
                    </Collapse>
                  </div>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{__html: description}}
                  />
                  <div className={styles.callToAction}>
                    <h2>Sua turma participou deste desafio?</h2>
                    <p>Compartilhe conosco como foi o processo e resultado final do projeto executado.</p>
                    <NavLink to={link} className="btnFullWidth">
                      Enviar resultado
                    </NavLink>
                    <button className={styles.btnOrSeeOtherResults} onClick={this.onClickedResults}>
                      Ou&nbsp;<strong>visualize outros resultados</strong>
                    </button>
                  </div>
                </div>
                <div>
                  <div className={styles.callToAction}>
                    <h2>Sua turma participou deste desafio?</h2>
                    <p>Compartilhe conosco como foi o processo e resultado final do projeto executado.</p>
                    <NavLink to={link} className="btnFullWidth">
                      Enviar resultado
                    </NavLink>
                  </div>
                  <h3 className={styles.numResults}>{results.length} {wordResults}</h3>
                  <div>{Results}</div>
                  <div className={styles.center}>{loadingOrButton}</div>
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
  results: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  isSaved: PropTypes.bool,
  load: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ChallengeReducer.currItem,
    results: state.ChallengeReducer.results,
    isLoading: state.ChallengeReducer.isLoading,
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
