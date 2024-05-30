import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './vistas/Home';
import Crud from './vistas/Crud';


function App() {

  return (
    <Router>
      
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </Router>
  )
}

export default App