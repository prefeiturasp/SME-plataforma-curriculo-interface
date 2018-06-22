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
    const params = this.props.match.params;
    this.props.load(params.slug1, params.slug2);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResized.bind(this));
  }

  render() {
    const filters = [
      <GenericItem key={0} data={{name: '3o ano'}} />,
      <GenericItem key={1} data={{name: 'Ciências Naturais'}} />,
    ];

    const materials = [];
    // this.props.data.materials.map((item, i) => {
    //   return (
    //     <ListItem key={i} string={item} />
    //   );
    // });

    const linkPrev = `/atividade/${this.props.data.prevId}`;
    const linkNext = `/atividade/${this.props.data.nextId}`;
    const link = `/sequencia/${this.props.data.sequence.id}`;

    const iconsItems = this.props.data.activity_types.map((item, i) => {
      return (
        <li>
          <img src={item.icon} alt={item.name} />
          <div>{item.name}</div>
        </li>
      );
    });
    const icons = (
      <ul className={styles.icons}>
        {iconsItems}
      </ul>
    );
    const icons1 = this.state.totalWidth < 768 ? null : icons;
    const icons2 = this.state.totalWidth < 768 ? icons : null;

    const cover = this.props.data.image ? (
      <div className="container">
        <img
          className={styles.cover}
          src={this.props.data.image}
          alt={this.props.data.title} />
      </div>
    ) : null;

    // const image = this.props.data.image ? (
    //   <img
    //     className={styles.image}
    //     src={this.props.data.image}
    //     alt={this.props.data.title} />
    // ) : null;

    return (
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h3>Atividade 1</h3>
            <h1>{this.props.data.title}</h1>
            <h2>Sequência didática: {this.props.data.sequence.name}</h2>
            <ul>
              {filters}
            </ul>
          </div>
          <div className={styles.infos}>
            <button className="btn" onClick={this.onClickedPrint.bind(this)}>
              <img src={iconPrint} alt="Imprimir" />
              Imprimir
            </button>
            {icons1}
          </div>
        </div>
        {cover}
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
          <div className="row">
            <div className={styles.description}>
              {this.props.data.description}
            </div>
          </div>
        </div>
        <hr />
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
        <div className={styles.footer}>
          <NavLink className={styles.back} to={link}>
            Voltar para a sequência
          </NavLink>
        </div>
      </section>
    );
  }
}

Activity.propTypes = {
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
    load: (slug1, slug2) => {
      dispatch(ActivityActions.load(slug1, slug2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
