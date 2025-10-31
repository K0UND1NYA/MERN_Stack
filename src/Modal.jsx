import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, onClose }) {
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        {children}
        <button
          style={{
            marginTop: "15px",
            background: "red",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
