import React, { FunctionComponent, useCallback, useRef } from 'react';

import ScrollBars, { positionValues as PositionValues } from 'react-custom-scrollbars';

export interface ScrollEvent extends PositionValues {
  verticalDirection: ScrollDirection.UP | ScrollDirection.DOWN;
}

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down',
}

interface Props {
  className?: string;
  setRef?: (ref: any) => void;
  onScroll?: (evt: ScrollEvent) => void;
}

const Scrollable: FunctionComponent<Props> = ({
 onScroll,
 children,
 className = '',
 setRef,
}) => {
  const setParentRef = (ref: any) => {
    if (ref && setRef) {
      setRef(ref.firstChild.firstChild);
    }
  };

  const lastTop = useRef<number>(0);

  const handleScroll = useCallback((e: PositionValues) => {
    const verticalDirection = e.top > lastTop.current ? ScrollDirection.DOWN : ScrollDirection.UP;
    lastTop.current = e.top;
    onScroll && onScroll({
      ...e,
      verticalDirection,
    });
  }, [onScroll]);

  return (
    <div className={`creasy-scrollable ${className}`} ref={setParentRef}>
      <ScrollBars onScrollFrame={handleScroll}>
        {children as any}
      </ScrollBars>
    </div>
  );
};

export default Scrollable;
