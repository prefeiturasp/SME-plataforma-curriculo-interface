import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModuleTable from './ModuleTable';
import convertQuillToHtml from 'utils/convertQuillToHtml';

function getTable(key, table) {
  return <ModuleTable key={key} data={table} />;
}

function getText(key, ops, startIndex, endIndex) {
  const textOps = ops.slice(startIndex, endIndex);
  const lastOp = textOps[textOps.length - 1];
  const newLineIndex = lastOp.insert.lastIndexOf('\n');
  if (newLineIndex < lastOp.insert.length - 1) {
    textOps.pop();
    textOps.push({ insert: lastOp.insert.substring(0, newLineIndex) });
  }

  return (
    <div
      key={key}
      dangerouslySetInnerHTML={{ __html: convertQuillToHtml(textOps) }}
    />
  );
}

class ModuleTextWithTables extends PureComponent {
  render() {
    const ops = JSON.parse(this.props.data).ops;

    const children = [];
    let table = [];
    let prevTableId = null;
    let lastNewLineIndex = 0;
    let lastTableIndex = -1;

    ops.forEach((item, index) => {
      if (item.attributes && item.attributes.td) {
        const ids = item.attributes.td.split('|');
        const tableId = ids[0];
        const rowId = ids[1];
        const cellId = ids[2];

        if (tableId !== prevTableId) {
          children.push(getTable(prevTableId, table));
          children.push(
            getText(
              children.length + 1,
              ops,
              lastTableIndex + 1,
              lastNewLineIndex + 1
            )
          );
          prevTableId = tableId;
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

        const cellOps = ops.slice(lastNewLineIndex + 1, index);
        const prevOp = ops[lastNewLineIndex];
        const newLineIndex = prevOp.insert.lastIndexOf('\n');
        if (newLineIndex < prevOp.insert.length - 1) {
          const part = prevOp.insert.substring(newLineIndex + 1);
          cellOps.unshift({ insert: part });
          prevOp.insert = prevOp.insert.substring(0, newLineIndex);
        }

        cell.ops = cell.ops.concat(cellOps);
        lastTableIndex = index;
      }

      if (typeof item.insert === 'string' && item.insert.match(/\n/)) {
        lastNewLineIndex = index;
      }
    });

    children.push(getTable(prevTableId, table));
    children.push(getText(children.length + 1, ops, lastTableIndex + 1));

    return <Fragment>{children}</Fragment>;
  }
}

ModuleTextWithTables.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ModuleTextWithTables;
