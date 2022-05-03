import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props {
}

const TrainStops: FunctionComponent<Props> = ({ children }) => {
  return (
    <ul className="creasy-train-stops">
      {children}
    </ul>
  )
};

export default TrainStops;
