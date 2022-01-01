import React, { useEffect } from 'react';
import { PortalWithState } from 'react-portal';
import { createPortal } from 'react-dom';
import './styles.css';

export function CompareModal({ open, children, onClose }) {
  if (open) {
    return (
      <PortalWithState defaultOpen closeOnEsc closeOnOutsideClick onClose={onClose}>
        {renderPortal}
      </PortalWithState>
    );
  } else {
    return null;
  }
  function renderPortal({ portal }) {
    return portal(
      <div className="modal">
        <div className="modal-overlay">
          <section className="modal-body">{children}</section>
        </div>
      </div>
    );
  }
}

export default CompareModal;
