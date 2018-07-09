import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../../constants';
import Preview from './Preview';
import iconMinus from '../../images/iconMinus.svg';
import iconPlus from '../../images/iconPlus.svg';
import styles from './GridItemBase.css';

class GridItemBase extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  onClickedExpand() {
    this.props.togglePreview(this.props.data.id);
  }

  render() {
    const data = this.props.data;
    const width = this.ref.current ? this.ref.current.clientWidth : 0;
    const height = this.ref.current ? this.ref.current.clientHeight : 0;
    const icon = data.isExpanded ? iconMinus : iconPlus;
    const alt = data.isExpanded ? "Esconder" : "Expandir";
    const isLeftAligned = (this.props.index + 1) % 4 === 0;
    const style = { color: data.main_curricular_component.color };

    const thumbnail = data.image_attributes ? (
      <div className={styles.image}>
        <img
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.thumb.url}, ${API_URL}${data.image_attributes.extra_thumb.url} 2x`}
          alt="" />
      </div>
    ) : (
      <div className={styles.initials}>
        {data.main_curricular_component.name.split(' ').map(s => s.charAt(0)).join('')}
      </div>
    );

    const word1 = data.estimated_time > 1 ? 'aulas' : 'aula';
    const duration = `${data.estimated_time} ${word1}`;

    const word2 = data.number_of_activities > 1 ? 'Atividades' : 'Atividade';

    return (
      <li className="col-sm-12 col-md-6 col-lg-3">
        <article className={styles.wrapper} ref={this.ref}>
          {thumbnail}
          <div className={styles.component}>
            <em style={style}>{data.main_curricular_component.name}</em>
            <span>{data.year} ano</span>
          </div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.infos}>
            <div className={styles.info}>
              <div className={styles.number}>{duration}</div>
              <div className={styles.label}>Tempo estimado</div>
            </div>
            <div className={styles.info}>
              <div className={styles.number}>{data.number_of_activities}</div>
              <div className={styles.label}>{word2}</div>
            </div>
          </div>
          <div className={styles.expand} onClick={this.onClickedExpand.bind(this)}>
            <img src={icon} alt={alt} />
          </div>
        </article>
        <Preview
          data={data}
          width={width}
          height={height}
          isLeftAligned={isLeftAligned} />
      </li>
    );
  }
}

GridItemBase.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  togglePreview: PropTypes.func.isRequired,
};

export default GridItemBase;
