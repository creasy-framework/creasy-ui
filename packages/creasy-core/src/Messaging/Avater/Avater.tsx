import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
  shadow?: boolean;
  className?: string;
  size?: 's' | 'm' | 'l';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
}

const Avater: FunctionComponent<Props> = ({
  children,
  className = '',
  size = 'm',
  shadow = false,
  color = 'default'
}) => (
  <div className="creasy-avater__container">
    <div className={
      classNames('creasy-avater', `creasy-avater--${size}`, `creasy-avater--color-${color}`, className, {
        ['creasy-avater--shadow']: shadow,
      })
    }>
      {children}
    </div>
  </div>
);

export default Avater;
