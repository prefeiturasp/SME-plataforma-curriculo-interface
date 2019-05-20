import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import Challenge from 'views/technologies/Challenge';
import ChallengesActions from 'actions/ChallengesActions';
import Contents from './Contents';
import MethodologiesActions from 'actions/MethodologiesActions';
import OtherMethodology from './OtherMethodology';
import Page from 'components/layout/Page';
import ProjectContents from './ProjectContents';
import arrowDownGreen from 'images/arrows/downGreen.svg';
import styles from './Methodology.scss';
import styles1 from 'views/technologies/Technologies.scss';

class Methodology extends Component {
  state = {
    hasLoadedFinishedChallenges: false,
  };

  onClickedFinishedChallenges = () => {
    this.props.loadFinished();
    this.setState({ hasLoadedFinishedChallenges: true });
  };

  componentDidUpdate(prevProps) {
    const slug = this.props.match.params.slug;
    if (prevProps.match.params.slug !== slug) {
      window.scrollTo(0, 0);
      this.props.loadItem(slug);
    }
  }

  componentDidMount() {
    this.props.loadOngoing();
    this.props.loadMethodologies();
    this.props.loadItem(this.props.match.params.slug);
  }

  render() {
    const { data, methodologies, challenges } = this.props;

    if (!data) {
      return <span />;
    }

    const { slug, title } = data;

    const contents = slug === 'projeto' ? <ProjectContents /> : <Contents slug={slug} />;

    const others = methodologies.filter(item => item.slug !== slug);
    const otherItems = others.map((item, i) => {
      return <OtherMethodology key={i} data={item} />;
    });

    const challengeItems = challenges.map((item, i) => {
      return <Challenge key={i} data={item} />;
    });

    const btnFinishedChallenges = this.state.hasLoadedFinishedChallenges ? null : (
      <div className={styles1.center}>
        <button className={styles1.btnChallenges} onClick={this.onClickedFinishedChallenges}>
          Ver desafios encerrados
        </button>
      </div>
    );

    return (
      <Page>
        <header className={styles.header}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 offset-md-2">
                <img src={API_URL + data.image_attributes.default_url} alt={title} className={styles.image} />
                <h1>{title}</h1>
                <p>Entenda como alcançar uma aprendizagem significativa ao utilizar este método como base</p>
                <img src={arrowDownGreen} alt="Ver mais" />
              </div>
            </div>
          </div>
        </header>
        {contents}
        <section className={styles.others}>
          <div className="container">
            <h2>Outras metodologias</h2>
            <div className="row">
              {otherItems}
            </div>
          </div>
        </section>
        <section className={styles1.challenges}>
          <div className="container">
            <h2>Desafios</h2>
            <div className="row">
              {challengeItems}
            </div>
            {btnFinishedChallenges}
          </div>
        </section>
      </Page>
    );
  }
}

Methodology.propTypes = {
  data: PropTypes.object,
  methodologies: PropTypes.array.isRequired,
  challenges: PropTypes.array.isRequired,
  loadOngoing: PropTypes.func.isRequired,
  loadFinished: PropTypes.func.isRequired,
  loadMethodologies: PropTypes.func.isRequired,
  loadItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.MethodologiesReducer.currItem,
    methodologies: state.MethodologiesReducer.items,
    challenges: state.ChallengesReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadOngoing: () => {
      dispatch(ChallengesActions.loadOngoing());
    },
    loadFinished: () => {
      dispatch(ChallengesActions.loadFinished());
    },
    loadMethodologies: () => {
      dispatch(MethodologiesActions.load());
    },
    loadItem: slug => {
      dispatch(MethodologiesActions.loadItem(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Methodology);
