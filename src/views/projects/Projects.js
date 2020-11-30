import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import ProjectsActions from 'actions/ProjectsActions';
import Bar from './bar/Bar';
import Filters from './filters/Filters';
import GridItem from './GridItem';
import Loading from 'components/loading/Loading';
import Page from 'components/layout/Page';
import ResultsLoading from './ResultsLoading';
import ResultsNotFound from './ResultsNotFound';
import styles from './Projects.scss';

class Projects extends Component {
  state = { windowHeight: 1000 };

  onClickedLoadMore = () => {
    this.props.loadMore(this.props.nextPage);
  };

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    });
    this.props.load();
  }

  render() {
    const { data, isSearching, nextPage, totalItems } = this.props;

    const items = data.map((item, i) => {
      return <GridItem key={i} index={i} data={item} />;
    })

    let contents = <ResultsNotFound />;

    if (data.length) {
      const button = nextPage ? (
        <button className={styles.load} onClick={this.onClickedLoadMore}>
          Carregar mais
        </button>
      ) : null;

      const loadingOrButton = isSearching ? <Loading /> : button;

      contents = (
        <div className={styles.list}>
          <div className={styles.results}>
            <h2 className={styles.h2}>
              <strong>{totalItems}</strong> projetos foram encontrados
            </h2>
            <br></br>
            <div className="row">{items}</div>
            <br></br>
            <div className={styles.center}>{loadingOrButton}</div>
          </div>
        </div>
      );
    } else if (isSearching) {
      contents = <ResultsLoading height={this.state.windowHeight} />;
    }

    return (
      <Page>
        <section className={styles.wrapper}>
          <div className="container">
            <h1 className={styles.h1}>Projetos do TCA</h1>
            <Bar />
          </div>
          <hr />
          <div className="container">
            <Filters />
          </div>
          {contents}
        </section>
      </Page>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  nextPage: PropTypes.string,
  totalItems: PropTypes.number,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ProjectsReducer.items,
    isSearching: state.ProjectsReducer.isSearching,
    nextPage: state.ProjectsReducer.nextPage,
    totalItems: state.ProjectsReducer.totalItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(ProjectFiltersActions.clearFilters());
      dispatch(ProjectsActions.load());
    },
    loadMore: page => {
      dispatch(ProjectsActions.loadMore(page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
