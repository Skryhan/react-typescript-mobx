import React from 'react'
import './Modal.scss'


interface ModalProps{
    active: boolean,
    setActive: any,
    children?: any,
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {

    return (
        <div className={active ? "popap active" : "popap"} onClick={() => setActive(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal__main">
                    <p className="modal__p">Здравствуйте, <span>{children}</span>!</p> 
                    <div className="modal__btn">
                        <button className="btn close" onClick={() => setActive(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal