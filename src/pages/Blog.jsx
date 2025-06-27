import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sesiones from "../data/sesiones";

const Blog = () => {
  const [mostrarListaId, setMostrarListaId] = useState(null);
  const grupo1 = sesiones.slice(0, 2);
  const grupo2 = sesiones.slice(2, 4);

  const handleVerAsistentes = (sesionId) => {
    setMostrarListaId((prevId) => (prevId === sesionId ? null : sesionId));
  };

  const renderSesiones = (grupo) =>
    grupo.map((sesion) => (
      <article
        key={sesion.id}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div className="bg-gradient-to-r from-gray-50 to-orange-50 px-8 py-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center mb-2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                  Sesión {sesion.id}
                </span>
                <span className="text-gray-500 text-sm">{sesion.fecha}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {sesion.titulo}
              </h2>
            </div>
            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {sesion.duracion}
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {sesion.descripcion}
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Video de la Sesión
            </h3>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-inner">
              <iframe
                className="w-full h-full"
                src={sesion.video}
                title={`Video de ${sesion.titulo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 text-orange-500 mr-2"
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
                Puntos Clave
              </h3>
              <ul className="space-y-3">
                {sesion.puntosClaves.map((punto, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{punto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                {sesion.preguntasFrecuentes.map((faq, idx) => (
                  <details key={idx} className="group">
                    <summary className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-300 list-none flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 transform group-open:rotate-90 transition-transform duration-300"
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
                      {faq.pregunta}
                    </summary>
                    <p className="mt-2 ml-6 text-gray-600 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-yellow-50 rounded-xl">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Reflexión:
            </h3>
            <p className="text-gray-700 leading-relaxed">{sesion.reflexion}</p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => handleVerAsistentes(sesion.id)}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Lista de Asistentes
            </button>
          </div>
          {mostrarListaId === sesion.id && (
            <div className="mt-6 bg-gray-800 p-4 rounded-xl text-white shadow">
              <h3 className="text-lg font-semibold mb-3">Asistentes:</h3>
              <ul className="list-disc list-inside space-y-1">
                {sesion.asistentes.map((nombre, index) => (
                  <li key={index}>{nombre}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    ));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto py-20 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Explorando la IA y la Tecnología
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Acompáñanos en este recorrido educativo donde aprendemos sobre
            dispositivos digitales, sistemas operativos y el poder transformador
            de la inteligencia artificial.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-16 px-4 space-y-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Grupo 1 - Fundamentos
          </h2>
          {renderSesiones(grupo1)}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12">
            Grupo 2 - Aplicación y Futuro
          </h2>
          {renderSesiones(grupo2)}
        </div>

        <section className="mt-24 p-8 bg-gradient-to-r from-indigo-100 to-purple-200 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Reflexión Final del Curso
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl">
            A lo largo de estas sesiones, exploramos juntos cómo la inteligencia
            artificial transforma nuestra forma de aprender, comunicarnos y
            resolver problemas. Este video recoge algunas reflexiones,
            aprendizajes y experiencias compartidas durante todo nuestro
            recorrido.
          </p>
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-inner">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/j1GgUckdLX4?si=veCClVhya23qxbRA"
              title="Reflexión Final"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
