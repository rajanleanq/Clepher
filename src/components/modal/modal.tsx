import React from 'react';

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose?: () => void }) {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black-primary bg-opacity-50 transition-opacity cursor-pointer"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="relative z-20 w-full max-w-lg p-4 bg-white rounded-lg shadow-xl">
        <div className="bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
