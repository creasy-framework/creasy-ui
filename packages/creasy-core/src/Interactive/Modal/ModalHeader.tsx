import React, { FunctionComponent, ReactElement } from 'react';

interface Props {
  icon?: ReactElement;
  title: string | ReactElement;
  subTitle?: string | ReactElement;
}

export type ModalHeaderComponent = FunctionComponent<Props>;

const ModalHeader: ModalHeaderComponent = ({
  title,
  subTitle,
  icon,
}) => (
  <div className="creasy-modal-dialog__header">
    <div className="creasy-modal-dialog__title">
      {
        icon && <span className="creasy-modal-dialog__header-icon">{icon}</span>
      }
      {title}
    </div>
    {
      subTitle && <div className="creasy-modal-dialog__sub-title">{subTitle}</div>
    }
  </div>
);

export default ModalHeader;
