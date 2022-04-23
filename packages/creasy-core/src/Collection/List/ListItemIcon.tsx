import React, { FunctionComponent } from 'react';

interface Props {}

const ListItemIcon: FunctionComponent<Props> = ({
  children,
}) => (
  <div className="creasy-list-icon">
    {children}
  </div>
);

export default ListItemIcon;

export type ListItemIconComponent = FunctionComponent<Props>;
