'use client'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styles from './Modal.module.scss'

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }

  return (
    <div
      className={styles.modal__container}
      id="wrapper"
      onClick={(e) => handleClose(e)}
    >
      <div className={styles.modal}>
        <button className={styles.modal__close} onClick={() => onClose()}>
          <FaTimes />
        </button>

        <h1>Soon...</h1>
      </div>
    </div>
  )
}

export default Modal
