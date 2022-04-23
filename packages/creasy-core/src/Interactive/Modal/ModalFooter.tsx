import React, { FunctionComponent } from 'react';

interface Props {}

export type ModalFooterComponent = FunctionComponent<Props>;

const ModalFooter: ModalFooterComponent = ({
  children,
}) => (
  <div className="creasy-modal-dialog__footer">
    <div className="creasy-separator"></div>
    {children}
  </div>
);

export default ModalFooter;
