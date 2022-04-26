import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';

import AccordionPanel, { AccordionPanelComponent } from './AccordionPanel';

interface Props {
  className?: string;
  defaultOpen?: number;
}

interface AccordionComponent extends FunctionComponent<Props> {
  Panel: AccordionPanelComponent;
}

const Accordion: AccordionComponent = ({
 children = [], className = '', defaultOpen = -1,
}) => {
  const [openedIndex, setOpenIndex] = useState(defaultOpen);
  const panels = children instanceof Array ? children : [children];

  const toggleState = (index: number) => () => {
    const newIndex = index === openedIndex ? -1 : index;
    setOpenIndex(newIndex);
  };

  return (
    <div className={`creasy-accordion ${className}`}>
      {panels.map((group, index) => (
        <div
          key={group.key}
          className={classNames(
            'creasy-accordion__content',
            index === openedIndex && 'creasy-accordion__content--opened',
          )}
          onClick={toggleState(index)}
        >
          {group}
        </div>
      ))}
    </div>
  );
};

Accordion.Panel = AccordionPanel;

export default Accordion;
