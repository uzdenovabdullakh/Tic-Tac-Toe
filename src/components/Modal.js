import React from 'react';
import '../scss/_modal.scss'

function Modal(props) {
    const {modalText} = props;
    return (
        <div className="modal">
            <div className="modal-content">
                <h1 className="modal-text">{modalText}</h1>
                <button id="restart" onClick={()=>window.location.reload()}>Restart</button>
            </div>
        </div>
    );
}

export default Modal;