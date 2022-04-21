import * as React from 'react';
import { FunctionComponent } from 'react';
import classNames from 'classnames';
import Icons from '../../Graphic/Icons';

export type CheckState = 'checked' | 'unchecked' | 'half-checked';

interface Props {
  value?: CheckState;
  label?: string;
  onChange?: (newValue: CheckState) => void;
  enableIntermediateState?: boolean;
  className?: string;
}

export type CheckboxComponent = FunctionComponent<Props>;

const tuple2 = { checked: 'unchecked', unchecked: 'checked' };

const tuple3 = { checked: 'unchecked', 'half-checked': 'checked', unchecked: 'half-checked' };

const Checkbox: CheckboxComponent = ({
 value = 'unchecked',
 onChange,
 label = '',
 enableIntermediateState = false,
 className,
}) => {
  const handleStateChange = () => {
    const states = enableIntermediateState ? tuple3 : tuple2;
    const newState = states[value];
    onChange && onChange(newState);
  };

  return (
    <button className={classNames('creasy-checkbox', className)} onClick={handleStateChange}>
      {
        value === 'checked' && <Icons.SelectedAll className="creasy-checkbox__input"/>
      }
      {
        value === 'half-checked' && <Icons.Selected className="creasy-checkbox__input"/>
      }
      {
        value === 'unchecked' && <Icons.Unselected className="creasy-checkbox__input"/>
      }
      <div className="creasy-checkbox__label">
        {label}
      </div>
    </button>
  );
};

export default Checkbox;
