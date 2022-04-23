import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

interface Props {
  className?: string;
}

export type HeaderComponent = FunctionComponent<Props>;

const Header: HeaderComponent = ({ children, className }) => (
  <div className={classNames('creasy-table__header', className)}>
    <div className="creasy-table__row">
      {children}
    </div>
  </div>
);

export default Header;
