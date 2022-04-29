import React, { FunctionComponent, ReactElement } from 'react';

interface Props {
  icon?: ReactElement;
  primary?: ReactElement | string;
  secondary?: ReactElement | string;
  className?: string;
}

export type CardHeaderComponent = FunctionComponent<Props>;

const CardHeader: CardHeaderComponent = ({
 primary, secondary, icon, className = '',
}) => (
  <div className={`creasy-card-header ${className}`}>
    <span className="creasy-card-header__icon">{icon}</span>
    {
      typeof primary === 'string' ? (
        <h3 className="creasy-card-header__primary">
          {primary}
        </h3>
      ) : (
        <div className="creasy-card-header__primary">
          {primary}
        </div>
      )
    }
    <div className="creasy-card-header__secondary">
      {secondary}
    </div>
  </div>
);

export default CardHeader;
