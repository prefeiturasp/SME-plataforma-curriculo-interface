import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import SurveyFormActions from 'actions/SurveyFormActions';
import TeacherSurveyFormsActions from 'actions/TeacherSurveyFormsActions';
import styles from './SurveyForm.scss';
import getContentBlocks from 'utils/getContentBlocks';
import Slider from '@material-ui/core/Slider';

class SurveyForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      surveyFormAnswer: {},
      errors: {
        question: [],
        anonymous: false,
        finished: false,
      }
    }

    this.finishedChange = this.finishedChange.bind(this);
    this.anonymousChange = this.anonymousChange.bind(this);
    this.commentChange = this.commentChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.validationQuestions = this.validationQuestions.bind(this);
    this.validationFields = this.validationFields.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.surveyFormAnswer).length > 0){
      this.setState({
        surveyFormAnswer: nextProps.surveyFormAnswer,
      });
    }

    if (nextProps.contentBlocks.length > 0){
      this.setState({
        errors: {
          ...this.state.errors,
          question: nextProps.contentBlocks.map(() => ({
            rating: false,
            comment: false,
          }))
        }
      });
    }
  }

  validationQuestions() {
    let errorsQuestion = JSON.parse(JSON.stringify(this.state.errors.question));

    this.state.surveyFormAnswer.answers_attributes.map((answer, index) => {
      if (this.props.contentBlocks[index].content.required_rating === "true" && this.props.contentBlocks[index].content.required_comment === "true"){
        if (answer.rating && answer.comment){
          errorsQuestion[index] = {
            rating: false,
            comment: false,
          }
        } else {
          errorsQuestion[index] = {
            rating: answer.rating ? false : true,
            comment: answer.comment ? false : true,
          }
        }
      }

      if (this.props.contentBlocks[index].content.required_rating === "true"){
        errorsQuestion[index] = {
          rating: answer.rating ? false : true,
          comment: false,
        }
      }

      if (this.props.contentBlocks[index].content.required_comment === "true"){
        errorsQuestion[index] = {
          rating: false,
          comment: answer.comment ? false : true,
        }
      }
    });

    this.setState({
      errors: {
        ...this.state.errors,
        question: errorsQuestion
      }
    });

    return errorsQuestion.filter(item => item.rating || item.comment).length ? false : true;
  }

  validationFields() {
    const errorsFields = {
      anonymous: typeof this.state.surveyFormAnswer.anonymous === 'boolean' ? false : true,
      finished: typeof this.state.surveyFormAnswer.finished === 'boolean' ? false : true,
    }

    this.setState({
      errors: {
        ...this.state.errors,
        ...errorsFields,
      }
    });

    return !Object.keys(errorsFields).filter(key => errorsFields[key]).length ? true : false;
  }

  formSubmit(event) {
    event.preventDefault();
    if (this.state.surveyFormAnswer.finished) {
      if (this.validationQuestions() && this.validationFields()){
        this.props.create(this.state.surveyFormAnswer);
      } else {
        this.props.alertError('verifique os campos obrigatórios.');
      }
    } else {
      this.props.create(this.state.surveyFormAnswer);
    }
  }

  anonymousChange(event) {
    this.setState({
      surveyFormAnswer: {
        ...this.state.surveyFormAnswer,
        anonymous: event.target.value === "true" ? true : false,
      },
      errors: {
        ...this.state.errors,
        anonymous: false,
      }
    });
  }

  finishedChange(event) {
    this.setState({
      surveyFormAnswer: {
        ...this.state.surveyFormAnswer,
        finished: event.target.value === "true" ? true : false,
      },
      errors: {
        ...this.state.errors,
        finished: false,
      }
    });
  }


  commentChange(e, index) {
    let newAnswers = JSON.parse(JSON.stringify(this.state.surveyFormAnswer.answers_attributes));
    newAnswers[index].comment = e.target.value;

    let newErrorsQuestion = JSON.parse(JSON.stringify(this.state.errors.question));
    newErrorsQuestion[index].comment = this.props.contentBlocks[index].content.required_comment === "true" && !e.target.value ? true : false;

    this.setState({
      surveyFormAnswer: {
        ...this.state.surveyFormAnswer,
        answers_attributes: newAnswers
      },
      errors: {
        ...this.state.errors,
        question: newErrorsQuestion
      }
    });
  }

  onStarClick(nextValue, index) {
    let newAnswers = JSON.parse(JSON.stringify(this.state.surveyFormAnswer.answers_attributes));
    newAnswers[index].rating = nextValue;

    this.setState({
      surveyFormAnswer: {
        ...this.state.surveyFormAnswer,
        answers_attributes: newAnswers
      }
    });
  }

  componentDidMount() {
    this.props.load(this.props.match.params.id);
    this.props.new(this.props.match.params.id);
  }

  render() {
    const { surveyForm, contentBlocks, isLoading, surveyFormAnswer } = this.props;

    const blocks = contentBlocks
      ? getContentBlocks(contentBlocks)
      : null;

    if (Object.keys(this.state.surveyFormAnswer).length === 0) {
      return (
        <div>Carregando...</div>
      )
    };

    return (
      <Page>
        <div className="container">
          <div className={styles.header + " row"}>
            <div className="col-12">
              <h1 className="title">{surveyForm.title}</h1>
            </div>
            <div className="col-12">
              <h2>{surveyForm.description}</h2>
            </div>
          </div>
          <form onSubmit={this.formSubmit}>
            <div className="row">
              {
                // <div className={"col-12 " + styles.anonimo}>
                // <h3 className="mx-auto">
                // Deseja responder em modo Anônimo?
                // </h3>
                // <input id="anonymousTrue"  className={styles.anonymous} name="anonymous" type="radio" value={true} defaultChecked={this.state.surveyFormAnswer.anonymous ? true : false} onChange={this.anonymousChange}></input>
                // <label htmlFor="anonymousTrue">Sim</label><br></br>
                // <input id="anonymousFalse" className={styles.anonymous} name="anonymous" type="radio" value={false} defaultChecked={typeof this.state.surveyFormAnswer.anonymous === 'boolean' && !this.state.surveyFormAnswer.anonymous ? true : false} onChange={this.anonymousChange}></input>
                // <label htmlFor="anonymousFalse">Não</label><br></br>
                //
                // {this.state.errors.anonymous && (
                // <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                // )}
                // </div>
              }

              {contentBlocks.map((contentBlock, index) => {
                let contentBlockText = blocks[index].props.text
                return (
                  <div key={index} className={"col-12 " + styles.block}>
                    <br></br>
                    <br></br>

                    <h2>Questão {contentBlock.content.sequence}</h2>
                    <div className="container">
                      <div className={styles.blockDescription} dangerouslySetInnerHTML={{ __html: contentBlockText }} />
                    </div>
                    {contentBlock.content.have_rating === "true" && (
                      <div>
                        <h3>Avaliação:</h3>
                        {Object.keys(this.props.surveyFormAnswer).length > 0 && (
                          <div className={styles.globalSlider}>
                            <Slider
                              value={this.state.surveyFormAnswer.answers_attributes[index].rating}
                              aria-labelledby="discrete-slider"
                              valueLabelDisplay="auto"
                              step={1}
                              valueLabelDisplay="on"
                              marks
                              min={0}
                              max={10}
                              onChangeCommitted={(event, value) => this.onStarClick(value, index)}
                            />
                          </div>
                        )}

                        {this.state.errors.question.length > 0 && this.state.errors.question[index].rating && (
                          <div><p className={styles.errorMessage}>Esta avaliação é obrigatória.</p></div>
                        )}
                      </div>
                    )}

                    {contentBlock.content.have_comment === "true" && (
                      <div className={styles.globalComment}>
                        <h3>Comentário:</h3>

                        <textarea onChange={(e) => this.commentChange(e, index)} defaultValue={this.state.surveyFormAnswer.answers_attributes[index].comment}></textarea>
                      </div>
                    )}

                    {this.state.errors.question.length > 0 && this.state.errors.question[index].comment && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                    <div>
                      <br/>
                      <br/>
                      <hr/>
                      <br/>
                      <br/>
                    </div>
                  </div>
                );
              })}

              <div className={"col-12 " + styles.finish}>
                <h3 className="mx-auto">
                  Deseja finalizar esse formulário?
                </h3>
                <br></br>
                <br></br>
                <p>
                  <b>
                    Selecione "Não" caso deseje continuar a responder mais tarde. Suas respostas ficarão salvas.
                  </b>
                </p>
                <p>
                  <b>
                    Selecione "Sim" caso já tenha terminado sua resposta. Seu formulário será enviado.
                  </b>
                </p>

                <input id="finishedTrue" className={styles.finished} name="finished" type="radio" value={true} defaultChecked={this.state.surveyFormAnswer.finished ? true : false} onChange={this.finishedChange}></input>
                <label htmlFor="finishedTrue">Sim</label><br></br>
                <input id="finishedFalse" className={styles.finished} name="finished" type="radio" value={false} defaultChecked={typeof this.state.surveyFormAnswer.finished === 'boolean' && !this.state.surveyFormAnswer.finished ? true : false} onChange={this.finishedChange}></input>
                <label htmlFor="finishedFalse">Não</label><br></br>

                {this.state.errors.finished && (
                  <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                )}
              </div>


              <div className='col-12 d-flex justify-content-center'>
                <button type="submit" className="submitForm btn  btn-large submit">Salvar Resposta</button>
              </div>
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
      </Page>
    );
  }
}

SurveyForm.propTypes = {
  surveyForm: PropTypes.object,
  contentBlocks: PropTypes.array,
  surveyFormAnswer: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  new: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  alertError: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    surveyForm: state.SurveyFormReducer.surveyForm,
    contentBlocks: state.SurveyFormReducer.contentBlocks,
    surveyFormAnswer: state.TeacherSurveyFormsReducer.surveyFormAnswer,
    isLoading: state.SurveyFormReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: id => {
      dispatch(SurveyFormActions.load(id));
    },
    new: surveyFormId => {
      dispatch(TeacherSurveyFormsActions.new(surveyFormId));
    },
    create: surveyFormAnswer => {
      dispatch(TeacherSurveyFormsActions.create(surveyFormAnswer));
    },
    alertError: error => {
      dispatch(TeacherSurveyFormsActions.alertError(error));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyForm);
