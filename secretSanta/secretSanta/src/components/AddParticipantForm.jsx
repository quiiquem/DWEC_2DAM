import React, { useState } from 'react';
import { useSecretSanta } from '../context/SecretSantaContext';

const AddParticipantForm = () => {
  
  const [name, setName] = useState('');
  const { dispatch } = useSecretSanta();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) { //Se encarga de que el nombre no este vacio para no añadir participantes no existentes
      dispatch({ type: 'ADD_PARTICIPANT', name: name.trim() }); //si es asi, dispatch en caso de poner participante
      setName(''); 
    }
  };

  return ( //parte html que simplemente es donde se escribe el nombre
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del participante"
        value={name}  
        onChange={(e) => setName(e.target.value)} //pilla el value cada vez que se cambie para tenerlo preparado
      />
      <button type="submit">Añadir Participante</button>
    </form>
  );
};


export default AddParticipantForm;