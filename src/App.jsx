import React from 'react';
import BotonControl from './components/BotonControl';

function App() {
  const handleStopInteraction = () => {
    console.log("Deteniendo la interacción...");
    // Lógica para detener la interacción
  };

  const handleToggleMic = () => {
    console.log("Activando/Desactivando micrófono...");
    // Lógica para activar/desactivar el micrófono
  };

  const handleExportConversation = () => {
    console.log("Exportando conversación...");
    // Lógica para exportar la conversación
  };

  const handleTextMining = () => {
    console.log("Iniciando Text Mining...");
    // Lógica para el análisis de texto
  };

  const handleEstimateCosts = () => {
    console.log("Calculando costos estimados...");
    // Lógica para calcular costos estimados
  };

  return (
    <div>
      <h1>Interfaz de Llamada Virtual</h1>
      <BotonControl
        text="Detener interacción"
        onInteraction={handleStopInteraction}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
        </svg>}

        type="btn-error"
      />
      <BotonControl
        text="Activar/Desactivar micrófono"
        onInteraction={handleToggleMic}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c2.206 0 4-1.794 4-4V6c0-2.206-1.794-4-4-4s-4 1.794-4 4v4c0 2.206 1.794 4 4 4z" />
        </svg>}
        type="btn-primary"
      />
      <BotonControl
        text="Exportar conversación"
        onInteraction={handleExportConversation}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
        </svg>}
        type="btn-success"
      />
      <BotonControl
        text="Iniciar análisis de texto"
        onInteraction={handleTextMining}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>}
        type="btn-warning"
      />
      <BotonControl
        text="Calcular costos estimados"
        onInteraction={handleEstimateCosts}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>}
        type="btn-secondary"
      />
    </div>
  );
}

export default App;
