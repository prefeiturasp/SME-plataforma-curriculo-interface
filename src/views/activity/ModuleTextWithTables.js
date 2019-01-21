import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModuleTable from './ModuleTable';
import convertQuillToHtml from 'utils/convertQuillToHtml';

function appendChildren(children, tableId, table, ops, startIndex, endIndex) {
  children.push(
    <ModuleTable key={tableId} data={table} />
  );

  const otherOps = ops.slice(startIndex, endIndex);

  children.push(
    <div
      key={children.length + 1}
      dangerouslySetInnerHTML={{__html: convertQuillToHtml(otherOps)}}
    />
  );
}

class ModuleTextWithTables extends PureComponent {
  render() {
    const ops = JSON.parse(this.props.data).ops;

    const children = [];
    let table = [];
    let lastTableId = null;
    let lastIndexWithNewLine = 0;
    let lastIndexWithTable = 0;
    
    ops.forEach((item, index) => {
      if (item.attributes && item.attributes.td) {
        const ids = item.attributes.td.split('|');
        const tableId = ids[0];
        const rowId = ids[1];
        const cellId = ids[2];

        if (tableId !== lastTableId) {
          appendChildren(children, lastTableId, table, ops, lastIndexWithTable + 1, lastIndexWithNewLine + 1);
          lastTableId = tableId;
          table = [];
        }

        let row = table.find(o => o.id === rowId);
        if (!row) {
          row = {
            id: rowId,
            cells: [],
          };
          table.push(row);
        }

        let cell = row.cells.find(o => o.id === cellId);
        if (!cell) {
          cell = {
            id: cellId,
            ops: [],
          };
          row.cells.push(cell);
        } else {
          cell.ops.push({ insert: '\n' });
        }

        const cellOps = ops.slice(lastIndexWithNewLine + 1, index);
        cell.ops = cell.ops.concat(cellOps);

        lastIndexWithTable = index;
      }

      if (typeof item.insert === 'string' && item.insert.match(/\n/)) {
        lastIndexWithNewLine = index;
      }
    });

    appendChildren(children, lastTableId, table, ops, lastIndexWithTable + 1);

    return <Fragment>{children}</Fragment>;
  }
}

ModuleTextWithTables.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ModuleTextWithTables;
