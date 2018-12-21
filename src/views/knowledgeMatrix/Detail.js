import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BodyActions from 'actions/BodyActions';
import FullModal from 'components/layout/FullModal';
import KnowledgeMatrixActions from 'actions/KnowledgeMatrixActions';
import iconCloseBig from 'images/icons/closeBig.svg';
import styles from './Detail.scss';

class Detail extends Component {
  state = { isLoaded: true };

  onClickedClose = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    if (this.props.data.length <= 0) {
      this.props.load();
      this.setState({ isLoaded: false });
    } else {
      this.setState({ isLoaded: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.index !== prevProps.match.params.index) {
      const index = parseInt(this.props.match.params.index, 10);
      const data = this.props.data.filter(item => item.sequence === index)[0];
      if (data) {
        this.setState({ isLoaded: true });
      }
    }
  }

  render() {
    const index = parseInt(this.props.match.params.index, 10);
    const data = this.props.data.filter(item => item.sequence === index)[0];
    const title = data ? data.title : '';
    const knowDescription = data ? data.know_description : '';
    const forDescription = data ? data.for_description : '';

    return (
      <FullModal isVisible={this.state.isLoaded}>
        <section className={styles.wrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className={styles.header}>
                  <div className={styles.number}>{index}</div>
                  <h1>{title}</h1>
                </div>
                <div className={styles.contents}>
                  <h2>Saber</h2>
                  <p>{knowDescription}</p>
                  <h2>Para</h2>
                  <p>{forDescription}</p>
                  <NavLink
                    to={`/sequencias/matriz-de-saberes/${index}`}
                    className={styles.button}
                  >
                    Ver Sequências de Atividades Relacionadas
                  </NavLink>
                </div>
                <button className={styles.close} onClick={this.onClickedClose}>
                  <img src={iconCloseBig} alt="Fechar" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </FullModal>
    );
  }
}

Detail.propTypes = {
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
)(withRouter(Detail));
