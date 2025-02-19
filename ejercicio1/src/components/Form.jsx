"use client"

import React, { useState } from 'react';
import styles from "../app/page.module.css";

const Form = () => {
    const [producto, setProducto] = useState({ nombre: '', marca: '', cantidad: '', precio: '' });
    const [productos, setProductos] = useState([]);

    const handleChange = e => setProducto({ ...producto, [e.target.name]: e.target.value });
    const handleClick = e => {
        if (Object.values(producto).some(value => value.trim() === '')) {
            alert('Todos los campos son obligatorios');
            return;
        }
        setProductos([...productos, producto]);
        setProducto({ nombre: '', marca: '', cantidad: '', precio: '' });
    };

    const deleteProducto = indice => {
        const newProductos = [...productos];
        newProductos.splice(indice, 1);
        setProductos(newProductos);
    };

    const calcularTotal = () => {
        return productos.reduce((total, prod) => total + (prod.cantidad * prod.precio), 0);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre del Producto</label><br />
                <input className={styles.form_input} type="text" name='nombre' value={producto.nombre} onChange={handleChange} /><br />
                <label>Marca</label><br />
                <input className={styles.form_input} type="text" name='marca' value={producto.marca} onChange={handleChange} /><br />
                <label>Cantidad</label><br />
                <input className={styles.form_input} type="number" name='cantidad' value={producto.cantidad} onChange={handleChange} /><br />
                <label>Precio</label><br />
                <input className={styles.form_input} type="number" name='precio' value={producto.precio} onChange={handleChange} /><br />
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((value, index) => (
                        <tr key={index}>
                            <td>{value.nombre}</td>
                            <td>{value.marca}</td>
                            <td>{value.cantidad}</td>
                            <td>${value.precio}</td>
                            <td>
                                <button className={styles.btn_delete} onClick={() => deleteProducto(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total a pagar: ${calcularTotal()}</h3>
        </>
    );
};

export default Form;