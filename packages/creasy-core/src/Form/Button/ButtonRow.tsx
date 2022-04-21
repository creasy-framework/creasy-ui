import * as React from 'react';
import { ReactElement, FunctionComponent } from 'react';

interface Props {
  primary?: ReactElement[];
  secondary?: ReactElement[];
}

export type ButtonComponent = FunctionComponent<Props>;

const ButtonRow: ButtonComponent = ({ primary = [], secondary = [] }) => (
  <div className="creasy-button-row">
    <div className="creasy-button-row__primary">
      {primary}
    </div>
    <div className="creasy-button-row__secondary">
      {secondary}
    </div>
  </div>
);

export default ButtonRow;
