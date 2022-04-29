import React, {ReactComponentElement, FunctionComponent, Ref, ReactNode} from 'react';
import CardHeader, { CardHeaderComponent } from './CardHeader';

interface Props {
  header?: ReactComponentElement<any> | string;
  footer?: ReactComponentElement<any> | string;
  className?: string;
  children?: ReactNode;
  headerRef?: Ref<HTMLDivElement>;
  bodyRef?: Ref<HTMLDivElement>;
  footerRef?: Ref<HTMLDivElement>;
}

interface CardComponent extends FunctionComponent<Props> {
  Header: CardHeaderComponent;
}

const Card: CardComponent = ({
  children,
  header,
  footer,
  className = '',
  headerRef,
  bodyRef,
  footerRef,
}: Props) => (
  <div className={`creasy-card ${className}`}>
    {
      header && (
        <div ref={headerRef} className="creasy-card__header">
          {header}
        </div>
      )
    }
    <div ref={bodyRef} className="creasy-card__body">
      {children}
    </div>
    {
      footer && (
        <div ref={footerRef} className="creasy-card__footer">
          {footer}
        </div>
      )
    }
  </div>
);

Card.Header = CardHeader;

export default Card;
