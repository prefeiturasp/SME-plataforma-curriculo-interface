import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { connect } from 'react-redux';
import SegmentButton from 'views/sequences/objects/SegmentButton';
import chevronDown from 'images/chevrons/down.svg';
import chevronUp from 'images/chevrons/up.svg';
import styles from './Field.scss';

class SegmentField extends Component {
  ref = React.createRef();
  state = { anchor: null };

  onClicked = e => {
    const anchor = !!this.state.anchor ? null : e.currentTarget;
    this.setState({ anchor });
  };

  onClosePopover = () => {
    this.setState({ anchor: null });
  };

  render() {
    const segments = this.props.filters.filter(item => item.type === 'segments');

    const segmentButtons = segments.map((item, i) => {
      return <SegmentButton key={i} data={item} />;
    });

    const selectedSegments = segments.filter(item => item.isActive);
    const numSelectedSegments = selectedSegments.length;

    let label = 'Todos os segmentos';
    if (numSelectedSegments > 0) {
      const segmentsLabels = selectedSegments.map(segment => segment.name);
      label = segmentsLabels;
    }

    const { anchor } = this.state;
    const hasPopover = !!anchor;
    const classes = hasPopover
      ? [styles.field, styles.isFocused]
      : [styles.field];
    const chevron = hasPopover ? chevronUp : chevronDown;
    const alt = hasPopover ? 'Fechar' : 'Abrir';
    const width = this.ref.current ? this.ref.current.offsetWidth : 0;

    return (
      <div className={styles.wrapper}>
        <div
          className={classes.join(' ')}
          onClick={this.onClicked}
          ref={this.ref}
        >
          <span>{label}</span>
          <img src={chevron} alt={alt} />
        </div>
        <Popover
          anchorEl={anchor}
          onClose={this.onClosePopover}
          open={hasPopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div className={styles.popover} style={{ width }}>
            <div>{segmentButtons}</div>
            <button className={styles.btnClose} onClick={this.onClosePopover}>
              Fechar
            </button>
          </div>
        </Popover>
      </div>
    );
  }
}

SegmentField.propTypes = {
  filters: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    filters: state.FiltersReducer.filters,
  };
};

export default connect(mapStateToProps)(SegmentField);
