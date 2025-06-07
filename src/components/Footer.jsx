import { Camera, Share2, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <Camera size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold">CANDELA CONCEDES</h3>
          </div>
          <p className="text-gray-400">
            Capturando momentos únicos y creando narrativas visuales que
            conectan con el alma humana.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-lg">Servicios</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-orange-400">
                Sesiones de Retrato
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Fotografía de Bodas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Workshops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Expediciones
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-lg">Contacto</h4>
          <div className="text-gray-400 space-y-3">
            <p>Barcelona, España</p>
            <p>hello@candelabarroso.com</p>
            <div className="flex space-x-4 pt-4">
              {[Share2, MessageCircle, Heart].map((Icon, i) => (
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

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>
          &copy; 2025 Candela Concedes Ruedo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
