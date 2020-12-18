import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConsultationsActions from 'actions/ConsultationsActions';
import BodyActions from 'actions/BodyActions';
import ConsultationsContent from 'components/ConsultationsContent';
import Page from 'components/layout/Page';
import styles from './Consultations.scss';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

class Consultations extends Component {
  state = { windowHeight: 1000 };

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    });
    this.props.load();
  }

  render() {
    const { data, isLoading } = this.props;

    let segments = data.map(consultation => consultation.segment).filter(onlyUnique).sort()

    return (
      <Page>
        <section>
          <div className="container">
            <h1>Consultas à Rede</h1>
            <br></br>
            <p>
              As consultas publicadas nesta página serão exclusivamente para
              coletar as opiniões e pareceres dos profissionais da Rede
              Municipal de Educação de São Paulo a respeito de publicações
              institucionais e outras possíveis ações. Quando alguma consulta
              estiver vigente, aparecerá uma imagem e seu respectivo título.
            </p>
          </div>
          <hr className={styles.consultationDivider} />
          {segments.map((segment, index) => {
            return (
              <div key={index} className="container">
                <h3 className="">{segment}</h3>
                <ConsultationsContent  segment={segment} consultations={data}></ConsultationsContent>
              </div>
            );
          })}
        </section>
      </Page>
    );
  }
}

Consultations.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  totalItems: PropTypes.number,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ConsultationsReducer.items,
    isLoading: state.ConsultationsReducer.isLoading,
    totalItems: state.ConsultationsReducer.totalItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(ConsultationsActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Consultations);
