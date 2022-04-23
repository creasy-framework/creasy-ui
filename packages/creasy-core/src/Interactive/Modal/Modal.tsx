import React, { Fragment, FunctionComponent } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import ModalHeader, { ModalHeaderComponent } from './ModalHeader';
import ModalFooter, { ModalFooterComponent } from './ModalFooter';

interface Props {
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

interface ModalComponent extends FunctionComponent<Props>{
  Header: ModalHeaderComponent;
  Footer: ModalFooterComponent;
}

const Modal: ModalComponent = ({
  isOpen,
  className,
  children,
  onClose,
  footer,
  header,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    className={classNames('creasy-modal-dialog', className)}
    overlayClassName="creasy-modal-dialog__overlay">
    <Fragment>
      {header}
      {
        children && <div className="creasy-modal-dialog__content">{children}</div>
      }
      {footer}
    </Fragment>
  </ReactModal>
);

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
