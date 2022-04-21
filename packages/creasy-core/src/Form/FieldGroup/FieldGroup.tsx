import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  label?: ReactElement | string;
  isRequired?: boolean;
  labelAccessory?: ReactElement;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | undefined;
  labelPlacement?: 'left' | 'top';
}

const FieldGroup: FunctionComponent<Props> = ({
  label = '',
  isRequired = false,
  children,
  labelAccessory,
  labelPlacement = 'left',
  size,
}) => (
    <div className={classNames('creasy-field-group', labelPlacement && `creasy-field-group--place-${labelPlacement}`)}>
      {
        label && (
          <div className="creasy-field-group__label">
            <label>{label}</label>
            <span className="creasy-field-group__accessory">
              {labelAccessory}
              {isRequired && <span className="creasy-field-group__asterisk">*</span>}
             </span>
          </div>
        )
      }
      <div className={classNames(
        'creasy-field-group__input',
        !label && 'creasy-field-group__input--full',
        size && `creasy-field-group__input--${size}`,
      )}>
        {children}
      </div>
    </div>
);

export default FieldGroup;
