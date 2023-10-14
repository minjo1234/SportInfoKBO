import React from 'react';
import './Modal.css'; // 모달 스타일을 포함하는 CSS 파일을 import

function Modal({ imageUrl, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <img src={imageUrl} alt="Modal Image" />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
