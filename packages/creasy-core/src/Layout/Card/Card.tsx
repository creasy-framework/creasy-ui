import React, { ReactComponentElement, FunctionComponent } from 'react';
import CardHeader, { CardHeaderComponent } from './CardHeader';

interface Props {
  header?: ReactComponentElement<any> | string;
  footer?: ReactComponentElement<any> | string;
  className?: string;
  setRef?: (ref: HTMLDivElement) => void;
}

interface CardComponent extends FunctionComponent<Props> {
  Header: CardHeaderComponent;
}

const Card: CardComponent = ({
 children, header, footer, className = '', setRef,
}) => (
  <div ref={setRef} className={`creasy-card ${className}`}>
    {
      header && (
        <div className="creasy-card__header">
          {header}
        </div>
      )
    }
    <div className="creasy-card__body">
      {children}
    </div>
    {
      footer && (
        <div className="creasy-card__footer">
          {footer}
        </div>
      )
    }
  </div>
);

Card.Header = CardHeader;

export default Card;
