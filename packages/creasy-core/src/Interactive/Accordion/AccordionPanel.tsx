import React, {FunctionComponent, ReactNode, SyntheticEvent} from 'react';
import IconButton from '../../Form/IconButton/IconButton';
import Icons from '../../Graphic/Icons';

interface Props {
  className?: string;
  header?: ReactNode;
}

export interface AccordionPanelComponent extends FunctionComponent<Props> {}

const AccordionPanel: AccordionPanelComponent = ({
  children,
  header,
  className = '',
}) => {
  const stopEvent = (e: SyntheticEvent) => e.stopPropagation();
  return (
    <div className={`creasy-accordion-panel ${className}`}>
      <div className="creasy-accordion-panel__header">
        <div className="creasy-accordion-panel__summary" onClick={stopEvent}>
          {header}
        </div>
        <IconButton className="creasy-accordion-panel__icon">
          <Icons.ArrowDown />
        </IconButton>
      </div>
      <div className="creasy-accordion-panel__body" onClick={stopEvent}>
        {children}
      </div>
    </div>
  );
};

export default AccordionPanel;
