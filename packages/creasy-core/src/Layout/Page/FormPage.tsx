import React, { FunctionComponent, ReactElement } from 'react';
import { Scrollable } from '../../Interactive';
import PageContent from './PageContent';
import useStickyHeader from './useStickyHeader';
import BasePage, { BasePageProps } from "./BasePage";

interface Props extends BasePageProps {
  contentHeaderStickyStyle: 'none' | 'always' | 'scrollUpOnly';
  contentContainerStyle: 'none' | 'card';
  primaryContentHeader?: ReactElement;
  secondaryContentHeader?: ReactElement;
  contentFooter?: ReactElement;
  spinner?: ReactElement;
  isProcessing?: boolean;
}

const FormPage: FunctionComponent<Props> = ({
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
  contentContainerStyle = 'none'
}) =>  {
  const [contentHeaderRef, onScroll] = useStickyHeader(contentHeaderStickyStyle);
  return (
    <BasePage className={className} pageHeader={pageHeader} pageFooter={pageFooter} isProcessing={isProcessing} spinner={spinner}>
      <Scrollable onScroll={onScroll as any}>
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
      </Scrollable>
    </BasePage>
  );
}

export default FormPage;
