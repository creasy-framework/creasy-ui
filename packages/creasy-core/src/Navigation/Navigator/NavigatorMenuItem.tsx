import React, { FunctionComponent, MouseEventHandler } from 'react';
import classNames from 'classnames';


interface Props {
  className?: string;
  url?: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

const NavigatorMenuItem: FunctionComponent<Props> = ({
 className= '',
 url,
 onClick,
 children
}) => {
  const menuItemStyle = classNames('creasy-navigator-menu__item', className);
  const hasUrl = !!url;
  const menuItem = (
    <li onClick={onClick} className={classNames(!hasUrl && menuItemStyle)}>
      {children}
    </li>
  );
  return url ? <a href={url} className={classNames(hasUrl && menuItemStyle)}>{menuItem}</a> : menuItem;

};

export default NavigatorMenuItem;
