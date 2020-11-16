import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ProjectsActions from 'actions/ProjectsActions';
import Loading from 'components/loading/Loading';
import Page from 'components/layout/Page';
import styles from './Projects.scss';

class Projects extends Component {
  state = { windowHeight: 1000 };

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    });
  }

  render() {
      let contents = (
      <div className={styles.list}>
        <div className={styles.results}>
          <h2 className={styles.h2}>
            <strong>0</strong> projetos foram encontradas
          </h2>
          <div className="row"></div>
          <div className={styles.center}></div>
        </div>
      </div>
    );
    return (
      <Page>
        <section className={styles.wrapper}>
          <div className="container">
            <h1 className={styles.h1}>Projetos do TCA</h1>
          </div>
          <hr />
          <div className="container">
          </div>
          {contents}
        </section>
      </Page>
    );
  }
}

Projects.propTypes = {
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
