import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';
import iconMinus from '../../images/iconMinus.png';
import iconPlus from '../../images/iconPlus.png';
import styles from './GridItem.css';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { isExpanded: false };
  }

  onClickedExpand() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const data = this.props.data;
    const icon = this.state.isExpanded ? iconMinus : iconPlus;
    const alt = this.state.isExpanded ? "Esconder" : "Expandir";
    const preview = !this.state.isExpanded ? null : (
      <Preview
        data={data}
        height={this.ref.current.clientHeight} />
    );

    return (
      <li className="col-sm-12 col-md-6 col-lg-3">
        <article className={styles.wrapper} ref={this.ref}>
          <div className={styles.image}>
            <img src="http://via.placeholder.com/256x160" alt="" />
          </div>
          <div className={styles.component}>{data.component.name}</div>
          <div className={styles.title}>{data.name}</div>
          <div className={styles.infos}>
            <div className={styles.info}>
              <div className={styles.number}>{data.classes} aulas</div>
              <div className={styles.label}>Tempo estimado</div>
            </div>
            <div className={styles.info}>
              <div className={styles.number}>{data.activities.length}</div>
              <div className={styles.label}>Atividades</div>
            </div>
          </div>
          <div className={styles.expand} onClick={this.onClickedExpand.bind(this)}>
            <img src={icon} alt={alt} />
          </div>
        </article>
        {preview}
      </li>
    );
  }
}

GridItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GridItem;
