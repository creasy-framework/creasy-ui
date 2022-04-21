import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
  title?: string;
  type?: 'box' | 'donut' | 'ellipsis';
  size?: 's' | 'm' | 'l';
}

const Box: FunctionComponent = () => (
  <div className="creasy-spinner-waterbox__box">
    <span className="creasy-spinner-waterbox__inner"></span>
  </div>
);

const Donut: FunctionComponent = () => (
  <div className="creasy-spinner-donut__donut"></div>
);

const Ellipsis: FunctionComponent = () => (
  <div className="creasy-spinner-ellipsis">
    <span className="creasy-spinner-ellipsis__dot"></span>
    <span className="creasy-spinner-ellipsis__dot"></span>
    <span className="creasy-spinner-ellipsis__dot"></span>
  </div>
);

const Spinner: FunctionComponent<Props> = ({
  title,
  type = 'box',
  size = 'm',
}) => (
  <div className="creasy-spinner">
    <div className={classNames(
      'creasy-spinner__animation',
      size && `creasy-spinner__animation--size-${size}`,
    )}>
      { type === 'box' && <Box /> }
      { type === 'donut' && <Donut /> }
      { type === 'ellipsis' && <Ellipsis /> }
    </div>
    {
      title && <div className="creasy-spinner__text">{title}</div>
    }
  </div>
);

export default Spinner;
