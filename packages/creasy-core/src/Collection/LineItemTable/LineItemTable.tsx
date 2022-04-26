import React, { FunctionComponent, ReactNode } from 'react';
import shortid from 'shortid';

import Table from '../Table/Table';
import Icons from '../../Graphic/Icons';

import LineItemTableRow, { LineItemTableRowComponent, LineItemTableColumnConfig } from './LineItemTableRow';
import LineItemTableRowItem, { LineItemTableRowItemComponent } from './LineItemTableRowItem';
import IconButton from '../../Form/IconButton/IconButton';
import classNames from "classnames";

interface Props {
  data: any[];
  columnsConfig: LineItemTableColumnConfig[];
  onUpdateRow: (index: number, ...args: any) => void;
  onAddRow?: (...args: any) => void;
  onRemoveRow?: (index: number) => void;
  children: (index: number, rowData: any, onUpdateRow: (...args: any) => void) => ReactNode;
}

interface LineItemTableComponent extends FunctionComponent<Props> {
  Row: LineItemTableRowComponent;
  Item: LineItemTableRowItemComponent;
}

const LineItemTable: LineItemTableComponent = ({
 data,
 columnsConfig,
 children,
 onUpdateRow,
 onAddRow,
 onRemoveRow,
}) => {
  data.forEach((row: any) => {
    if (!row.id) {
      row.id = shortid.generate();
    }
  });

  const newRow = { id: shortid.generate() };

  const rows = onAddRow ? [...data, newRow] : [...data];

  const onChange = (index: number, rowData: any, ...args: any) => {
    if (index === data.length) {
      onAddRow && onAddRow(rowData, ...args);
    } else {
      onUpdateRow && onUpdateRow(index, ...args);
    }
  };

  return (
    <Table className={classNames('creasy-line-item-table', !!onAddRow && 'creasy-line-item-table--appendable')}>
      <Table.Header>
        {
          columnsConfig.map(({ columnName, ...otherProps }) => (
            <Table.HeaderItem
              key={columnName}
              {...otherProps}
            >
              {columnName}
            </Table.HeaderItem>
          ))
        }
        {
          onRemoveRow && <Table.RowItem className="creasy-line-item-table__remove"/>
        }
      </Table.Header>
      <Table.Body>
        {
          rows.map((rowData, index) => (
            <Table.Row key={rowData.id} className="creasy-line-item-table__row">
              {children(index, rowData, (...args) => onChange(index, rowData, ...args))}
              {
                onRemoveRow && (
                  <Table.RowItem textWrap="break-all" className="creasy-line-item-table__remove" columnName="Remove" hideLabel>
                    <IconButton
                      className="creasy-line-item-table__remove-button"
                      onClick={() => onRemoveRow(index)}
                    >
                      <Icons.Trash />
                    </IconButton>
                  </Table.RowItem>
                )
              }
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};

LineItemTable.Row = LineItemTableRow;
LineItemTable.Item = LineItemTableRowItem;

export default LineItemTable;
