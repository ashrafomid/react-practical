import "./modal.css";
import ReactDOM from "react-dom";

export default function Modal({ children, isSaleModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: isSaleModal ? "4px solid" : "10px solid #ff4500",
          boderColor: isSaleModal ? "#ff4500" : "#ddd",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
