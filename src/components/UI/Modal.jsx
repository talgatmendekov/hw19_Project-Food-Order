import React, { useContext } from 'react'
import classes from './Modal.module.css'
import { Fragment } from 'react/cjs/react.production.min'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../store/modal-context'

const Modal = (props) => {
    const {onClose} = useContext(ModalContext)
    const BackDrop = () => {
        return <div className={classes.backdrop} onClick={onClose}></div>
    };

    const ModalOverLay = (props) => {
        return (
            <div className={classes.modal}>
                <div className={classes.contnent}>{props.children}</div>
            </div>
        )
    };
    const elem = document.getElementById('modal-root')
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop/>, elem)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, elem)}
    </Fragment>
  )
}

export default Modal