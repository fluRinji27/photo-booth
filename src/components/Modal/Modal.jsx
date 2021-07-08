import React, { useEffect } from 'react'

import { ReactComponent as CloseSVG } from '../../assets/img/close.svg'

import './Modal.scss'

const Modal = ({ isActive, modalHandler, children }) => {

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    }
    return () => document.body.style.overflow = 'unset'
  }, [isActive])

  if (isActive) {
    return (
      <div className="Modal" onClick={modalHandler}>
        <CloseSVG className='Modal__button' onClick={modalHandler}/>
        {children}
      </div>
    )
  }
  return null
}

export default Modal