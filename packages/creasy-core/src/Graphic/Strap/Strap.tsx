import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Strap: FunctionComponent<Props> = ({
  className
}) => (
  <div className={classNames('creasy-strap', className)}></div>
);

export default Strap;
