import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sesiones = [
  {
    id: 1,
    titulo: "Sesión 1 - Introducción a la IA",
    video:
      "https://drive.google.com/file/d/1IP6uCpGXHmoT1OATbPDpV-eTlcEhKzm7/preview", // Reemplaza con la URL del video real
    fecha: "11 de Junio, 2025",
    duracion: "44 min",
    descripcion:
      "En esta sesión los estudiantes exploraron qué son los dispositivos digitales, cómo funcionan los sistemas operativos y de qué manera estos forman la base para utilizar tecnología con inteligencia.",

    puntosClaves: [
      "Identificación y tipos de dispositivos digitales (computadores, tablets, móviles)",
      "Funciones principales de un sistema operativo y su importancia",
      "Ejemplos de tareas cotidianas gestionadas por el sistema operativo",
      "Relación entre sistemas operativos y el uso de herramientas con IA",
    ],

    preguntasFrecuentes: [
      {
        pregunta: "¿Qué es un dispositivo digital?",
        respuesta:
          "Es un equipo electrónico que procesa información, como un computador, teléfono inteligente o tablet, y permite ejecutar aplicaciones o programas.",
      },
      {
        pregunta: "¿Qué hace un sistema operativo?",
        respuesta:
          "Es el software que permite que los dispositivos digitales funcionen, gestionando los recursos como memoria, aplicaciones, archivos y conexiones.",
      },
      {
        pregunta:
          "¿Por qué es importante conocer esto antes de usar herramientas con IA?",
        respuesta:
          "Porque entender cómo funciona tu equipo te permite usar mejor las herramientas tecnológicas y resolver problemas básicos sin depender de otros.",
      },
    ],

    asistentes: [
      "Nikoll Montejo",
      "Ana María Gállego cortés",
      "Jhon jairo Ortiz Hernández",
      "Maria paula ortiz",
      "Majito Ramirez",
      "María José Ramírez",
      "Johanna Patiño",
      "Ana Lucia Ramirez Gallego",
      "Federico Fonseca",
      "Ginger Monterrosa",
      "Gloria Patiño",
      "Saray Patiño",
      "Luz Aida Garcia",
      "Javier Andres Ramirez",
      "Gloria Lucia Caldas",
      "Angela Montejo",
    ],
  },
  {
    id: 2,
    titulo: "Sesión 2 - Navegadores y búsqueda con IA",
    video:
      "https://drive.google.com/file/d/1RHRQmiRGhwidonotoWAvW_hpugUpql1M/preview", // Reemplaza con la URL del video real
    fecha: "16 de Junio, 2025",
    duracion: "25 min",
    descripcion:
      "Exploramos cómo utilizar navegadores y motores de búsqueda de forma segura y eficiente, apoyándonos en herramientas de inteligencia artificial como Bing Chat y ChatGPT para encontrar información confiable y útil.",

    puntosClaves: [
      "Principios básicos del uso de navegadores web",
      "Técnicas de búsqueda efectiva asistida por IA",
      "Reconocimiento de sitios confiables y verificación de fuentes",
      "Comparación entre buscadores tradicionales y aquellos potenciados con IA",
    ],

    preguntasFrecuentes: [
      {
        pregunta: "¿Cómo puedo hacer búsquedas más precisas con IA?",
        respuesta:
          "Puedes usar preguntas claras, específicas y abiertas. Herramientas como Bing Chat o ChatGPT entienden mejor cuando explicas tu intención o das contexto.",
      },
      {
        pregunta: "¿Cómo sé si un sitio web es confiable?",
        respuesta:
          "Revisa que tenga autor identificado, enlaces a fuentes verificadas, uso correcto del lenguaje y que pertenezca a instituciones reconocidas (.edu, .org, .gov).",
      },
      {
        pregunta: "¿Es seguro usar IA para investigar?",
        respuesta:
          "Sí, siempre que uses plataformas confiables, y contrastes la información obtenida con otras fuentes. La IA te guía, pero tú decides qué es útil y veraz.",
      },
    ],
    asistentes: [
      "Federico Fonseca",
      "Gloria Patiñó",
      "Jhon Jairo Ortiz",
      "Johanna Patiño",
      "Kevin Duarte",
      "Maria Paula Ortiz",
      "Natalia Ramirez",
      "Saray Patiño",
    ],
  },
  {
    id: 3,
    titulo: "Sesión 3 - Creación de contenido con IA",
    video: "",
    fecha: "18 de Junio, 2025",
    duracion: "40 min",
    descripcion:
      "Aprendimos a utilizar herramientas de inteligencia artificial para mejorar la forma en que nos comunicamos digitalmente: redactar textos claros, expresar ideas con apoyo de IA y mantener siempre nuestra voz personal.",

    puntosClaves: [
      "Herramientas de IA para mejorar la redacción y el lenguaje",
      "Cómo estructurar ideas con ayuda de IA para correos, ensayos y presentaciones",
      "Prácticas para mantener la autenticidad en la escritura",
      "Reflexión sobre el rol de la IA en la expresión y el pensamiento crítico",
    ],

    preguntasFrecuentes: [
      {
        pregunta: "¿Qué herramientas puedo usar para escribir mejor con IA?",
        respuesta:
          "Puedes usar plataformas como ChatGPT, Grammarly o QuillBot para ayudarte a organizar ideas, corregir errores o mejorar el estilo de tus textos.",
      },
      {
        pregunta: "¿La IA puede escribir por mí?",
        respuesta:
          "La IA puede ayudarte a redactar, pero tu aporte personal es clave. La autenticidad, tus ideas y tu estilo son insustituibles.",
      },
      {
        pregunta: "¿Cómo saber si lo que escribí con IA sigue siendo mío?",
        respuesta:
          "Cuando revisas, adaptas y aportas tu propia visión al texto generado por IA, sigues siendo el autor. La IA es una herramienta, no un reemplazo.",
      },
    ],
    asistentes: ["Sofía Mendoza", "Iván Torres"],
  },
  {
    id: 4,
    titulo: "Sesión 4 - Futuro de la IA y proyecto final",
    video: "",
    fecha: "21 de Junio, 2025",
    duracion: "40 min",
    descripcion:
      "Cerramos el curso aplicando todo lo aprendido mediante el uso de plataformas educativas con inteligencia artificial. Los estudiantes presentaron proyectos donde demostraron cómo la IA puede apoyar el aprendizaje autónomo y responsable.",

    puntosClaves: [
      "Exploración de plataformas educativas con IA integrada (Duolingo, Khan Academy, Grammarly)",
      "Aplicación práctica de herramientas IA en tareas reales",
      "Presentación de proyectos estudiantiles con enfoque tecnológico",
      "Reflexión final sobre aprendizajes y oportunidades futuras con IA",
    ],

    preguntasFrecuentes: [
      {
        pregunta: "¿Qué plataformas puedo usar para seguir aprendiendo con IA?",
        respuesta:
          "Puedes usar Khan Academy para matemáticas y ciencias, Duolingo para idiomas, y Grammarly para mejorar tu escritura, todas con funciones potenciadas por IA.",
      },
      {
        pregunta: "¿Cómo hice mi proyecto con IA?",
        respuesta:
          "Usé una herramienta IA para organizar ideas, investigar temas, generar contenido y presentar una propuesta que resolviera un problema real.",
      },
      {
        pregunta: "¿Qué viene después del curso?",
        respuesta:
          "Ahora puedes seguir aprendiendo de forma autónoma, explorar nuevas herramientas, y aplicar la IA en tu día a día de manera ética y creativa.",
      },
    ],
    asistentes: ["Sofía Mendoza", "Iván Torres"],
  },
];

const Blog = () => {
  const [mostrarListaId, setMostrarListaId] = useState(null);

  const handleVerAsistentes = (sesionId) => {
    setMostrarListaId((prevId) => (prevId === sesionId ? null : sesionId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
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
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm opacity-90">Sesiones Formativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">150</div>
              <div className="text-sm opacity-90">Minutos de Aprendizaje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm opacity-90">Temas Fundamentales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">
                Estudiantes Participantes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-16 px-4">
        <div className="space-y-20">
          {sesiones.map((sesion, index) => (
            <article
              key={sesion.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Article Header */}
              <div className="bg-gradient-to-r from-gray-50 to-orange-50 px-8 py-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        Sesión {sesion.id}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {sesion.fecha}
                      </span>
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
                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {sesion.descripcion}
                </p>
                {/* Video */}
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
                  {/* Puntos Clave */}
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

                  {/* Preguntas Frecuentes */}
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
                <div className="mt-8 text-center">
                  <button
                    onClick={() => handleVerAsistentes(sesion.id)}
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Ver Lista de Asistentes
                  </button>
                </div>
                {/* Mostrar lista si aplica */}
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
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
