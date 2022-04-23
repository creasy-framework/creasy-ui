import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
  columnName?: string;
  className?: string;
  style?: any;
  hideLabel?: boolean;
  textWrap?: 'nowrap' | 'break-all' | 'break-word';
}

export type RowItemComponent = FunctionComponent<Props>;

const RowItem: RowItemComponent = ({ children, columnName, className, style = {}, textWrap = 'nowrap', hideLabel }) => {
  const { width } = style;
  const styleOverrides = width ? { ...style, flex: 'none' } : style;
  return (
    <div className={classNames(
      'creasy-table__item',
      textWrap && `creasy-table__item--${textWrap}`,
      className,
      hideLabel && 'creasy-table__item--hide-label',
    )} data-label={columnName} style={styleOverrides}>
      {children}
    </div>
  );
};

export default RowItem;
