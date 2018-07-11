import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import SequencesActions from '../../actions/SequencesActions';
import FilterBar from '../filters/FilterBar';
import FilterPanel from '../filters/FilterPanel';
import GridItem from './GridItem';
import ResultsLoading from './ResultsLoading';
import ResultsNotFound from './ResultsNotFound';
import styles from './Sequences.css';

class Sequences extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  onClickedLoad() {
    
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const items = this.props.data.map((item, i) => {
      return (
        <GridItem
          key={i}
          index={i}
          data={item} />
      );
    });

    const hasPagination = false;
    const loadMore = hasPagination ? (
      <button className={styles.load} onClick={this.onClickedLoad.bind(this)}>
        Carregar mais
      </button>
    ) : null;

    let content = <ResultsNotFound />;
    
    if (this.props.isSearching) {
      const height = this.ref.current ? this.ref.current.offsetHeight : 420;
      content = <ResultsLoading height={height} />;
    }
    else if (this.props.data.length) {
      content = (
        <div className="container">
          <ul className="row">
            {items}
          </ul>
          {loadMore}
        </div>
      );
    }
    
    return (
      <section className={styles.wrapper}>
        <div className="container">
          <h1>Sequências de Atividades</h1>
          <h2><strong>{this.props.data.length}</strong> sequências foram encontradas</h2>
          <FilterBar />
        </div>
        <hr />
        <div className="container">
          <FilterPanel />
        </div>
        <div className={styles.list} ref={this.ref}>
          {content}
        </div>
      </section>
    );
  }
}

Sequences.propTypes = {
  data: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.items,
    isSearching: state.SequencesReducer.isSearching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.load());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequences);
