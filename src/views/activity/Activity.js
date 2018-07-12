import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuillDeltaToHtmlConverter from 'quill-delta-to-html';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import ActivityActions from '../../actions/ActivityActions';
import BodyActions from '../../actions/BodyActions';
import GenericItem from '../common/GenericItem';
import getActivityTypeIcon from './getActivityTypeIcon';
import getWindowWidth from '../util/getWindowWidth';
import iconArrowLeft from '../../images/iconArrowLeft.svg';
import iconArrowRight from '../../images/iconArrowRight.svg';
import iconPrint from '../../images/iconPrint.svg';
import styles from './Activity.css';

class Activity extends Component {
  onClickedPrint() {
    
  }

  onResized() {
    const totalWidth = getWindowWidth();
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

  componentDidUpdate(prevProps) {
    const params = this.props.match.params;
    const prevParams = prevProps.match.params;
    if (params.slug2 !== prevParams.slug2) {
      this.props.load(params.slug1, params.slug2);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResized.bind(this));
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const data = this.props.data;
    const sequence = data.activity_sequence;

    const filters = [
      <GenericItem key={0} data={{name: sequence.year}} />,
      <GenericItem key={1} data={sequence.main_curricular_component} />,
    ];

    const iconsItems = data.activity_types.map((item, i) => {
      const icon = getActivityTypeIcon(item.name);
      return (
        <li key={i}>
          <img src={icon} alt={item.name} />
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

    const cover = data.image_attributes ? (
      <div className="container">
        <img
          className={styles.cover}
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.large.url}, ${API_URL}${data.image_attributes.extra_large.url} 2x`}
          alt={data.title} />
      </div>
    ) : null;

    const ops = JSON.parse(data.content).ops;
    const converter = new QuillDeltaToHtmlConverter(ops);

    converter.beforeRender(function(groupType, data) {
      if (data.ops) {
        data.ops.forEach(item  => {
          if (item.insert.type === 'image') {
            item.insert.value = API_URL + item.insert.value;
          }
        })
      }
    });

    converter.renderCustomWith(function(customOp, contextOp) {
      if (customOp.insert.type === 'divider') {
        return '<hr />';
      } else {
        return null;
      }
    });

    const content = converter.convert();
    
    const linkPrev = `/sequencia/${sequence.slug}/atividade/${data.last_activity}`;
    const linkNext = `/sequencia/${sequence.slug}/atividade/${data.next_activity}`;
    const link = `/sequencia/${sequence.slug}`;

    const arrowPrev = data.last_activity ? (
      <NavLink className={styles.prev} to={linkPrev}>
        <img src={iconArrowLeft} alt="Seta" />
        Atividade {data.sequence - 1}
      </NavLink>
    ) : <span />;

    const arrowNext = data.next_activity ? (
      <NavLink className={styles.next} to={linkNext}>
        Atividade {data.sequence + 1}
        <img src={iconArrowRight} alt="Seta" />
      </NavLink>
    ) : null;

    return (
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h3>Atividade {data.sequence}</h3>
            <h1>{data.title}</h1>
            <h2>Sequência didática: {sequence.title}</h2>
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
            <div className={styles.description} dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>
        <hr />
        <div className={styles.arrows}>
          {arrowPrev}
          {arrowNext}
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
      dispatch(BodyActions.showLoading());
      dispatch(ActivityActions.load(slug1, slug2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
