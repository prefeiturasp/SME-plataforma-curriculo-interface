import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import convertQuillToHtml from 'utils/convertQuillToHtml';
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
    const tableRows = this.props.data
      .slice(indexStart, indexEnd)
      .map((row, i) => {
        const cells = row.cells.map((cell, j) => {
          return (
            <TableCell key={j}>
              <div dangerouslySetInnerHTML={{__html: convertQuillToHtml(cell.ops)}} />
            </TableCell>
          );
        });

        return (
          <TableRow key={i}>
            {cells}
          </TableRow>
        );
      });

    const pagination = this.props.data.length > rowsPerPage
      ? <TablePagination
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
      : null;

    return (
      <div className={styles.wrapper}>
        <Table>
          <TableBody>{tableRows}</TableBody>
        </Table>
        {pagination}
      </div>
    );
  }
}

ModuleTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ModuleTable;
