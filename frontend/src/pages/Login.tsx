import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validación básica
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    // TODO: Aquí irá la llamada a la API de backend
    // Por ahora, simulamos un login exitoso
    console.log('Login intento:', { email, password });

    // Guardar token en localStorage (después lo haremos con el backend)
    localStorage.setItem('token', 'fake-token-123');
    localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));

    // Redirigir al dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Card de login */}
      <div className="relative z-10 w-full max-w-md">
        <div className="card-barberia">
          <div className="text-center mb-8">
            <h1 className="title-barberia">✂️ GALFERSH</h1>
            <p className="text-gray-400 text-sm mt-2">Barbería Premium</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-600 text-white p-3 rounded text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@galfersh.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-6"
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-4">
            Demo: usa cualquier email y contraseña
          </p>
        </div>
      </div>
    </div>
  );
}
