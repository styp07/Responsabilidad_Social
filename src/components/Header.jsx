import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Importar Link
import { Menu, X, Camera } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Definir rutas reales
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Plan de acción", path: "/plan" },
    { name: "Blog", path: "/blog" },
    { name: "Galeria", path: "/galeria" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-100 rounded-full overflow-hidden">
              <img
                src="/Responsabilidad_Social/Profile.jpg" // Ruta de la imagen del perfil
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-white">
              Jairo Styp Rodriguez Patiño
            </h1>
          </div>

          {/* Navegación en escritorio */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-white/90 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Botón hamburguesa en móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/20 px-4 py-6">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
              className="block py-3 text-white/90 hover:text-orange-400 transition-colors text-lg"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
