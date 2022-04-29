import React, { FunctionComponent, ReactElement, Ref } from 'react';
import classNames from 'classnames';
import Card from '../../Layout/Card/Card';

interface Props {
  headerRef?: Ref<any>;
  primaryHeader?: ReactElement;
  secondaryHeader?: ReactElement;
  footer?: ReactElement;
  spinner?: ReactElement;
  headerStickyStyle?: 'none' | 'always' | 'scrollUpOnly';
  contentStyle?: 'none' | 'card';
}

const PageContent: FunctionComponent<Props> = ({
  children,
  primaryHeader,
  secondaryHeader,
  headerRef,
  footer,
  headerStickyStyle,
  contentStyle,
}) =>  {
  const stickyHeaderClassName = headerStickyStyle === 'none' ?  '' : 'creasy-page__inner--sticky-header';
  const className = contentStyle === 'none' ?  'creasy-page__inner creasy-page__inner--no-style' : 'creasy-page__inner';
  return (
    <div className="creasy-page__content">
      <Card
        className={classNames(className, stickyHeaderClassName)}
        header={<Card.Header primary={primaryHeader} secondary={secondaryHeader}/>}
        footer={footer}
        headerRef={headerRef}
      >
        {children}
      </Card>
    </div>
  );
}

export default PageContent;
