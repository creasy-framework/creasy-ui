import React, { FunctionComponent, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { Avater } from '../../Messaging';

interface Props {
  size?: 's' | 'm' | 'l';
  shadow?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  className?: string;
}

const IconButton: FunctionComponent<Props> = ({
  size = 'm',
  onClick,
  children,
  shadow = false,
  className = false,
}) => (
  <span onClick={onClick}>
    <Avater
      className={classNames('creasy-icon-button', className)}
      size={size}
      shadow={shadow}
    >
      {children}
    </Avater>
  </span>
);

export default IconButton;
