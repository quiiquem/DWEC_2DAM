import React, { createContext, useReducer, useContext } from 'react';

const initialState = { //array que pilla los valores necesarios
  participants: [], 
  assignments: {},  
  isDrawn: false,   
};

//Un reducer para saber que hara cada cosa
const secretSantaReducer = (state, action) => {  
  switch (action.type) {
    case 'ADD_PARTICIPANT': //caso de que lo añada

      if (action.name && !state.participants.includes(action.name)) { 
        return {
          ...state,
          participants: [...state.participants, action.name], //devuelve la lista que tenía + el nombre del nuevo participante

          isDrawn: false,
          assignments: {},
        };
      }
      return state;

    case 'REMOVE_PARTICIPANT': //caso de que lo borre
      return {
        ...state,
        participants: state.participants.filter(p => p !== action.name), //devuelve la lista actual pero borrando el que tenga ese nombre en concreto
        isDrawn: false,
        assignments: {},
      };

    case 'RUN_DRAW': //el iniciar el roll del sorteo
      if (state.participants.length < 3) {  //simplemente que si tiene menos de 3 te slae un alert
        alert("¡Necesitas al menos 3 participantes para el sorteo!");
        return state;
      }

      const buyers = [...state.participants]; 
      const receivers = [...state.participants];
      let newAssignments = {};
      let isSuccess = false;

// Mezcla aleatoriamente los receptores      
      while (!isSuccess) { //si tiene exito elige un nombre random
      
        receivers.sort(() => Math.random() - 0.5); 
        newAssignments = {};
        isSuccess = true; 

        //Recorre todos los participantes
        for (let i = 0; i < buyers.length; i++) {
          const buyer = buyers[i];
          const receiver = receivers[i];

           //si el nombre dle sorteo es el mismo se deniega (para que no se regale a si mismo)
          if (buyer === receiver) {
            isSuccess = false; 
            break;
          }
          //se lo asigna a la otra persona
          newAssignments[buyer] = receiver;
        }
      }

      //Devuelve el estado nuevo de las asignaciones
      return {
        ...state,
        assignments: newAssignments,
        isDrawn: true,
      };

    default:
      return state;
  }
};


export const SecretSantaContext = createContext(); 


export const SecretSantaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(secretSantaReducer, initialState);

  return (
    <SecretSantaContext.Provider value={{ state, dispatch }}>
      {children}
    </SecretSantaContext.Provider>
  );
};


export const useSecretSanta = () => {
  return useContext(SecretSantaContext);
};