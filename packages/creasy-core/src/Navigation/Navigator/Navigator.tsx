import React, { FunctionComponent, ReactElement, useCallback, useState } from 'react';
import classNames from 'classnames';
import { IconButton } from '../../Form';
import { Drawer, Scrollable } from '../../Interactive';
import { Icons, ColorfulStrap } from "../../Graphic";


interface Props {
  className?: string;
  brandPart?: ReactElement;
  actionPart?: ReactElement;
}

const Navigator: FunctionComponent<Props> = ({
 className= '',
 brandPart,
 actionPart,
 children,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const closeDrawer = useCallback(() => setShowDrawer(false), []);
  const openDrawer = useCallback(() => setShowDrawer(true), []);
  return (
    <nav className={classNames('creasy-navigator', className)}>
      <ColorfulStrap/>
      <div className="creasy-navigator__content">
        <IconButton onClick={openDrawer} className="creasy-navigator__menu-icon">
          <Icons.Menu/>
        </IconButton>
        {
          brandPart && (
            <div className="creasy-navigator__brand">
              {brandPart}
            </div>
          )
        }
        <ul className="creasy-navigator-menu creasy-navigator-menu--horizontal">
          {children}
        </ul>
        {
          actionPart && (
            <div className="creasy-navigator__action-part">
              {actionPart}
            </div>
          )
        }
        <Drawer isShow={showDrawer} onClose={closeDrawer} footer={actionPart}>
          <ul className="creasy-navigator-menu creasy-navigator-menu--vertical">
            <Scrollable>
              {children}
            </Scrollable>
          </ul>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navigator;
