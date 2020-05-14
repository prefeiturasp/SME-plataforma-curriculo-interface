import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyActions from 'actions/BodyActions';
import KnowledgeMatrixActions from 'actions/KnowledgeMatrixActions';
import Button from './Button';
import Page from 'components/layout/Page';
import styles from './KnowledgeMatrix.scss';

class KnowledgeMatrix extends Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    const items = this.props.data.map((item, i) => {
      return <Button key={i} data={item} />;
    });

    return (
      <Page>
        <section className={styles.wrapper}>
          <header className={styles.header}>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1>Matriz de Saberes</h1>
                <p>A Matriz de Saberes tem como propósito:</p>
                <p>
                  Formar cidadãos éticos, responsáveis e solidários que
                  fortaleçam uma sociedade mais inclusiva, democrática,
                  próspera e sustentável.
                </p>
                <p>
                  A Matriz de Saberes indica o que crianças, adolescentes e
                  jovens devem aprender e desenvolver ao longo dos seus anos de
                  escolaridade.
                </p>
              </div>
            </div>
          </header>
          <hr />
          <div className="container">
            <div className="row">
              <h2 className="col-md-8 offset-md-2">Conheça a matriz</h2>
            </div>
            <div className="row">{items}</div>
          </div>
        </section>
      </Page>
    );
  }
}

KnowledgeMatrix.propTypes = {
  data: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.KnowledgeMatrixReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(KnowledgeMatrixActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowledgeMatrix);
