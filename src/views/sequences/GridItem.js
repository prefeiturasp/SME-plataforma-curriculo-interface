import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';
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
    const icon = !this.state.isExpanded ? <i className="fa fa-plus" title="Abrir"></i> : <i className="fa fa-minus" title="Fechar"></i>;
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
          <div className={styles.component}>{data.component}</div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.infos}>
            <div className={styles.info}>
              <div className={styles.number}>{data.classes} aulas</div>
              <div className={styles.label}>Tempo estimado</div>
            </div>
            <div className={styles.info}>
              <div className={styles.number}>{data.activities}</div>
              <div className={styles.label}>Atividades</div>
            </div>
          </div>
          <div className={styles.expand} onClick={this.onClickedExpand.bind(this)}>
            {icon}
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
