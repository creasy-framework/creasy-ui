import React, { ReactElement, SyntheticEvent, FunctionComponent, Fragment } from 'react';
import classNames from 'classnames';

import Card from '../../Layout/Card/Card';
import DrawerHeader from './DrawerHeader';

interface Props {
  isShow: boolean;
  header?: ReactElement<any>;
  footer?: ReactElement<any>;
  onClose?: (e: SyntheticEvent) => void;
  placement?: 'left' | 'right';
  useOverlay?: boolean;
}

const Drawer: FunctionComponent<Props> = ({
  isShow,
  onClose,
  header,
  footer,
  children,
  placement = 'left',
  useOverlay = true,
}) => (
  <Fragment>
    <Card
      className={
        classNames(`creasy-drawer creasy-drawer--${placement}`, isShow && 'creasy-drawer--opened')
      }
      header={
        <DrawerHeader placement={placement} onClickCloseButton={onClose}>
          {header}
        </DrawerHeader>
      }
      footer={
        footer
      }
    >
      { children }
    </Card>
    {
      useOverlay && (
        <div
          className={classNames('creasy-drawer-overlay', { ['creasy-drawer-overlay--show']: isShow })}
          onClick={onClose}
        >
        </div>
      )
    }
  </Fragment>
);

export default Drawer;
