import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';
import styles from './OrderButton.scss';

class OrderButton extends Component {
  state = { order: 'default' };

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
    const { order } = this.state;

    const { options } = this.props;
    const optionButtons = options.map((option, i) => {
      return (
        <MenuItem key={i} value={option.slug}>
          {option.label}
        </MenuItem>
      );
    });

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
  options: PropTypes.array.isRequired,
  order: PropTypes.string,
  setOrder: PropTypes.func.isRequired,
};

OrderButton.defaultProps = {
  options: [
    {
      slug: 'default',
      label: 'Melhores resultados',
    },
    {
      slug: 'alphabetic',
      label: 'A-Z',
    },
    {
      slug: 'newest',
      label: 'Mais recentes',
    },
    {
      slug: 'oldest',
      label: 'Mais antigas',
    },
  ],
};

const mapStateToProps = state => {
  return {
    order: state.ProjectFiltersReducer.order,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOrder: value => {
      dispatch(ProjectFiltersActions.setOrder(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton);
