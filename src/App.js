import { Route, Routes } from "react-router-dom";
import CalendarioPrograma from "./pages/CalendarioPrograma";


function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/Calendario" element={<CalendarioPrograma/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
// Ajusta la ruta según tu estructura de carpetas


