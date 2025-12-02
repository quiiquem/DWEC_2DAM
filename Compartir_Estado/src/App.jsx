// App.js
import { useState } from 'react';
// El objetivo de este proyecto es elevar el estado para que esté a nivel del padre (App.js). 
// Los componentes hijos deben recibir una prop con el valor del estado.

import ThemeToggle from './componentes/ThemeToggle';
import ContentCard from './componentes/ContentCard';

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const ToggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    }

    isDarkMode ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white";
    isDarkMode ?  document.querySelectorAll("h1").forEach(el => el.style.color = "cyan") : document.querySelectorAll("h1").forEach(el => el.style.color = "darkblue"); 
    
  return (
    <div class> 
      <h1>Mi Aplicación con Tema Dinámico</h1>
      
      <ThemeToggle isDarkMode={isDarkMode} onToggle = {ToggleTheme}/>
      
      <ContentCard isDarkMode={isDarkMode}/>
    </div>
  );
}