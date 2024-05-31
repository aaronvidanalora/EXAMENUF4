import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Crud from './vistas/Comentarios';
import AdministracionIncidencias from './vistas/Home';
import Login from './vistas/Login';
import { Registre } from './vistas/Registro';
import Comentarios from './vistas/Comentarios';


function App() {

  return (
    <Router>
      
      <Header></Header>

      <Routes>
        <Route path="/" element={<AdministracionIncidencias />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registre />} />

     
      </Routes>
    </Router>
  )
}

export default App