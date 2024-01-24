'use client'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Slider from './Slider'

const Modal = ({ isVisible, onClose, slides }) => {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }

  return (
    <div id="wrapper" className="modal" onClick={(e) => handleClose(e)}>
      <button className="modal__close" onClick={() => onClose()}>
        <FaTimes />
      </button>

      <Slider slides={slides} />
    </div>
  )
}

export default Modal
