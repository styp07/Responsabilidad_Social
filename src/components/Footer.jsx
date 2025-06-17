import { Mail, MapPin, Linkedin, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Descripción */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <Globe size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold">Jairo Styp Rodriguez Patiño</h3>
          </div>
          <p className="text-gray-400">
            Promovemos el aprendizaje digital a través de sesiones prácticas
            sobre inteligencia artificial, herramientas tecnológicas y
            habilidades del futuro.
          </p>
        </div>

        {/* Servicios o enlaces útiles */}
        <div>
          <h4 className="font-medium mb-6 text-lg">Recursos</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-orange-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Sesiones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Material de Apoyo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Proyectos Finales
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-medium mb-6 text-lg">Contacto</h4>
          <div className="text-gray-400 space-y-3">
            <p className="flex items-center">
              <MapPin size={16} className="mr-2" /> Bogotá, Colombia
            </p>
            <p className="flex items-center">
              <Mail size={16} className="mr-2" />{" "}
              jairo.rodriguez-p@uniminuto.edu.co
            </p>
            <div className="flex space-x-4 pt-4">
              {[Linkedin, Youtube, Globe].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-orange-600 rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
        <p>
          &copy; Jairo Styp Rodriguez Patiño. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
