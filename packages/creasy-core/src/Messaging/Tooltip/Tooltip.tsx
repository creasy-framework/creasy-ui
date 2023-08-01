import React, { FunctionComponent } from 'react';
import ReactTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import classNames from 'classnames';

type ActionType = 'hover' | 'focus' | 'click' | 'contextMenu';

interface AlignType {
  points: string[];
};

interface Props {
  placement?: 'left' | 'right' | 'top' | 'bottom';
  content?: React.ReactNode;
  onVisibleChange?: (visible?: boolean) => void;
  triggers?: ActionType[];
  className?: string;
  showArrow?: boolean;
  visible?: boolean;
  overlayStyle?: React.CSSProperties;
  align?: AlignType;
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
 visible = undefined,
 overlayStyle,
 align,
}) => {
  const otherProps = visible === undefined ? {} : { visible };
  return (
    content ? (
      <ReactTooltip
        onVisibleChange={onVisibleChange}
        placement={placement}
        overlay={content as any} // need to fix this
        overlayClassName={classNames('creasy-tooltip__overlay', className)}
        showArrow={showArrow}
        trigger={triggers}
        overlayStyle={overlayStyle}
        align={align}
        {...otherProps}
      >
    <span className="creasy-tooltip__trigger">
     {children}
    </span>
      </ReactTooltip>
    ) : <React.Fragment>{children}</React.Fragment>
  );
}

export default Tooltip;
