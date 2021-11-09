/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ModalStyled, { ModalOverlay } from 'Styles/Modal';
import Button from './Button';

const Modal = (props) => {
  const {
    children,
    visible,
    title,
    cancelTextButton,
    acceptTextButton,
    onClickButtonAccepted,
    onClickButtonCancel,
  } = props;

  const handleClickAccepted = (e) => {
    onClickButtonAccepted(e);
  };

  const handleClickCancel = (e) => {
    onClickButtonCancel(e);
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalStyled visible={visible}>
        <div>
          <div className="header">
            <div className="title">{title}</div>
            <div className="close" onClick={handleClickCancel} aria-hidden>Close</div>
          </div>

          <div className="content">{children}</div>
          <div className="footer">
            {
              cancelTextButton && (
                <div>
                  <Button fullWidth onClick={handleClickCancel}>{cancelTextButton}</Button>
                </div>
              )
            }
            {
              acceptTextButton && (
                <div>
                  <Button fullWidth onClick={handleClickAccepted}>{acceptTextButton}</Button>
                </div>
              )
            }
          </div>
        </div>
      </ModalStyled>
    </>
  );
};

export default Modal;
