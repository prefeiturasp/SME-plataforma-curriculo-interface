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
import getCategoryLabel from './getCategoryLabel';
import getContentBlocks from 'utils/getContentBlocks';
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
    this.props.loadMore(this.props.nextPage);
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
    const { data, results, nextPage, totalItems, isLoading, isSaved } = this.props;
    const { currTab, isMaterialsExpanded, isPrint } = this.state;

    if (!data) {
      return <span />;
    }

    const category = getCategoryLabel(data.category);

    let materials = null;
    if (data.list) {
      const chevron = isMaterialsExpanded ? chevronUp : chevronDown;
      const label = isMaterialsExpanded ? 'Ocultar' : 'Exibir';
      const items = data.list.items.map((item, i) => {
        return (
          <li>{item}</li>
        );
      });

      materials = (
        <div className={styles.materials}>
          <div className={styles.btnMaterials} onClick={this.onClickedMaterials}>
            <h3 className={styles.categoryName}>{data.list.title}</h3>
            <img src={chevron} alt={label} />
          </div>
          <Collapse in={this.state.isMaterialsExpanded}>
            <ul>
              {items}
            </ul>
          </Collapse>
        </div>
      );
    }
    
    const contentBlocks = data.content_blocks
      ? getContentBlocks(data.content_blocks)
      : null;

    const link = `/desafio/${data.slug}/enviar`;

    const wordResults = totalItems === 1 ? 'resultado' : 'resultados';
    const resultItems = results.map((item, i) => {
      return (
        <Result
          key={i}
          data={item}
          slug={data.slug}
        />
      );
    });

    const button = nextPage ? (
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
                deadline={data.deadline}
                id={data.id}
                slug={data.slug}
                title={data.title}
              />
              <div className={styles.tabs}>
                <Tabs
                  value={currTab}
                  variant="fullWidth"
                  onChange={this.onChangedTab}
                >
                  <Tab label="Sobre" />
                  <Tab label="Resultados" />
                </Tabs>
              </div>
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
                    <div className={styles.categoryValue}>{category}</div>
                  </div>
                  {materials}
                  {contentBlocks}
                  <div className={styles.callToAction}>
                    <div className={styles.callText}>
                      <h2>Sua turma participou deste desafio?</h2>
                      <p>Compartilhe conosco como foi o processo e resultado final do projeto executado.</p>
                    </div>
                    <div className={styles.callButtons}>
                      <NavLink to={link} className={styles.btnSendResult}>
                        Enviar resultado
                      </NavLink>
                      <button className={styles.btnOrSeeOtherResults} onClick={this.onClickedResults}>
                        <span>
                          Ou&nbsp;<strong>visualize outros resultados</strong>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.callToAction}>
                    <div className={styles.callText}>
                      <h2>Sua turma participou deste desafio?</h2>
                      <p>Compartilhe conosco como foi o processo e resultado final do projeto executado.</p>
                    </div>
                    <div className={styles.callButtons}>
                      <NavLink to={link} className={styles.btnSendResult}>
                        Enviar resultado
                      </NavLink>
                    </div>
                  </div>
                  <h3 className={styles.numResults}>{totalItems} {wordResults}</h3>
                  <div>{resultItems}</div>
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
  nextPage: PropTypes.string,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool,
  isSaved: PropTypes.bool,
  load: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ChallengeReducer.currItem,
    results: state.ChallengeReducer.results,
    nextPage: state.ChallengeReducer.nextPage,
    totalItems: state.ChallengeReducer.totalItems,
    isLoading: state.ChallengeReducer.isLoading,
    isSaved: state.ChallengeReducer.isSaved,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(BodyActions.showLoading());
      dispatch(ChallengeActions.load(slug));
      //dispatch(ChallengeActions.loadResults(slug));
      if (isLogged()) {
        dispatch(ChallengesActions.loadPerformed());
      }
    },
    loadMore: page => {
      dispatch(ChallengeActions.loadMoreResults(page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);
