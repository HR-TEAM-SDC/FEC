import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
} from "react";
import { createPortal } from "react-dom";
import "./styles.css";

export function CompareModal({ children }, ref) {
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

  const handleEscape = (event) => {
    if (event.keyCode === 27) close();
  };

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className="modal">
        <div className="modal-overlay" onClick={close} />
        <section className="modal-body">{children}</section>
      </div>
    ) : null,
    document.getElementById("compareModal")
  );
}

export default forwardRef(CompareModal);
