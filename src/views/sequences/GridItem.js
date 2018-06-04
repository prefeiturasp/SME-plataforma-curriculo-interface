import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SequencesActions from '../../actions/SequencesActions.js'
import Preview from './Preview';
import iconMinus from '../../images/iconMinus.svg';
import iconPlus from '../../images/iconPlus.svg';
import styles from './GridItem.css';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  onClickedExpand() {
    this.props.togglePreview(this.props.data.id);
  }

  render() {
    const data = this.props.data;
    const height = this.ref.current ? this.ref.current.clientHeight : 0;
    const icon = this.props.data.isExpanded ? iconMinus : iconPlus;
    const alt = this.props.data.isExpanded ? "Esconder" : "Expandir";
    const isLeftAligned = (this.props.index + 1) % 4 === 0;

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
        <Preview
          data={data}
          height={height}
          isLeftAligned={isLeftAligned} />
      </li>
    );
  }
}

GridItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  togglePreview: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    togglePreview: (id) => {
      dispatch(SequencesActions.togglePreview(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(GridItem);
