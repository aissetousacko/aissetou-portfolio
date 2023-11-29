'use client'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }

  return (
    <div
      className="modal__container"
      id="wrapper"
      onClick={(e) => handleClose(e)}
    >
      <div className="modal">
        <button className="modal__close" onClick={() => onClose()}>
          <FaTimes />
        </button>

        <h1>Soon...</h1>
      </div>
    </div>
  )
}

export default Modal
