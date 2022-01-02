import React, { useEffect } from 'react';
import { PortalWithState } from 'react-portal';
import { createPortal } from 'react-dom';

export function CompareModal({ open, children, onClose }) {
  useEffect(() => {
    const mainEl = document.querySelector('main');

    if (open) {
      if (mainEl) {
        mainEl.style.filter = 'blur(3px)';
      }
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
      if (mainEl) {
        mainEl.style.filter = 'none';
      }
    };
  }, [open]);

  if (open) {
    return (
      <PortalWithState defaultOpen closeOnEsc onClose={onClose}>
        {renderPortal}
      </PortalWithState>
    );
  } else {
    return null;
  }
  function renderPortal({ portal }) {
    return portal(
      <div className="compare-modal-overlay" onClick={onClose}>
        <section className="compare-modal-body">{children}</section>
      </div>
    );
  }
}

export default CompareModal;
