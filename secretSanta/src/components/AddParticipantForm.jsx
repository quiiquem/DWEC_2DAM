import React, { useState } from 'react';
import { useSecretSanta } from '../context/SecretSantaContext';

const AddParticipantForm = () => {
  
  const [name, setName] = useState(''); //nombre q se escribe
  const { dispatch } = useSecretSanta(); //dispatch del reducer

  const handleSubmit = (e) => { 
    e.preventDefault(); //que no se recargue
    if (name.trim()) { //si no esta vacio hace el dispatch de añadir
      dispatch({ type: 'ADD_PARTICIPANT', name: name.trim() });
      setName('');
    }
  };

  return ( //Form. del nombre para enviar
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Nombre del participante"
        value={name}
        onChange={(e) => setName(e.target.value)} //si se cambia lo que sea se guarda auto.
      />
      <button type="submit">Añadir Participante</button>
    </form>
  );
};

export default AddParticipantForm;