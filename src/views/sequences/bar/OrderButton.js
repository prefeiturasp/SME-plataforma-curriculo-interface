import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { connect } from 'react-redux';
import FiltersActions from 'actions/FiltersActions';
import styles from './OrderButton.scss';

class OrderButton extends Component {
  state = { anchor: null };

  onClicked = e => {
    this.setState({ anchor: e.currentTarget });
  };

  onClickedOption = value => {
    return () => {
      this.props.setOrder(value);
      this.setState({ anchor: null });
    };
  };

  onClosePopover = () => {
    this.setState({ anchor: null });
  };

  render() {
    const options = [
      {
        slug: 'best',
        label: 'Melhores resultados',
      },
      {
        slug: 'alphabetic',
        label: 'A-Z',
      },
      {
        slug: 'newer',
        label: 'Mais recentes',
      },
      {
        slug: 'older',
        label: 'Mais antigas',
      },
    ];

    const optionButtons = options.map((option, i) => {
      return (
        <button
          key={i}
          className={styles.option}
          onClick={this.onClickedOption(option)}
        >
          {option.label}
        </button>
      );
    });

    const { order } = this.props;
    const { anchor } = this.state;
    const hasPopover = !!anchor;
    const classes = hasPopover
      ? [styles.button, styles.isFocused]
      : [styles.button];
    const value = order ? order.label : options[0].label;

    return (
      <div>
        <button className={classes.join(' ')} onClick={this.onClicked}>
          <span className={styles.label}>Ordenar por</span>
          <span>{value}</span>
        </button>
        <Popover
          anchorEl={anchor}
          onClose={this.onClosePopover}
          open={hasPopover}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div className={styles.popover}>{optionButtons}</div>
        </Popover>
      </div>
    );
  }
}

OrderButton.propTypes = {
  order: PropTypes.string,
  setOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    order: state.FiltersReducer.order,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOrder: value => {
      dispatch(FiltersActions.setOrder(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton);
