import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styles from './ModuleTable.scss';

class ModuleTable extends Component {
  state = {
    page: 0,
    rowsPerPage: 5,
  };

  getLabelDisplayedRows = ({ from, to, count }) => `${from}-${to} de ${count}`;

  onChangedPage = (e, page) => {
    this.setState({
      ...this.state,
      page,
    });
  };

  onChangedRowsPerPage = e => {
    this.setState({
      ...this.state,
      rowsPerPage: e.target.value,
    });
  };

  render() {
    const { page, rowsPerPage } = this.state;
    const indexStart = page * rowsPerPage;
    const indexEnd = indexStart + rowsPerPage;
    const tableRows = this.props.data.slice(indexStart, indexEnd)
      .map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {row[0]}
            </TableCell>
            <TableCell numeric>{row[1]}</TableCell>
            <TableCell numeric>{row[2]}</TableCell>
          </TableRow>
        );
      });

    return (
      <div className={styles.wrapper}>
        <h4>Título da tabela</h4>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coluna 1</TableCell>
              <TableCell numeric>Coluna 2</TableCell>
              <TableCell numeric>Coluna 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={this.props.data.length}
          labelDisplayedRows={this.getLabelDisplayedRows}
          labelRowsPerPage="Linhas por página:"
          onChangePage={this.onChangedPage}
          onChangeRowsPerPage={this.onChangedRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          backIconButtonProps={{
            'aria-label': 'Anterior',
          }}
          nextIconButtonProps={{
            'aria-label': 'Próxima',
          }}
        />
      </div>
    );
  }
}

ModuleTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ModuleTable;
