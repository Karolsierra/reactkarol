import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import WorkshopAlert from "./WorkshopAlert"; 

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/workshop-alert" element={<WorkshopAlert />} />
      </Routes>
      </>
    </div>
  );
}

export default App;
// Ajusta la ruta según tu estructura de carpetas


