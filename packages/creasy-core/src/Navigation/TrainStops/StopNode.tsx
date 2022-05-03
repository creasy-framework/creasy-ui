import React, { FunctionComponent, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Props {
  active?: boolean;
  passed?: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

const StopNode: FunctionComponent<Props> = ({
  children ,
  active = false,
  passed= false,
  onClick
}) => {
  return (
    <li onClick={onClick} className={
      classNames('creasy-train-stops-node',
        passed && 'creasy-train-stops-node--passed',
        active && 'creasy-train-stops-node--active')}
    >
      {children}
    </li>
  )
};

export default StopNode;
