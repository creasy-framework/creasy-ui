import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  right?: ReactElement;
  left?: ReactElement;
  color?: 'primary' | 'secondary' | 'danger';
}

const Badge: FunctionComponent<Props> = ({
  children,
  className,
  color,
  left,
  right,
}) => (
  <div className={
    classNames(
      'creasy-badge',
      color && `creasy-badge--color-${color}`,
      className,
    )
  }>
    { left && left }
    <span className="creasy-badge__label">{children}</span>
    { right && right }
  </div>
);

export default Badge;
