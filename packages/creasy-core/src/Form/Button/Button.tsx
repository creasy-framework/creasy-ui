import * as React from 'react';
import { FunctionComponent, ReactElement, SyntheticEvent } from 'react'
import classNames from 'classnames';

interface Props {
  icon?: ReactElement;
  iconPlacement?: 'left' | 'right';
  onClick?: (e: SyntheticEvent) => void;
  type?: 'default' | 'outlined' | 'text' | 'link';
  size?: 'auto' | 'xs' | 's' | 'm' | 'l' | 'xl';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  shadow?: boolean;
  className?: string;
  disabled?: boolean;
}

export type ButtonComponent = FunctionComponent<Props>;

const Button: ButtonComponent = ({
  children,
  onClick,
  shadow,
  type,
  color = 'default',
  size = 'auto',
  className,
  disabled,
  icon,
  iconPlacement = 'left',
}) => (
  <button disabled={disabled} className={classNames(
    'creasy-button',
    `creasy-button--${type}`,
    `creasy-button--color-${color}`,
    `creasy-button--size-${size}`,
    shadow && 'creasy-button--shadow',
    disabled && 'creasy-button--disabled',
    icon && iconPlacement === 'right' && 'creasy-button--reversed',
    className && className,
  )} onClick={onClick}>
    {icon && <span className={classNames(
      'creasy-button__icon',
      `creasy-button__icon--${iconPlacement}`,
    )}>{icon}</span>}
    <span>{children}</span>
  </button>
);

export default Button;
