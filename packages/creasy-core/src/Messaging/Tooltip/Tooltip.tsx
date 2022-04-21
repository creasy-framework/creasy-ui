import React, { FunctionComponent } from 'react';
import ReactTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

interface Props {
  placement?: 'left' | 'right' | 'top' | 'bottom';
  content?: React.ReactNode;
  onVisibleChange?: (visible?: boolean) => void;
}

const Tooltip: FunctionComponent<Props> = ({
 children,
 placement = 'left',
 content,
 onVisibleChange,
}) => (
  content ? (
    <ReactTooltip
      onVisibleChange={onVisibleChange}
      placement={placement}
      overlay={content as any} // need to fix this
      overlayClassName="creasy-tooltip__overlay"
      trigger={[
        'hover',
        'focus',
        'click',
      ]}
    >
    <span className="creasy-tooltip__trigger">
     {children}
    </span>
    </ReactTooltip>
  ) : <React.Fragment>{children}</React.Fragment>
);

export default Tooltip;
