import { useCallback, useEffect, useRef } from 'react';
import { ScrollDirection, ScrollEvent } from '../../Interactive/Scrollable/Scrollable';

export default (stickyStyle: 'none' | 'always' | 'scrollUpOnly') => {
  const stickyHeaderRef = useRef<any>();
  const lastDirection = useRef<ScrollDirection.UP | ScrollDirection.DOWN | null>(null);

  useEffect(() => {
    if (stickyHeaderRef.current && stickyStyle === 'scrollUpOnly') {
      stickyHeaderRef.current.style.top = `${-stickyHeaderRef.current.getBoundingClientRect().height}px`;
    }
  }, [stickyHeaderRef.current, stickyStyle]);

  const onScroll = useCallback((e: ScrollEvent) => {
    const { verticalDirection } = e;
    if (lastDirection.current !== verticalDirection && stickyStyle === 'scrollUpOnly' && stickyHeaderRef.current) {
      if (verticalDirection === ScrollDirection.UP) {
        stickyHeaderRef.current.style.top = '0px';
      } else {
        stickyHeaderRef.current.style.top = `${-stickyHeaderRef.current.getBoundingClientRect().height}px`;
      }
    }
    lastDirection.current = verticalDirection;
  }, []);

  return [stickyHeaderRef, onScroll];
}
