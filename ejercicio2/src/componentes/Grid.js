import styles from './../app/Grid.module.css';

const Grid = ({ lenguajes, onClick }) => {
  return (
    <div className={styles.grid}>
      {lenguajes.map((lenguaje) => (
        <div key={lenguaje.nombre} className={styles.card} onClick={() => onClick(lenguaje)}>
          <img src={lenguaje.imagen} alt={lenguaje.nombre} />
          <h3>{lenguaje.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Grid;