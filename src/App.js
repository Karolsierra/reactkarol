import { Route, Routes } from "react-router-dom";
import Calendariomain from "./components/Calendariomain";


function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/Calendario" element={<Calendariomain/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
// Ajusta la ruta según tu estructura de carpetas


