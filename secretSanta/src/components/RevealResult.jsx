import React, { useState } from 'react';
import { useSecretSanta } from '../context/SecretSantaContext';

const RevealResult = //Obtiene el resultado del amigo invisible
 () => {  
  const { state } = useSecretSanta(); 
  const { participants, assignments, isDrawn } = state;

  //Estado para guardar persona seleccionada
  const [selectedPerson, setSelectedPerson] = useState('');

  //Estado para guardar asignación revelada (la persona que debe regalar)
  const [revealedAssignment, setRevealedAssignment] = useState(null);

  //Si no se ha realizado no se mostara nada
  if (!isDrawn) {
    return null;
  }

  //Revela el resultado para la persona seleccionada
  const handleReveal = () => { 
    //Si existe su asignación en el objeto assignment
    if (selectedPerson && assignments[selectedPerson]) {
      //Guarda receptor en estado local
      setRevealedAssignment(assignments[selectedPerson]);
    } else {
      //Si no hay seleccion válida limpia el resultado
      setRevealedAssignment(null);
    }
  };

  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <h3>👁️ Revelar tu Amigo Invisible</h3>
      <p>Selecciona tu nombre para ver a quién le tienes que regalar.</p>

      <select
        value={selectedPerson}
      
        onChange={(e) => {
          setSelectedPerson(e.target.value);
          setRevealedAssignment(null); 
        }}
      >
        <option value="">-- Selecciona tu nombre --</option>
        {participants.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button 
        onClick={handleReveal} 
        disabled={!selectedPerson} 
        style={{ marginLeft: '10px' }}
      >
        Mostrar Mi Asignación
      </button>

      {revealedAssignment && (
        <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: 'darkred' }}>
          ¡Hola, {selectedPerson}! Tienes que regalar a: **{revealedAssignment}**
        </p>
      )}
    </div>
  );
};

export default RevealResult;