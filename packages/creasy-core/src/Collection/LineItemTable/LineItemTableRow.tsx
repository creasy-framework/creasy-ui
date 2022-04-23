import React, {FunctionComponent, Fragment, ReactNode} from 'react';
import Table from '../Table/Table';

export interface LineItemTableColumnConfig {
  columnName: string;
  textWrap?: 'nowrap' | 'break-all' | 'break-word';
  className?: string;
  hideLabel?: boolean;
}

interface Props {
  columnsConfig: LineItemTableColumnConfig[];
}

export interface LineItemTableRowComponent extends FunctionComponent<Props> {}

const LineItemTableRow: LineItemTableRowComponent = ({ children, columnsConfig }) => {
  const columns = children instanceof Array ? children : [children];
  return (
    <Fragment>
      {
        columns.map((columnElement: ReactNode, index) => (
          <Table.RowItem
            key={columnsConfig[index].columnName}
            {...columnsConfig[index]}
          >
            {columnElement}
          </Table.RowItem>
        ))
      }
    </Fragment>
  );
};

export default LineItemTableRow;
