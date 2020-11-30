import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import styles from './CreateProject.scss';
import CreateProjectActions from 'actions/CreateProjectActions';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ReactQuill from 'react-quill';
import Card from '@material-ui/core/Card';
import Home from 'views/home/Home';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import 'react-quill/dist/quill.snow.css';

class CreateProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      project: {
        teacher_id: this.props.teacherId,
        curricular_component_ids: [],
        knowledge_matrix_ids: [],
        student_protagonism_ids: [],
        segment_ids: [],
        stage_ids: [],
        year_ids: [],
        learning_objective_ids: [],
        regional_education_board_id: '',
        school_id: '',
        development_year: '',
        development_class: '',
        owners: '',
        title: '',
        summary: '',
        description: '',
        project_links_attributes: [],
      },
      errors: {
        curricularComponent: null,
        knowledgeMatrix: null,
        studentProtagonism: null,
        segment: null,
        stage: null,
        year: null,
        learningObjective: null,
        regionalEducationBoard: null,
        school_id: null,
        developmentYear: null,
        developmentClass: null,
        owner: null,
        title: null,
        summary: null,
        description: null,
      },
      permission: false,
      teacherId: '',
      curricularComponents: [],
      knowledgeMatrices: [],
      studentProtagonisms: [],
      segments: [],
      stages: [],
      years: [],
      learningObjectives: [],
      dres: [],
      schools: [],
      isLoading: true,
      theme: 'snow',
      photo: null,
      cover_image: null,
    }

    this.curricularComponentChange = this.curricularComponentChange.bind(this);
    this.knowledgeMatrixChange = this.knowledgeMatrixChange.bind(this);
    this.segmentChange = this.segmentChange.bind(this);
    this.stageChange = this.stageChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.learningObjectiveChange = this.learningObjectiveChange.bind(this);
    this.dreChange = this.dreChange.bind(this);
    this.schoolChange = this.schoolChange.bind(this);
    this.developmentYearChange = this.developmentYearChange.bind(this);
    this.developmentClassChange = this.developmentClassChange.bind(this);
    this.ownersChange = this.ownersChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.summaryChange = this.summaryChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.permissionChange = this.permissionChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validationFields = this.validationFields.bind(this);
    this.linksChange = this.linksChange.bind(this);
    this.addLink = this.addLink.bind(this);
    this.removeLink = this.removeLink.bind(this);
    this.onClickedAddPhoto = this.onClickedAddPhoto.bind(this);
  }

  curricularComponentChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        curricular_component_ids: e.target.value,
      },
      errors: {
        ...this.state.errors,
        curricularComponent: e.target.value.length ? false : true,
      },
    });
    if (this.state.project['year_ids'].length > 0 && e.target.value.length > 0) {
      this.props.getLearningObjectives(e.target.value, this.state.project['year_ids']);
    }
  }

  knowledgeMatrixChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        knowledge_matrix_ids: e.target.value,
      },
      errors: {
        ...this.state.errors,
        knowledgeMatrix: e.target.value.length ? false : true,
      },
    });
  }

  studentProtagonismChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        student_protagonism_ids: e.target.value,
      },
      errors: {
        ...this.state.errors,
        studentProtagonism: e.target.value.length ? false : true,
      },
    });
  }

  segmentChange(e) {
    let stageResult = this.props.stages.map((stage) => {
      if (e.target.value.includes(stage.segment_id) && this.state.project['stage_ids'].includes(stage.id)) {
        return stage.id
      }
    })

    let yearResult = this.props.years.map((year) => {
      if (e.target.value.includes(year.segment_id) && this.state.project['year_ids'].includes(year.id)) {
        return year.id
      }
    })

    stageResult = stageResult.filter(function (sr) {
      return sr != null;
    })

    yearResult = yearResult.filter(function (yr) {
      return yr != null;
    })
    this.setState({
      project: {
        ...this.state.project,
        segment_ids: e.target.value,
        stage_ids: stageResult,
        year_ids: yearResult,
      },
      errors: {
        ...this.state.errors,
        segment: e.target.value.length ? false : true,
        stage: stageResult.length ? false : true,
        year: yearResult.length ? false : true,
      },
    });
  }

  stageChange(e) {
    let yearResult = this.props.years.map((year) => {
      if (e.target.value.includes(year.stage_id) && this.state.project['year_ids'].includes(year.id)) {
        return year.id
      }
    })

    yearResult = yearResult.filter(function (yr) {
      return yr != null;
    })

    this.setState({
      project: {
        ...this.state.project,
        stage_ids: e.target.value,
        year_ids: yearResult,
      },
      errors: {
        ...this.state.errors,
        stage: e.target.value.length ? false : true,
        year: yearResult.length ? false : true,
      },
    });
  }

  yearChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        year_ids: e.target.value,
      },
      errors: {
        ...this.state.errors,
        year: e.target.value.length ? false : true,
      },
    });
    if (e.target.value.length > 0 && this.state.project['curricular_component_ids'].length > 0) {
      this.props.getLearningObjectives(this.state.project['curricular_component_ids'], e.target.value);
    }
  }

  learningObjectiveChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        learning_objective_ids: e.target.value,
      },
      errors: {
        ...this.state.errors,
        learningObjective: e.target.value.length ? false : true,
      },
    });
  }

  dreChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        regional_education_board_id: e.target.value,
      },
      errors: {
        ...this.state.errors,
        regionalEducationBoard: e.target.value ? false : true,
      },
    });
    this.props.getSchools(e.target.value);
  }

  schoolChange(e) {
    if (e.target.value !== "") {
      this.setState({
        project: {
          ...this.state.project,
          school_id: e.target.value,
        },
        errors: {
          ...this.state.errors,
          school_id: false,
        },
      });
    }
  }

  developmentYearChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        development_year: e.target.value,
      },
      errors: {
        ...this.state.errors,
        developmentYear: e.target.value.length ? false : true,
      },
    });
  }

  linksChange(e, idx) {
    let newLinks = this.state.project['project_links_attributes'].map((link, index) => {
      if (idx === index) {
        return e.target.value
      }else {
        return link
      }
    })
    this.setState({
      project: {
        ...this.state.project,
        project_links_attributes: newLinks,
      }
    })
  }

  addLink() {
    let newLinks = this.state.project['project_links_attributes'];
    newLinks = newLinks.concat({ link: '' });
    this.setState({
      project: {
        ...this.state.project,
        project_links_attributes: newLinks,
      }
    })
  }

  removeLink(e) {
    let newLinks = this.state.project['project_links_attributes'];
    newLinks.pop();
    this.setState({
      project: {
        ...this.state.project,
        project_links_attributes: newLinks,
      }
    })
  }

  developmentClassChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        development_class: e.target.value,
      },
      errors: {
        ...this.state.errors,
        developmentClass: e.target.value.length ? false : true,
      },
    });
  }

  ownersChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        owners: e.target.value,
      },
      errors: {
        ...this.state.errors,
        owner: e.target.value.length ? false : true,
      },
    });
  }

  titleChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        title: e.target.value,
      },
      errors: {
        ...this.state.errors,
        title: e.target.value.length ? false : true,
      },
    });
  }

  summaryChange(e) {
    this.setState({
      project: {
        ...this.state.project,
        summary: e.target.value,
      },
      errors: {
        ...this.state.errors,
        summary: e.target.value.length ? false : true,
      },
    });
  }

  descriptionChange(html) {
    this.setState({
      project: {
        ...this.state.project,
        description: html,
      },
      errors: {
        ...this.state.errors,
        description: html.length ? false : true,
      },
    });
  }

  permissionChange(e) {
    this.setState({
      ...this.state,
      permission: this.state.permission === false ? true : false,
    });
  }

  validationFields() {
    let result = true;
    let fieldsWithError = {}
    for (var field in this.state.errors) {
      fieldsWithError[`${field}`] = false;
      if (this.state.errors[`${field}`] == true || this.state.errors[`${field}`] == null ) {
        fieldsWithError[`${field}`] = true;
        result = false
      }
    }
    this.setState({
      errors: fieldsWithError,
    })
    if (result) {
      return true
    } else {
      alert("Preencha todos os campos obrigatórios.");
      return false
    }
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.permission) {
      if (this.validationFields()) {
        let form_data = new FormData();
        for(var key in this.state.project) {
          form_data.append(`project[${key}]`, this.state.project[key]);
        }
        form_data.append('project[cover_image]', this.state.cover_image, this.state.cover_image.name);
        this.props.create(form_data);
      }
    } else {
      alert("É necessário autorizar o uso de imagem antes de enviar o projeto.");
    }
  }

  onClickedAddPhoto(e) {
    if (e.target.value === "") {
      this.setState({
        cover_image:null,
        photo: null,
      })
    }else{
      const files = Array.from(e.target.files);
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          cover_image: file,
          photo: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  componentDidMount() {
    this.props.load();
  }


  render() {
    const { curricularComponents, knowledgeMatrices, studentProtagonisms, segments, stages, years, learningObjectives, dres, schools, isLoading } = this.props;
    const modules = {
      toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        matchVisual: false,
      }
    }

    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]

    const hasImage = this.state.photo !== null;

    const content = (
        <div className="container">
          <div>
            <h1>Novo Projeto TCA</h1>
            <p className={styles.paragraph}>
              Bem-vindo à página para cadastro dos Trabalhos Colaborativos
              Autorais (TCA). Nesse ambiente virtual, professores/orientadores
              dos projetos nas Unidades Escolares irão cadastrar o
              desenvolvimento dos projetos, imagens, vídeos e demais materiais
              produzidos ao longo do processo.
            </p>
            <p className={styles.paragraph}>
              É esperado que essa página se torne um portfólio dos TCAs
              desenvolvidos pela rede e que seja uma referência de
              possibilidades de projetos para essa e outras comunidades.
            </p>
          <br></br>
          <Card>
            <CardContent>
              <form onSubmit={this.submitForm}>
                { curricularComponents && (
                  <div className={`${styles.content} row`}>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <InputLabel id="demo-simple-select-filled-label">Selecione os Componentes Curriculares</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        multiple
                        value={this.state.project['curricular_component_ids']}
                        onChange={(e) => this.curricularComponentChange(e)}
                      >
                        { curricularComponents.map((cc, index)=>{
                          return (
                            <MenuItem
                              key={index}
                              value={cc.id}
                            >
                              {cc.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {this.state.errors['curricularComponent'] != null && this.state.errors['curricularComponent'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                    <div className={`${styles.chips} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      {this.state.project['curricular_component_ids'].map((id, index) => {
                        let selectedItem = curricularComponents.find(element => element.id === id);
                        if (selectedItem) {
                          return (
                            <Chip key={index} label={selectedItem.name} style={{backgroundColor: selectedItem.color}} className={styles.chip} />
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
                { knowledgeMatrices && (
                  <div className={`${styles.content} row`}>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <InputLabel id="demo-simple-select-filled-label">Selecione as Matriz de Saberes</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        multiple
                        value={this.state.project['knowledge_matrix_ids']}
                        onChange={(e) => this.knowledgeMatrixChange(e)}
                      >
                        { knowledgeMatrices.map((knowledge_matrix, index)=>{
                          return (
                            <MenuItem
                              key={index}
                              value={knowledge_matrix.id}
                            >
                              {knowledge_matrix.title}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {this.state.errors['knowledgeMatrix'] != null && this.state.errors['knowledgeMatrix'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                    <div className={`${styles.chips} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      {this.state.project['knowledge_matrix_ids'].map((id, index) => {
                        let selectedItem = knowledgeMatrices.find(element => element.id === id);
                        if (selectedItem) {
                          return (
                            <Chip key={index} label={selectedItem.title} style={{backgroundColor: '#E04758'}} className={styles.chip} />
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
                { studentProtagonisms && (
                  <div className={`${styles.content} row`}>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <InputLabel id="demo-simple-select-filled-label">Selecione as opções do Protagonismo Estudantil</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        multiple
                        value={this.state.project['student_protagonism_ids']}
                        onChange={(e) => this.studentProtagonismChange(e)}
                      >
                        { studentProtagonisms.map((studentProtagonism, index)=>{
                          return (
                            <MenuItem
                              key={index}
                              value={studentProtagonism.id}
                            >
                              {studentProtagonism.title}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {this.state.errors['studentProtagonism'] != null && this.state.errors['studentProtagonism'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                    <div className={`${styles.chips} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      {this.state.project['student_protagonism_ids'].map((id, index) => {
                        let selectedItem = studentProtagonisms.find(element => element.id === id);
                        if (selectedItem) {
                          return (
                            <Chip key={index} label={selectedItem.title} style={{backgroundColor: '#1976D2'}} className={styles.chip} />
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
                { segments && (
                  <div className={`${styles.content} row`}>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <InputLabel id="demo-simple-select-filled-label">Selecione os Segmentos</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        multiple
                        value={this.state.project['segment_ids']}
                        onChange={(e) => this.segmentChange(e)}
                      >
                        { segments.map((segment, index)=>{
                          if (segment.name !== 'Ensino Médio') {
                            return (
                              <MenuItem
                                key={index}
                                value={segment.id}
                              >
                                {segment.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </Select>
                      {this.state.errors['segment'] != null && this.state.errors['curricularComponent'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                    <div className={`${styles.chips} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      {this.state.project['segment_ids'].map((id, index) => {
                        let selectedItem = segments.find(element => element.id === id);
                        if (selectedItem) {
                          return (
                            <Chip key={index} label={selectedItem.name} style={{backgroundColor: selectedItem.color}} className={styles.chip} />
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
                { this.state.project['segment_ids'].length > 0 && (
                  <div className={`${styles.content} row`}>
                    { this.state.project['segment_ids'].map((id, idx) => {
                        if (stages.find(stage => stage.segment_id === id)) {
                          return (
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" key={idx}>
                              <InputLabel id="demo-simple-select-filled-label">
                                Selecione as etapas do {segments.find(segment => segment.id === id).name}
                              </InputLabel>
                              { this.state.project['stage_ids'].map((stage_id, indx) => {
                                let selectedItem = stages.find(element => element.id === stage_id);
                                if (selectedItem && selectedItem.segment_id === id) {
                                  return (
                                    <Chip key={indx} label={selectedItem.name} style={{backgroundColor: segments.find(segment => segment.id === id).color}} className={styles.chip} />
                                  );
                                }
                              })}
                              <Select
                                style={{marginTop: '2%'}}
                                className={styles.selectOptions}
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                multiple
                                value={this.state.project['stage_ids']}
                                onChange={(e) => this.stageChange(e)}
                              >
                                {stages.map((stage, index) => {
                                  if ((stage.segment_id === id) && (stage.id !== 10)) {
                                    return (
                                      <MenuItem
                                        key={index}
                                        value={stage.id}
                                      >
                                        {stage.name}
                                      </MenuItem>
                                    );
                                  }
                                })}
                              </Select>
                              {this.state.errors['stage'] != null && this.state.errors['stage'] && (
                                <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                              )}
                            </div>
                          );
                        }
                      })
                    }
                  </div>
                )}
                { this.state.project['segment_ids'].length > 0 && this.state.project['stage_ids'].length > 0 && (
                  <div className={`${styles.content} row`}>
                    { this.state.project['segment_ids'].map((id, idx) => {
                        let segment_name = segments.find(segment => segment.id === id).name;
                        let segment_color = segments.find(segment => segment.id === id).color;
                        return (
                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" key={idx}>
                            <InputLabel id="demo-simple-select-filled-label">
                              Selecione os anos do { segment_name }
                            </InputLabel>
                            { this.state.project['year_ids'].map((year_id, indx) => {
                              let selectedItem = years.find(element => element.id === year_id);
                              if (selectedItem && selectedItem.segment_id === id) {
                                return (
                                  <Chip key={indx} label={selectedItem.name} style={{backgroundColor: segment_color}} className={styles.chip} />
                                );
                              }
                            })}
                            <Select
                              style={{marginTop: '2%'}}
                              className={styles.selectOptions}
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              multiple
                              value={this.state.project['year_ids']}
                              onChange={(e) => this.yearChange(e)}
                            >
                              {years.map((year, index) => {
                                if (
                                  year.segment_id === id &&
                                  this.state.project['stage_ids'].includes(year.stage_id)
                                  ) {
                                  return (
                                    <MenuItem
                                      key={index}
                                      value={year.id}
                                    >
                                      {year.name}
                                    </MenuItem>
                                  );
                                }
                              })}
                            </Select>
                            {this.state.errors['year'] != null && this.state.errors['year'] && (
                              <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                            )}
                          </div>
                        );
                      })
                    }
                  </div>
                )}
                { learningObjectives.length > 0 && (
                  <div className={`${styles.content} row`}>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <InputLabel id="demo-simple-select-filled-label">Selecione os Objetivos de Aprendizagem</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        multiple
                        value={this.state.project['learning_objective_ids']}
                        onChange={(e) => this.learningObjectiveChange(e)}
                      >
                        { learningObjectives.map((learningObjective, index)=>{
                          return (
                            <MenuItem
                              key={index}
                              value={learningObjective.id}
                              title={learningObjective.description}
                            >
                              {learningObjective.code}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {this.state.errors['learningObjective'] != null && this.state.errors['learningObjective'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                    <div className={`${styles.chips} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      {this.state.project['learning_objective_ids'].map((id, index) => {
                        let selectedItem = learningObjectives.find(element => element.id === id);
                        if (selectedItem) {
                          return (
                            <Chip key={index} label={selectedItem.code} style={{backgroundColor: segments.find(segment => segment.id === selectedItem.segment_id).color}} title={selectedItem.description} className={styles.chip} />
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
                <div className={`${styles.content} row`}>
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`} >
                    <h3>Informações Do Projeto</h3>
                  </div>
                </div>
                <div className="row">
                  { dres && (
                    <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      <InputLabel id="demo-simple-select-filled-label">Diretoria Regional de Educação</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.project['regional_education_board_id']}
                        onChange={(e) => this.dreChange(e)}
                      >
                        { dres.map((dre, index)=>{
                          return (
                            <MenuItem
                              key={index}
                              value={dre.id}
                            >
                              {dre.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {this.state.errors['regionalEducationBoard'] != null && this.state.errors['regionalEducationBoard'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                  )}
                  { schools && (
                    <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                      <InputLabel id="demo-simple-select-filled-label">Escola</InputLabel>
                      <Select
                        className={styles.selectOptions}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.project['school_id']}
                        onChange={(e) => this.schoolChange(e)}
                      >
                        { schools.length === 0 && (
                          <MenuItem
                            value={""}
                            >
                            Selecione uma Diretoria Regional de Educação
                          </MenuItem>
                        )}
                        { schools.map((school, index)=>{
                          return (
                            <MenuItem
                              key={index}
                              value={school.id}
                            >
                              {school.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      {this.state.errors['school_id'] != null && this.state.errors['school_id'] && (
                        <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                      )}
                    </div>
                  )}
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                    <InputLabel id="demo-simple-select-filled-label">Ano</InputLabel>
                    <TextField
                      style={{width: '100%'}}
                      onChange={(e) => this.developmentYearChange(e)}
                    >
                    </TextField>
                    {this.state.errors['developmentYear'] != null && this.state.errors['developmentYear'] && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                  </div>
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-6 col-xl-6`}>
                    <InputLabel id="demo-simple-select-filled-label">Turma</InputLabel>
                    <TextField
                      style={{width: '100%'}}
                      onChange={(e) => this.developmentClassChange(e)}
                    >
                    </TextField>
                    {this.state.errors['developmentClass'] != null && this.state.errors['developmentClass'] && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`}>
                    <InputLabel id="demo-simple-select-filled-label">Responsáveis</InputLabel>
                    <TextField
                      style={{width: '100%'}}
                      onChange={(e) => this.ownersChange(e)}
                    >
                    </TextField>
                    {this.state.errors['owner'] != null && this.state.errors['owner'] && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`}>
                    <InputLabel id="demo-simple-select-filled-label">Imagem de Capa do Projeto</InputLabel>
                    <br></br>
                    <br></br>
                    <input
                      id="cover_image"
                      type="file"
                      onChange={(e) => this.onClickedAddPhoto(e)}
                    />
                    { hasImage ? (
                      <div>
                        <img
                          className={styles.imagePrev}
                          src={this.state.photo}
                        />
                        <br></br>
                        <br></br>
                        <br></br>
                        <label className="btn btn-primary btn-large" htmlFor="cover_image">Alterar</label>
                      </div>
                    ) : (
                      <div>
                        <label className="btn btn-primary btn-large" htmlFor="cover_image">Clique aqui para adicionar foto</label>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`}>
                    <InputLabel id="demo-simple-select-filled-label">Título</InputLabel>
                    <TextField
                      style={{width: '100%'}}
                      onChange={(e) => this.titleChange(e)}
                    >
                    </TextField>
                    {this.state.errors['title'] != null && this.state.errors['title'] && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`}>
                    <InputLabel id="demo-simple-select-filled-label">Resumo</InputLabel>
                    <TextField
                      style={{width: '100%'}}
                      onChange={(e) => this.summaryChange(e)}
                    >
                    </TextField>
                    {this.state.errors['summary'] != null && this.state.errors['summary'] && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`}>
                    <InputLabel id="demo-simple-select-filled-label">Desenvolvimento do Projeto</InputLabel>
                    <ReactQuill
                      style={{marginTop: '5%', marginBottom: '5%'}}
                      theme={this.state.theme}
                      onChange={(html) => this.descriptionChange(html)}
                      value={this.state.project['description']}
                      modules={modules}
                      formats={formats}
                      bounds={'.app'}
                      placeholder="Escreva alguma coisa."
                    />
                    {this.state.errors['description'] != null && this.state.errors['description'] && (
                      <div><p className={styles.errorMessage}>Este campo é obrigatório.</p></div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.projectInformations} col-sm-12 col-md-12 col-lg-12 co-xl-12`}>
                    <InputLabel id="demo-simple-select-filled-label">Links</InputLabel>
                    <br></br>
                    <div className="row">
                      <div className="col-6">
                        {this.state.project['project_links_attributes'].length ? (
                          this.state.project['project_links_attributes'].map((link, idx) => {
                            return(
                              <TextField
                                key={idx}
                                style={{width: '100%'}}
                                onChange={(e) => this.linksChange(e, idx)}
                              >
                              </TextField>
                            );
                          })
                        ) : (<h5>Clique no Botão para adicionar um link.</h5>)}
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <Button
                            className={styles.addLinkButton}
                            size="medium"
                            onClick={() => this.addLink()}
                            >
                            Adicionar
                          </Button>
                        </div>
                        {this.state.project['project_links_attributes'].length > 0 && (
                          <div className="row">
                            <Button
                              className={styles.removeLinkButton}
                              size="medium"
                              onClick={(e) => this.removeLink(e)}
                              >
                              Remover
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                  <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                    <Checkbox
                      name='permission'
                      value={this.state.permission}
                      color="primary"
                      onChange={(e) => this.permissionChange(e)}
                      />
                  </div>
                  <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11'>
                    <label className={styles.paragraph}>
                      <b>
                        Eu, profissional responsável pelo cadastro desse TCA em
                        minha Unidade Escolar, declaro que todos os estudantes
                        e demais participantes do projeto que aparecem nesses
                        vídeos, áudios e imagens autorizaram que esses arquivos
                        fossem expostos e cadastrados nessa plataforma (currículo).
                      </b>
                    </label>
                  </div>
                </div>
              </form>
              <br></br>
              <br></br>
              <div>
                <Button
                  className={styles.submitButton}
                  size="large"
                  onClick={(e) => this.submitForm(e)}
                  fullWidth={true}
                >
                  Salvar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <br></br>
        <br></br>
        </div>
    );

    return (localStorage.getItem('accessToken') ? <Page>{content}</Page> : <Home></Home>);
  }
}

CreateProject.propTypes = {
  project: PropTypes.object,
  teacherId: PropTypes.string,
  curricularComponents: PropTypes.array,
  knowledgeMatrices: PropTypes.array,
  studentProtagonisms: PropTypes.array,
  segments: PropTypes.array,
  stages: PropTypes.array,
  years: PropTypes.array,
  learningObjectives: PropTypes.array,
  dres: PropTypes.array,
  isLoading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  getLearningObjectives: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    teacherId: state.CreateProjectReducer.teacherId,
    curricularComponents: state.CreateProjectReducer.curricularComponents,
    knowledgeMatrices: state.CreateProjectReducer.knowledgeMatrices,
    studentProtagonisms: state.CreateProjectReducer.studentProtagonisms,
    segments: state.CreateProjectReducer.segments,
    stages: state.CreateProjectReducer.stages,
    years: state.CreateProjectReducer.years,
    learningObjectives: state.CreateProjectReducer.learningObjectives,
    dres: state.CreateProjectReducer.dres,
    schools: state.CreateProjectReducer.schools,
    isLoading: state.CreateProjectReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(CreateProjectActions.load());
    },
    getLearningObjectives: (curricularComponentIds, yearIds) => {
      dispatch(CreateProjectActions.getLearningObjectives(curricularComponentIds, yearIds));
    },
    getSchools: (regionalEducationBoardId) => {
      dispatch(CreateProjectActions.getSchools(regionalEducationBoardId));
    },
    create: (project) => {
      dispatch(CreateProjectActions.create(project));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
