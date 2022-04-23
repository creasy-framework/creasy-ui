import React, { FunctionComponent } from 'react';
import ListItem, { ListItemComponent } from './ListItem';
import ListItemIcon, { ListItemIconComponent } from './ListItemIcon';

interface Props {}

interface ListComponent extends FunctionComponent<Props> {
  Item: ListItemComponent;
  ItemIcon: ListItemIconComponent;
}

const List: ListComponent = ({
 children,
}) => (
  <ul className="creasy-list">
    {children}
  </ul>
);

List.Item = ListItem;
List.ItemIcon = ListItemIcon;

export default List;
