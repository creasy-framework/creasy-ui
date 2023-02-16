import React, {FunctionComponent, ReactElement} from 'react';
import classNames from 'classnames';
import Icons from '../../Graphic/Icons';

interface Props {
  className?: string;
  primaryContent?: string | ReactElement;
  secondaryContent?: string | ReactElement;
  type: 'info' | 'warning' | 'error';
  size?: 'auto'| 's' | 'm' | 'l';
  onClose?: () => void;
  isShow?: boolean;
  placement?: 'auto' | 'top' | 'bottom' | 'right' | 'left';
}

const Notification: FunctionComponent<Props> = ({
 className,
 primaryContent ,
 secondaryContent,
 type= 'info',
 size = 'auto',
 onClose,
 isShow,
                                                  placement = 'auto',
}) => (
  <div className={classNames(
    'creasy-notification',
    `creasy-notification--${type}`,
    `creasy-notification--size-${size}`,
    `creasy-notification--placement-${placement}`,
    isShow && `creasy-notification--show`,
    className)}>
    {
      type === 'warning' && <Icons.Warning size="s" className="creasy-notification__icon"/>
    }
    {
      type === 'info' && <Icons.Info size="s" className="creasy-notification__icon"/>
    }
    {
      type === 'error' && <Icons.Error size="s" className="creasy-notification__icon"/>
    }
    <div className="creasy-notification__message">
      {
        primaryContent && <div className="creasy-notification__primary">
          {primaryContent}
        </div>
      }
      {
        secondaryContent && <div className="creasy-notification__secondary">
          {secondaryContent}
        </div>
      }
    </div>
    {
      onClose && (
        <div className="creasy-notification__close-button" onClick={onClose}>
          x
        </div>
      )
    }
  </div>
);

export default Notification;
