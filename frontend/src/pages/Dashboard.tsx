import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="navbar-barberia shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="title-barberia">📊 DASHBOARD</div>
          <button onClick={() => navigate('/home')} className="btn-secondary">
            Atrás
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">Bienvenido al Panel de Administración</h2>
        <p className="text-gray-400">Aquí irán: reportes de empleados, ventas, inventario, etc.</p>
      </div>
    </div>
  );
}
