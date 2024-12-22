import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal: React.FC = ({ children }) => {

    let el: HTMLDivElement;
    el = document.createElement('div')
    el.setAttribute('class', 'modal')
    useEffect(() => {
        const modalPortal = document.getElementById('modal');
        console.log(el)
        console.log(modalPortal)
        modalPortal?.appendChild(el)
        return () => {
            modalPortal?.removeChild(el)
        }
    }, [el])
    return ReactDOM.createPortal(children, el)

}

export default Modal;