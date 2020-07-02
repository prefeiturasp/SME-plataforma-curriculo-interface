import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'index';
import ConsultationActions from 'actions/ConsultationActions';
import ConsultationLink from 'components/ConsultationLink';
import FullModal from 'components/layout/FullModal';
import iconCloseBigWhite from 'images/icons/closeBigWhite.svg';
import styles from './Detail.scss';

class Detail extends Component {
  onClickedClose = () => {
    history.goBack();
  };

  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  render() {
    const data = this.props.data;

    if (!data) {
      return <span />;
    }

    const style = { backgroundColor: data.color };

    return (
      <FullModal>
        <section className={styles.wrapper}>
          <header className={styles.header} style={style}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className={styles.number}>{data.segment.name}</div>
                  <h1>{data.title}</h1>
                  <h2>{data.description}</h2>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.contents}>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2>Esta Consulta Pública estará disponível entre as seguintes datas:</h2>
                <h3>{data['initial_date']} ~ {data['final_date']}</h3>
                <img className={styles.cover_image} src={data.cover_image}></img>
                <h2>Acesse os documentos referentes a essa Consulta Pública</h2>
                  {data.documents.map((d, index) => {
                  return(
                    <a target='_blank' key={index.toString()} className={styles.button} href={d}>Documento {(index + 1).toString()}</a>
                  );
                })}
                <h2>Responda os formulários para ajudar na pesquisa </h2>
                {data.survey_forms.map((survey_form, index) => {
                  return(
                    <a target='_blank' key={index.toString()} className={styles.button} href='/'>{survey_form.title}</a>
                  );
                })}
              </div>
            </div>
            <br></br>
          </div>
          <button className={styles.close} onClick={this.onClickedClose}>
            <img src={iconCloseBigWhite} alt="Fechar" />
          </button>
        </section>
      </FullModal>
    );
  }
}

Detail.propTypes = {
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ConsultationReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: id => {
      dispatch(ConsultationActions.load(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
