import React, { ReactComponentElement, SyntheticEvent, FunctionComponent } from 'react';
import { Tooltip, Avater } from '../../Messaging';

interface Props {
  icon: ReactComponentElement<any>;
  tooltip?: string;
  onClick?: (e: SyntheticEvent) => void;
}

const QuickAddItem: FunctionComponent<Props> = ({ onClick, icon, tooltip }) => {
  const avater = (
    <Avater size="m">
      {icon}
    </Avater>
  );
  const innerView = tooltip ? (
    <Tooltip placement="right" content={tooltip}>
      {avater}
    </Tooltip>
  ) : avater;

  return (
    <div className="creasy-quickadd-item" onClick={onClick}>
      {innerView}
    </div>
  );
};

export default QuickAddItem;

export type QuickAddItemComponent = FunctionComponent<Props>;
