import React, { FunctionComponent, Fragment } from 'react';

interface Props {}

export interface LineItemTableRowItemComponent extends FunctionComponent<Props> {}

const LineItemTableRowItem: LineItemTableRowItemComponent = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default LineItemTableRowItem;
