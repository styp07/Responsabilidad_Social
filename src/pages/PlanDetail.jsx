import { useParams, useNavigate } from "react-router-dom";
import { problematicas } from "../data/problematicas";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = problematicas.find((p) => p.id === id);

  if (!plan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Header />
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Problemática no encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, no pudimos encontrar la problemática que buscas.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Volver atrás
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const secciones = Object.entries(plan.contenido);
  const currentIndex = problematicas.findIndex((p) => p.id === id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-6xl mx-auto py-20 px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-white text-opacity-90 hover:text-opacity-100 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al Plan de Acción
            </button>
          </nav>

          {/* Title and Description */}
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4">
                Problema #{String(currentIndex + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 h-px bg-white bg-opacity-30"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {plan.titulo}
            </h1>

            <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl">
              {plan.descripcion}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-32 -translate-y-32">
          <div className="w-full h-full bg-white rounded-full opacity-5"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 transform -translate-x-24 translate-y-24">
          <div className="w-full h-full bg-white rounded-full opacity-5"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-4">
        {/* Content Analysis Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Análisis Detallado
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estudio completo de la problemática con todos los aspectos
              relevantes
            </p>
          </div>

          <div className="grid gap-8">
            {secciones.map(([seccion, texto], idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Section Header */}
                <div className="bg-gradient-to-r from-gray-50 to-orange-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <span className="text-orange-600 font-bold text-lg">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {seccion}
                    </h3>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-8">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                      {texto}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20"></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Action Plan Section */}
        {plan.planAccion && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Plan de Acción - 4 Semanas
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Estrategia estructurada para abordar la problemática de manera
                efectiva
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {plan.planAccion.map((semana, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group relative"
                >
                  {/* Week Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {semana.semana}
                          </h3>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>

                  {/* Week Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {semana.objetivo}
                    </h4>

                    <div className="space-y-3">
                      {semana.actividades.map((actividad, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">
                            {actividad}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 group-hover:opacity-80"
                      style={{
                        width: `${((idx + 1) / plan.planAccion.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navigation Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ¿Necesitas más información?
              </h3>
              <p className="text-gray-600">
                Explora otras problemáticas o regresa al plan principal
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Volver al Índice
              </button>

              <button
                onClick={() => navigate("/")}
                className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold"
              >
                Inicio
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlanDetail;
