import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from '../../apis/atelier';
import { createPortal } from 'react-dom';
// import './styles.css';

const AddQuestionsModal = ({ children }, ref) => {
  //Open the modal
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  //Close the modal
  const handleEscape = (event) => {
    if (event.keyCode === 27) close();
  };

  useEffect(() => {
    //addEventListener(type, listener, options);
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={'modal'}>
        <div className="modal-overlay" onClick={close} />
        <span role="button" className="modal-close" aria-label="close" onClick={close}>
          ✖
        </span>
        <div className="modal-body">{children}</div>
      </div>
    ) : null,
    document.getElementById('AddModal') || document.createElement('div')
  );
};

export default forwardRef(AddQuestionsModal);
