import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import { Scrollable } from '../../Interactive';
import { Card } from "../../Layout";
import { Spinner } from "../../Messaging";

interface Props {
  pageHeader?: ReactElement;
  pageFooter?: ReactElement;
  primaryContentHeader?: ReactElement;
  secondaryContentHeader?: ReactElement;
  contentFooter?: ReactElement;
  setScrollerRef?: (ref: any) => void;
  spinner?: ReactElement;
  isProcessing?: boolean;
  className?: string;
}

const SimplePage: FunctionComponent<Props> = ({
  pageHeader,
  pageFooter,
  primaryContentHeader,
  secondaryContentHeader,
  contentFooter,
  children,
  setScrollerRef,
  spinner = <Spinner size="m" type="donut" title="Loading..."/>,
  isProcessing,
  className,
}) =>  (
  <div className={classNames('creasy-page', className)}>
    {pageHeader && (
      <div className="creasy-page__page-header">
        {pageHeader}
      </div>
    )}
    <div className="creasy-page__scrollwrapper">
      <Scrollable className="creasy-page__scroller" setRef={setScrollerRef}>
        <div className="creasy-page__content">
          <div className="creasy-page__inner">
            {
              !isProcessing && (
                <Card
                  header={<Card.Header primary={primaryContentHeader} secondary={secondaryContentHeader}/>}
                  footer={contentFooter}
                >
                  {children}
                </Card>
              )
            }
            {isProcessing && (
              <div className="creasy-page__transition-spinner">
                {spinner}
              </div>
            )}
          </div>
        </div>
      </Scrollable>
    </div>
    {pageFooter && (
      <div className="creasy-page__page-footer">
        {pageFooter}
      </div>
    )}
  </div>
);

export default SimplePage;
