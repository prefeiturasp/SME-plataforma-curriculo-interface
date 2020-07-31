import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import ConsultationActions from 'actions/ConsultationActions';
import TeacherSurveyFormsActions from 'actions/TeacherSurveyFormsActions';
import FullModal from 'components/layout/FullModal';
import iconCloseBigWhite from 'images/icons/closeBigWhite.svg';
import styles from './Detail.scss';
import { API_URL } from 'data/constants';

class Detail extends Component {
  state = { surveyFormsStatus: [] };

  onClickedClose = () => {
    history.goBack();
  };

  componentDidMount() {
    this.props.load(this.props.match.params.id);
    this.props.loadFinishedFormIds();
  }

  render() {
    const data = this.props.data;
    const answersFinished = this.props.answersFinished ? this.props.answersFinished : [];

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
                {(data.documents.length > 0) ? <h2>Acesse os documentos abaixo referentes a Consulta Pública</h2> : <h2></h2> }
                {data.documents.map((d, index) => {
                  return(
                    <a target='_blank' key={index.toString()} className={styles.button} href={d}>Documento {(index + 1).toString()}</a>
                  );
                })}
                {(data.survey_forms.length > 0) ? <h2>Responda os formulários abaixo</h2> : <h2></h2> }
                {data.survey_forms.map((survey_form, index) => {
                  return(
                    <div key={index.toString()}>
                      <button
                        target='_blank'
                        className={styles.button}
                        onClick={() => window.open(`${API_URL}/pesquisas/${survey_form['id']}/criar-resposta`)}
                        disabled={answersFinished.includes(survey_form.id)}
                        >
                        {survey_form.title}
                      </button>
                    </div>
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
  answersFinished: PropTypes.array,
  load: PropTypes.func.isRequired,
  loadFinishedFormIds: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ConsultationReducer.currItem,
    answersFinished: state.TeacherSurveyFormsReducer.answersFinished,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: id => {
      dispatch(ConsultationActions.load(id));
    },
    loadFinishedFormIds: () => {
      dispatch(TeacherSurveyFormsActions.loadFinishedFormIds());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
