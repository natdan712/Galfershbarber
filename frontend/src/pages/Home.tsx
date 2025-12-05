import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface User {
  email: string;
  role: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="navbar-barberia shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="title-barberia">✂️ GALFERSH BARBER</div>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card: Punto de Venta */}
          <div className="card-barberia cursor-pointer hover:shadow-2xl hover:border-yellow-400 transition"
            onClick={() => navigate('/punto-venta')}
          >
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Punto de Venta</h3>
            <p className="text-gray-400">Registra cortes, pagos y puntos</p>
          </div>

          {/* Card: Dashboard Admin */}
          <div className="card-barberia cursor-pointer hover:shadow-2xl hover:border-yellow-400 transition"
            onClick={() => navigate('/dashboard')}
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Dashboard</h3>
            <p className="text-gray-400">Reportes, empleados y citas</p>
          </div>

          {/* Card: Próximamente */}
          <div className="card-barberia opacity-50 cursor-not-allowed">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Agendar Citas</h3>
            <p className="text-gray-400">Próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
