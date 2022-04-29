import React, { FunctionComponent, ReactElement } from 'react';
import { InfinityScroller } from '../../Interactive';
import useStickyHeader from './useStickyHeader';
import PageContent from './PageContent';
import BasePage from './BasePage';

interface Props {
  pageHeader?: ReactElement;
  pageFooter?: ReactElement;
  contentHeaderStickyStyle: 'none' | 'always' | 'scrollUpOnly';
  primaryContentHeader?: ReactElement;
  secondaryContentHeader?: ReactElement;
  contentFooter?: ReactElement;
  spinner?: ReactElement;
  isProcessing?: boolean;
  className?: string;
  contentContainerStyle?: 'none' | 'card';
  loadMore: (page: number) => void;
  hasMore: boolean;
}

const InfinityScrollingPage: FunctionComponent<Props> = ({
  pageHeader,
  pageFooter,
  primaryContentHeader,
  secondaryContentHeader,
  contentFooter,
  children,
  spinner,
  isProcessing,
  className,
  contentHeaderStickyStyle = 'none',
  contentContainerStyle = 'none',
  loadMore,
  hasMore
}) =>  {
  const [contentHeaderRef, onScroll] = useStickyHeader(contentHeaderStickyStyle);
  return (
    <BasePage className={className} pageHeader={pageHeader} pageFooter={pageFooter} isProcessing={isProcessing} spinner={spinner}>
      <InfinityScroller onScroll={onScroll as any} className="creasy-page__scroller" loadMore={loadMore} hasMore={hasMore}>
        <PageContent
          headerRef={contentHeaderRef}
          primaryHeader={primaryContentHeader}
          secondaryHeader={secondaryContentHeader}
          footer={contentFooter}
          headerStickyStyle={contentHeaderStickyStyle}
          contentStyle={contentContainerStyle}
        >
          {children}
        </PageContent>
      </InfinityScroller>
    </BasePage>
  );
}

export default InfinityScrollingPage;
