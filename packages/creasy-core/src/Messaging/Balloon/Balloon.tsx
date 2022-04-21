import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  content: string | number | ReactElement;
}

const Balloon: FunctionComponent<Props> = ({
 children,
 content,
 className,
}) => (
  <span className={classNames('creasy-balloon', className)}>
    {children}
    <span className={classNames('creasy-balloon__badge', className)}>{content}</span>
  </span>
);

export default Balloon;
