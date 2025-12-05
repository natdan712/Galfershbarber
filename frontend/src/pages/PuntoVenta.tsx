import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Servicio {
  nombre: string;
  precio: number;
  puntos: number;
}

export default function PuntoVenta() {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState('');
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [metodoPago, setMetodoPago] = useState('efectivo');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const agregarServicio = () => {
    setServicios([...servicios, { nombre: 'Corte Clásico', precio: 25000, puntos: 25 }]);
  };

  const totalVenta = servicios.reduce((sum, s) => sum + s.precio, 0);
  const totalPuntos = servicios.reduce((sum, s) => sum + s.puntos, 0);

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="navbar-barberia shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="title-barberia">💳 PUNTO DE VENTA</div>
          <button onClick={() => navigate('/home')} className="btn-secondary">
            Atrás
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="card-barberia">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Nueva Venta</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Cliente</label>
                  <input
                    type="text"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    placeholder="Nombre o documento"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                  />
                </div>

                <button
                  onClick={agregarServicio}
                  className="btn-gold w-full"
                >
                  + Agregar Servicio
                </button>

                {servicios.length > 0 && (
                  <div className="bg-gray-700 rounded p-4">
                    <h4 className="text-yellow-500 font-bold mb-2">Servicios</h4>
                    {servicios.map((s, i) => (
                      <div key={i} className="flex justify-between text-gray-300 mb-2">
                        <span>{s.nombre}</span>
                        <span>${s.precio.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Método de Pago</label>
                  <select
                    value={metodoPago}
                    onChange={(e) => setMetodoPago(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                  >
                    <option>efectivo</option>
                    <option>nequi</option>
                    <option>daviplata</option>
                    <option>llave</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="card-barberia h-fit">
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Resumen</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Total Venta:</span>
                <span className="font-bold text-yellow-400">${totalVenta.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Puntos:</span>
                <span className="font-bold text-yellow-400">{totalPuntos}</span>
              </div>
              <div className="flex justify-between">
                <span>Método:</span>
                <span className="capitalize">{metodoPago}</span>
              </div>
              <hr className="border-gray-600 my-4" />
              <button className="btn-primary w-full">
                Completar Venta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
