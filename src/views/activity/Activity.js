import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ActivityActions from '../../actions/ActivityActions';
import GenericItem from '../common/GenericItem';
import ListItem from '../common/ListItem';
import iconArrowLeft from'../../images/iconArrowLeft.svg';
import iconArrowRight from'../../images/iconArrowRight.svg';
import iconGroup from'../../images/iconGroup.svg';
import iconOutdoors from'../../images/iconOutdoors.svg';
import iconPrint from '../../images/iconPrint.svg';
import styles from'./Activity.css';

class Activity extends Component {
  onClickedPrint() {
    window.print();
  }

  onResized() {
    const totalWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    this.setState({ totalWidth });
  }

  componentWillMount() {
    this.onResized();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResized.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResized.bind(this));
  }

  render() {
    const filters = [
      <GenericItem key={0} data={this.props.data.sequence.year} />,
      <GenericItem key={1} data={this.props.data.sequence.curricularComponent} />,
    ];

    const materials = this.props.data.materials.map((item, i) => {
      return (
        <ListItem key={i} string={item} />
      );
    });

    const linkPrev = `/atividade/${this.props.data.prevId}`;
    const linkNext = `/atividade/${this.props.data.nextId}`;
    const link = `/sequencia/${this.props.data.sequence.id}`;

    const icons = (
      <ul className={styles.icons}>
        <li>
          <img src={iconGroup} alt="Grupo" />
          <div>Grupo</div>
        </li>
        <li>
          <img src={iconOutdoors} alt="Ambiente Externo" />
          <div>Ambiente Externo</div>
        </li>
      </ul>
    );
    const icons1 = this.state.totalWidth < 768 ? null : icons;
    const icons2 = this.state.totalWidth < 768 ? icons : null;

    const printButton = this.props.isSimplified ? null : (
        <button className="btn" onClick={this.onClickedPrint.bind(this)}>
          <img src={iconPrint} alt="Imprimir" />
          Imprimir
        </button>
      );
    
    const arrows = this.props.isSimplified ? null : (
        <div className={styles.arrows}>
          <NavLink className={styles.prev} to={linkPrev}>
            <img src={iconArrowLeft} alt="Seta" />
            Atividade 1
          </NavLink>
          <NavLink className={styles.next} to={linkNext}>
            Atividade 2
            <img src={iconArrowRight} alt="Seta" />
          </NavLink>
        </div>
      );

    const footer = this.props.isSimplified ? null : (
        <div className={styles.footer}>
          <NavLink className={styles.back} to={link}>
            Voltar para a sequência
          </NavLink>
        </div>
      );

    return (
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h3>Atividade 1</h3>
            <h1>{this.props.data.name}</h1>
            <h2>Sequência didática: {this.props.data.sequence.name}</h2>
            <ul>
              {filters}
            </ul>
          </div>
          <div className={styles.infos}>
            {printButton}
            {icons1}
          </div>
        </div>
        <div className="container">
          <img
            className={styles.image}
            src={this.props.data.image1}
            alt={this.props.data.name} />
        </div>
        {icons2}
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h5>Materiais:</h5>
              <ul>
                {materials}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h4>Orientações</h4>
          <img
            className={styles.image}
            src={this.props.data.image2}
            alt={this.props.data.name} />
          <div className="row">
            <div className={styles.description}>
              {this.props.data.description}
            </div>
          </div>
        </div>
        <hr />
        {arrows}
        {footer}
      </section>
    );
  }
}

Activity.propTypes = {
  isSimplified: PropTypes.bool,
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.ActivityReducer.currActivity,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(ActivityActions.load());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
