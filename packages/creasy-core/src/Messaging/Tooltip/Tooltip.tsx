import React, { FunctionComponent } from 'react';
import ReactTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import classNames from 'classnames';

type ActionType = 'hover' | 'focus' | 'click' | 'contextMenu';

interface Props {
  placement?: 'left' | 'right' | 'top' | 'bottom';
  content?: React.ReactNode;
  onVisibleChange?: (visible?: boolean) => void;
  triggers?: ActionType[];
  className?: string;
  showArrow?: boolean;
  visible?: boolean;
  overlayStyle?: React.CSSProperties;
}

const Tooltip: FunctionComponent<Props> = ({
 children,
 placement = 'left',
 content,
 onVisibleChange,
 triggers = [
   'hover',
   'focus',
   'click',
 ],
 showArrow = true,
 className,
 visible,
 overlayStyle,
}) => (
  content ? (
    <ReactTooltip
      onVisibleChange={onVisibleChange}
      placement={placement}
      overlay={content as any} // need to fix this
      overlayClassName={classNames('creasy-tooltip__overlay', className)}
      showArrow={showArrow}
      trigger={triggers}
      visible={visible}
      overlayStyle={overlayStyle}
    >
    <span className="creasy-tooltip__trigger">
     {children}
    </span>
    </ReactTooltip>
  ) : <React.Fragment>{children}</React.Fragment>
);

export default Tooltip;
