import React, { Children } from 'react'
import { Form } from '../Form'

export const Modal = ({title, children, setIsOpen}) => {
    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span onClick={setIsOpen} className="close">&times;</span>
                <h2>{title}</h2>
                 {children}
            </div>
        </div>
    )
}
