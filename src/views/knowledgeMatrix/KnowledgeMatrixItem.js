import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BodyActions from '../../actions/BodyActions';
import KnowledgeMatrixActions from '../../actions/KnowledgeMatrixActions';
import iconCloseBig from '../../images/iconCloseBig.svg';
import styles from './KnowledgeMatrixItem.css';

class KnowledgeMatrixItem extends Component {
  componentDidMount() {
    this.props.showPopup();
    if (this.props.data.length <= 0) {
      this.props.load();
    }
  }

  componentWillUnmount() {
    this.props.hidePopup();
  }

  render() {
    const index = parseInt(this.props.match.params.index, 10);
    const data = this.props.data[index - 1];
    const title = data ? data.title : '';
    const knowDescription = data ? data.know_description : '';
    const forDescription = data ? data.for_description : '';

    return (
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className={styles.number}>
                {index}
              </div>
              <h1>{title}</h1>
              <h2>Saber</h2>
              <p>{knowDescription}</p>
              <h2>Para</h2>
              <p>{forDescription}</p>
              <NavLink to="/sequencias" className={styles.button}>
                Ver Sequências de Atividades Relacionadas
              </NavLink>
              <NavLink to="/matriz-de-saberes" className={styles.close}>
                <img src={iconCloseBig} alt="Fechar" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

KnowledgeMatrixItem.propTypes = {
  data: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
  hidePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.KnowledgeMatrixReducer.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(KnowledgeMatrixActions.load());
    },
    hidePopup: () => {
      dispatch(BodyActions.hidePopup());
    },
    showPopup: () => {
      dispatch(BodyActions.showPopup());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KnowledgeMatrixItem);
