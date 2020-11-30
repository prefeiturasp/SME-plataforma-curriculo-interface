import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from 'index';
import Cover from './Cover';
import Title from './Title';
import Page from 'components/layout/Page';
import ProjectActions from 'actions/ProjectActions';
import ProjectChars from './chars/ProjectChars';
import ReadMore from 'components/ReadMore';
import Link from '@material-ui/core/Link';
import styles from './Project.scss';

class Project extends Component {
  state = {
    isCharsExpanded: false,
    isPrint: false,
  };

  setRedirect = (href) => {
    let validateUrl = href.search(/http/i);
    if (validateUrl !== -1) {
      window.location.href = href;
    } else {
      window.location.href = `https://${href}`;
    }
  }

  componentDidMount() {
    this.props.load(this.props.match.params.slug);

    if (this.props.location.pathname.match(/imprimir/)) {
      this.setState({
        ...this.state,
        isPrint: true
      });
    }
  }

  render() {
    const { data, isSearching } = this.props;
    const description = data.description;
    const { isPrint } = this.state;

    return (
      <Page>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <Cover
                project={data}
              />
              <Title
                text="Projeto TCA"
                project={data}
              />
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
              <h3>Responsabilidades:</h3>
              <br></br>
              <div className="container">
                <p>{data.regional_education_board}</p>
                <p>Escola - {data.school}</p>
                <p>Ano - {data.development_year}</p>
                <p>Turma - {data.development_class}</p>
                <p>Professor(a) - {data.teacher_name}</p>
                <p>Alunos - {data.owners}</p>
              </div>
              <h3>Links relacionados:</h3>
              <div className="container">
                {data.links && (data.links.map((link, idx) => {
                  return (
                    <p key={idx}>
                      <a className={styles.links} onClick={()=>this.setRedirect(link.link)}>
                        {link.link}
                      </a>
                    </p>
                  );
                }))}
              </div>
            </div>
            <br></br>
            <div className={styles.chars}>
              <ProjectChars data={data} isPrint={isPrint} />
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

Project.propTypes = {
  data: PropTypes.object,
  isSearching: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ProjectReducer.currItem,
    isSearching: state.ProjectReducer.isSearching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(ProjectActions.load(slug));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
