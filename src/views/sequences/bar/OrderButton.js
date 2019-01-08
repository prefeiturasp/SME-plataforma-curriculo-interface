import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import FiltersActions from 'actions/FiltersActions';
import styles from './OrderButton.scss';

class OrderButton extends Component {
  state = { order: '' };

  onChanged = e => {
    const value = e.target.value;
    this.props.setOrder(value);
  };

  componentDidUpdate(prevProps) {
    if (this.props.order !== prevProps.order) {
      this.setState({ order: this.props.order });
    }
  }

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
        <MenuItem key={i} value={option.slug}>
          {option.label}
        </MenuItem>
      );
    });

    const { order } = this.state;
    
    return (
      <div className={styles.wrapper}>
        <TextField
          select
          fullWidth={true}
          label="Ordenar por"
          value={order}
          variant="outlined"
          onChange={this.onChanged}
        >
          {optionButtons}
        </TextField>
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
