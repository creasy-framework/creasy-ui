import * as React from 'react';
import { FunctionComponent } from 'react';

export interface Props {
  mention: any;
  onClick?: (mention: any) => void;
}

const Mention: FunctionComponent<Props> = ({ mention, children, onClick }) => {
  const handleClick = () => onClick && onClick(mention);
  return (
      <span className="creasy-text-editor__mention" onClick={handleClick}>
        {children}
      </span>
  );
};

export default Mention;
