import './App.css'
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [isFinished, setIsFinished] = useState(false);

  // 1. Ref para manipular el DOM (enfocar el input)
  const inputRef = useRef(null);

  // 2. Ref para guardar el ID del timer (no se muestra en la UI)
  const timerRef = useRef(null);

  // 3. Ref para saber si ya empezamos (evita re-renders al cambiar esta lógica)
  const hasStarted = useRef(null);

  // Función para enfocar el input al cargar o reiniciar
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Ejecuta la función después de que el componente se haya renderizado por primera vez
  useEffect(() => {
    focusInput();
  }, []);

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setText(inputValue);

    // Iniciar el cronómetro solo con la primera letra
    if(!hasStarted.current && inputValue.length > 0){
      hasStarted.current = true;
      startTimer();
    }
  }

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if(prevTime <= 1) {
          clearInterval(timerRef.current);
          setIsFinished(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    hasStarted.current = false;
    setText("");
    setTimeLeft(10);
    setIsFinished(false);
    setTimeout(focusInput, 0); // Esperamos al siguiente tick para enfocar
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Typing Test (10 seg)</h1>
      <h2 style={{ color: timeLeft < 4 ? "red" : "black" }}>
        Tiempo restante: {timeLeft}s
      </h2>

      <textarea
        ref={inputRef}
        value={text}
        onChange={handleInputChange}
        disabled={isFinished}
        placeholder="¡Empieza a escribir para activar el cronómetro!"
        rows="5"
        style={{ width: "100%", fontSize: "1.2rem" }}
      />

      {isFinished && (
        <div style={{ marginTop: "20px" }}>
          <h3>¡Tiempo agotado!</h3>
          <p>
            Has escrito <strong>{text.length}</strong> caracteres.
          </p>
          <p>
            Velocidad:{" "}
            <strong>{(text.length / 5 / (10 / 60)).toFixed(0)}</strong> PPM
            (Palabras por minuto aprox.)
          </p>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleReset}>Reiniciar Juego</button>
      </div>
    </div>
  );
}

