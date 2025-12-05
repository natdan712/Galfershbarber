import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PuntoVenta from './pages/PuntoVenta';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/punto-venta" element={<PuntoVenta />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
