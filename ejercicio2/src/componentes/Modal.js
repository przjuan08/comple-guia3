import { useEffect } from 'react';
import styles from './../app/Modal.module.css';

const Modal = ({ isOpen, onClose, contenido }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2 className={styles.h2}>{contenido.nombre}</h2>
        <p className={styles.p}>{contenido.descripcion}</p>
      </div>
    </div>
  );
};

export default Modal;