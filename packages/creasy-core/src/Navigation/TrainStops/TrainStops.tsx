import React, { FunctionComponent } from 'react';

interface Props {}

const TrainStops: FunctionComponent<Props> = ({ children }) => {
  return (
    <ul className="creasy-train-stops">
      {children}
    </ul>
  )
};

export default TrainStops;
