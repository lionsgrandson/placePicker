import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      className="modal"
      ref={dialog}
    >
      {open ? children : null}
      {/* if  open is true then set chirldren to the output if not 
      then set it to null
      this means that when the dialog is closed it's set to null, meaning that when it's opneded it is rerendered making the sideeffect rerun
      condition ? expression_if_true : expression_if_false; - format for that if statment
  */}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
