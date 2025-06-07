import { useState } from "react";
import { Menu, X, Camera } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Inicio", "Plan de acción", "Blog", "Galeria", "Contacto"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <Camera className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold text-white">
              Jairo Styp Rodriguez Patiño
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/20 px-4 py-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-3 text-white/90 hover:text-orange-400 transition-colors text-lg"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
