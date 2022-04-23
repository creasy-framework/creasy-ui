import React, { Fragment, FunctionComponent, SyntheticEvent } from 'react';
import { IconButton } from '../../Form';
import { Icons } from '../../Graphic';

interface Props {
  onClickCloseButton?: (e: SyntheticEvent) => void;
  placement?: 'left' | 'right';
}

const DrawerHeader: FunctionComponent<Props> = ({
  children,
  onClickCloseButton,
  placement = 'left',
}) => (
  <Fragment>
    <div className="creasy-drawer-header">
      {children}
    </div>
    <IconButton onClick={onClickCloseButton}>
      {
        placement === 'left' && <Icons.ArrowLeft />
      }
      {
        placement === 'right' && <Icons.ArrowRight />
      }
    </IconButton>
  </Fragment>
);

export default DrawerHeader;
