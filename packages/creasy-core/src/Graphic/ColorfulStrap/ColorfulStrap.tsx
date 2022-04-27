import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const ColorfulStrap: FunctionComponent<Props> = ({
  className
}) => (
  <div className={classNames('creasy-colorful-strap', className)}></div>
);

export default ColorfulStrap;
