import React from 'react';
import styles from "../app/page.module.css";

const Producto = ({ producto, index, deleteProducto }) => {
  return (
    <div className={styles.list}>
      <h3 className='Titulo3'>{producto.nombre} - {producto.marca} - {producto.cantidad} - ${producto.precio}</h3>
      <button className={styles.btn_delete} onClick={() => deleteProducto(index)}>X</button>
    </div>
  );
};

export default Producto;