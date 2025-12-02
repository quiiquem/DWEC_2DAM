// ThemeToggle.js
import { useState } from 'react';

export default function ThemeToggle({isDarkMode, onToggle}) {

const style = {
    backgroundColor: isDarkMode ? '#333' : '#eee',
    color: isDarkMode ? 'white' : 'black',
    padding: '20px',
    borderRadius: '8px',
  };


  return (
    <button onClick={onToggle} style={style}>
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}