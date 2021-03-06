import React, { FunctionComponent, ReactElement } from 'react';
import { debounce } from 'debounce';
import InfiniteScroll from 'react-infinite-scroller';
import { Spinner } from '../../Messaging';
import Scrollable, { ScrollEvent } from "../Scrollable/Scrollable";

interface Props {
  loadMore: (page: number) => void;
  hasMore: boolean;
  spinner?: ReactElement;
  getScrollParent?: () => any;
  useWindow?: boolean;
  cooldown?: number;
  onScroll?: (evt: ScrollEvent) => void;
  className?: string;
}

const InfinityScroller: FunctionComponent<Props> = ({
 className,
 children,
 loadMore,
 hasMore = true,
 cooldown = 1000,
 onScroll,
 spinner = (
   <Spinner key="spinner" type="ellipsis" size="s"/>
 ),
}) => {
  const onLoadMore = debounce((page: number) => hasMore && loadMore(page), cooldown);
  const scrollParent = React.useRef<any>();
  const setRef = (ref: any) => scrollParent.current = ref;
  return (
    <Scrollable className={className} setRef={setRef} onScroll={onScroll}>
      <InfiniteScroll
        pageStart={0}
        threshold={50}
        initialLoad={false}
        loadMore={onLoadMore}
        hasMore={hasMore}
        loader={spinner}
        useWindow={false}
        getScrollParent={() => scrollParent.current}
      >
        {children}
      </InfiniteScroll>
    </Scrollable>
  );
};

export default InfinityScroller;
