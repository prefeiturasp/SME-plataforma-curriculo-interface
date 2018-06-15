import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LearningObjectiveItem from '../common/LearningObjectiveItem';
import iconChevronDown from '../../images/iconChevronDown.svg';
import iconChevronRight from '../../images/iconChevronRight.svg';
import iconChevronUp from '../../images/iconChevronUp.svg';
import styles from './ExpandableLearningObjectiveItem.css';

class ExpandableLearningObjectiveItem extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { isExpanded: props.isExpanded };
  }

  onClickedToggle() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  componentDidMount() {
    this.setState({ timestamp: Date.now() });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevState.isExpanded && this.state.isExpanded) {
      this.setState({ timestamp: Date.now() });
    }
  }

  render() {
    const classes = this.state.isExpanded ? [styles.wrapper, styles.isExpanded] : [styles.wrapper];
    const chevron = this.state.isExpanded ? iconChevronUp : iconChevronDown;
    const height1 = this.ref.current ? this.ref.current.scrollHeight : 20;
    const height2 = this.state.isExpanded ? height1 : 20;
    const style = { height: `${height2}px` };

    return (
      <li className={classes.join(' ')}>
        <button className={styles.toggler} onClick={this.onClickedToggle.bind(this)}>
          <LearningObjectiveItem data={this.props.data} />
          <img src={chevron} alt="Seta" />
        </button>
        <div className={styles.description} style={style} ref={this.ref}>
          {this.props.data.description}
          <NavLink to='/sequencias' className={styles.related}>
            Ver Sequências de Atividades Relacionadas
            <img src={iconChevronRight} alt="Seta" />
          </NavLink>
        </div>
      </li>
    );
  }
}

ExpandableLearningObjectiveItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExpandableLearningObjectiveItem;
