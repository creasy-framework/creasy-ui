import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import {Spinner} from "../../Messaging";

export interface BasePageProps {
  pageHeader?: ReactElement;
  pageFooter?: ReactElement;
  className?: string;
  isProcessing?: boolean;
  spinner?: ReactElement;
}

const BasePage: FunctionComponent<BasePageProps> = ({
  pageHeader,
  pageFooter,
  children,
  className,
  isProcessing,
  spinner = <Spinner size="m" type="donut" title="Loading..."/>,
}) =>  {
  return (
    <div className={classNames('creasy-page', className)}>
      {pageHeader && (
        <div className="creasy-page__page-header">
          {pageHeader}
        </div>
      )}
      {isProcessing && (
        <div className="creasy-page__transition-spinner">
          {spinner}
        </div>
      )}
      {
        !isProcessing && (
          <div className="creasy-page__scrollwrapper">
            {children}
          </div>
        )
      }
      {pageFooter && (
        <div className="creasy-page__page-footer">
          {pageFooter}
        </div>
      )}
    </div>
  );
}

export default BasePage;
