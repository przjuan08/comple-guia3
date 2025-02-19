"use client"
import { useState, useEffect } from 'react';
import Grid from '../componentes/Grid';
import Modal from '../componentes/Modal';

const Home = () => {
  const [lenguajes, setLenguajes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [contenidoModal, setContenidoModal] = useState({});

  useEffect(() => {
    fetch('/lenguajes.json')
      .then((response) => response.json())
      .then((data) => setLenguajes(data));
  }, []);

  const handleCardClick = (lenguaje) => {
    setContenidoModal(lenguaje);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Lenguajes de Programación</h1>
      <Grid lenguajes={lenguajes} onClick={handleCardClick} />
      <Modal isOpen={modalOpen} onClose={handleCloseModal} contenido={contenidoModal} />
    </div>
  );
};

export default Home;