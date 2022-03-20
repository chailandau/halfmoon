import { useState } from "react";

const Modal = () => {
  const [ modal, setModal ] = useState( false );
  const toggleModal = () => {
    setModal( !modal );
  };
  // add active-modal class if modal is open
  if ( modal ) {
    document.body.classList.add( "active-modal" );
  }
  else {
    document.body.classList.remove( "active-modal" );
  }
  return (
    <div>
      <button 
        className="btn-modal"
        onClick={toggleModal}>
            Open
      </button>
      { // show modal if state is true
        modal && (
          <div className="modal">
            <div 
              className="overlay"
              onClick={toggleModal}
            >
              <div className="modal-content">
                <h2>Hello Modal</h2>
                <button 
                  className="close-modal"
                  onClick={toggleModal}>
                    Close
                </button>
              </div>
            </div>
          </div>
        )}
    
    </div>
  );
};

export default Modal;
