import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import FiltersActions from 'actions/FiltersActions';
import SequencesActions from 'actions/SequencesActions';
import Bar from './bar/Bar';
import Filters from './filters/Filters';
import GridItem from './GridItem';
import Loading from 'components/loading/Loading';
import Page from 'components/layout/Page';
import ResultsLoading from './ResultsLoading';
import ResultsNotFound from './ResultsNotFound';
import styles from './Sequences.scss';

class Sequences extends Component {
  state = { windowHeight: 1000 };

  onClickedLoadMore = () => {
    this.props.loadMore(this.props.nextPage);
  };

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    });

    const params = this.props.match.params;
    if (params.ods) {
      this.props.loadWithFilter({
        type: 'sustainable_development_goals',
        id: parseInt(params.ods, 10),
      });
    } else if (params.mds) {
      this.props.loadWithFilter({
        type: 'knowledge_matrices',
        id: parseInt(params.mds, 10),
      });
    } else if (params.oda) {
      this.props.loadWithFilter({
        type: 'learning_objectives',
        id: parseInt(params.oda, 10),
      });
    } else if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.isSearch
    ) {
      this.props.search();
    } else {
      this.props.load();
    }
  }

  render() {
    const { data, isSearching, nextPage, totalItems } = this.props;

    const items = data.map((item, i) => {
      return <GridItem key={i} index={i} data={item} />;
    });

    let contents = <ResultsNotFound />;

    if (data.length) {
      const button = nextPage ? (
        <button className={styles.load} onClick={this.onClickedLoadMore}>
          Carregar mais
        </button>
      ) : null;

      const loadingOrButton = isSearching ? <Loading /> : button;

      contents = (
        <section className={styles.wrapper}>
          <div className="container">
            <h1 className={styles.h1}>Sequências de Atividades</h1>
            <Bar />
          </div>
          <hr />
          <div className="container">
            <Filters />
          </div>
          <div className={styles.list}>
            <div className={styles.results}>
              <h2 className={styles.h2}>
                <strong>{totalItems}</strong> sequências foram encontradas
              </h2>
              <div className="row">{items}</div>
              <div className={styles.center}>{loadingOrButton}</div>
            </div>
          </div>
        </section>
      );
    } else if (isSearching) {
      contents = <ResultsLoading height={this.state.windowHeight} />;
    }

    return <Page>{contents}</Page>;
  }
}

Sequences.propTypes = {
  data: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  nextPage: PropTypes.string,
  totalItems: PropTypes.number,
  search: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  loadWithFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.items,
    isSearching: state.SequencesReducer.isSearching,
    nextPage: state.SequencesReducer.nextPage,
    totalItems: state.SequencesReducer.totalItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(FiltersActions.clearFilters());
      dispatch(SequencesActions.load());
    },
    loadMore: page => {
      dispatch(SequencesActions.loadMore(page));
    },
    loadWithFilter: data => {
      dispatch(FiltersActions.clearFilters());
      dispatch(FiltersActions.cacheFilter(data));
      dispatch(SequencesActions.loadWithFilter(data));
    },
    search: () => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.search());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequences);
