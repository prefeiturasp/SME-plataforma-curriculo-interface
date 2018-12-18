import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LearningObjectiveItem from './LearningObjectiveItem';
import chevronDown from 'images/chevrons/down.svg';
import chevronRight from 'images/chevrons/right.svg';
import chevronUp from 'images/chevrons/up.svg';
import styles from './ExpandableLearningObjectiveItem.scss';

class ExpandableLearningObjectiveItem extends Component {
  ref = React.createRef();
  state = { isExpanded: this.props.isExpanded };

  onClickedToggle = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  componentDidMount() {
    this.setState({ timestamp: Date.now() });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevState.isExpanded && this.state.isExpanded) {
      this.setState({ timestamp: Date.now() });
    }
  }

  render() {
    const classes = this.state.isExpanded
      ? [styles.wrapper, styles.isExpanded]
      : [styles.wrapper];
    const chevron = this.state.isExpanded ? chevronUp : chevronDown;
    const height1 = this.ref.current ? this.ref.current.scrollHeight : 20;
    const height2 = this.state.isExpanded ? height1 : 20;
    const style = { height: `${height2}px` };

    if (this.props.hasLink) {
      classes.push(styles.hasBorder);
    }

    const link = this.props.hasLink ? (
      <NavLink
        to={`/sequencias/objetivos-de-aprendizagem/${this.props.data.id}`}
        className={styles.related}
      >
        Ver Sequências de Atividades Relacionadas
        <img src={chevronRight} alt="Seta" />
      </NavLink>
    ) : null;

    return (
      <li className={classes.join(' ')} onClick={this.onClickedToggle}>
        <LearningObjectiveItem data={this.props.data} />
        <div className={styles.description} style={style} ref={this.ref}>
          {this.props.data.description}
          {link}
        </div>
        <button className={styles.toggler}>
          <img src={chevron} alt="Seta" />
        </button>
      </li>
    );
  }
}

ExpandableLearningObjectiveItem.propTypes = {
  data: PropTypes.object.isRequired,
  hasLink: PropTypes.bool,
};

export default ExpandableLearningObjectiveItem;
