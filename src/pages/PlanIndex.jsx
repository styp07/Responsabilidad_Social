import { Link } from "react-router-dom";
import { problematicas } from "../data/problematicas";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlanIndex = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto py-20 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Problematica y plan de acción
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Descubre las problemáticas más importantes y las soluciones
            propuestas para construir un futuro mejor
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Problemáticas Identificadas
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cada problemática ha sido cuidadosamente analizada con propuestas
            concretas de acción y seguimiento
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problematicas.map((item, index) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Card Header with Number */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {item.titulo}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {item.descripcion}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/plan/${item.id}`}
                    className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold group-hover:shadow-lg"
                  >
                    Ver Detalle
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <div className="text-sm text-gray-400">
                    Problema {index + 1}
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <section className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {problematicas.length}
              </h3>
              <p className="text-gray-600">Problemáticas Identificadas</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Soluciones Propuestas</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Seguimiento Continuo</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tienes una propuesta de mejora?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Tu participación es fundamental para el éxito de nuestro plan de
              acción
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Contáctanos
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlanIndex;
