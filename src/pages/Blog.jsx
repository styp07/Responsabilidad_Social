import Header from "../components/Header";

const sesiones = [
  {
    id: 1,
    titulo: "Sesión 1 - Introducción a la IA",
    video: "https://www.youtube.com/embed/5qap5aO4i9A",
    imagen: "/images/sesion1.jpg",
    texto:
      "En esta sesión los estudiantes conocieron qué es la inteligencia artificial, sus usos cotidianos y cómo puede ayudarlos en la vida escolar.",
  },
  {
    id: 2,
    titulo: "Sesión 2 - Navegadores y búsqueda con IA",
    video: "https://www.youtube.com/embed/vTIIMJ9tUc8",
    imagen: "/images/sesion2.jpg",
    texto:
      "Exploramos cómo buscar información confiable usando IA como Bing Chat o ChatGPT.",
  },
];

const Blog = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-900 min-h-screen text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-orange-400 text-center">
            Mi Blog - Sesiones de Aprendizaje
          </h1>

          {sesiones.map((s) => (
            <article key={s.id} className="mb-16 border-b border-white/20 pb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {s.titulo}
              </h2>

              {s.video && (
                <div className="mb-6 aspect-video">
                  <iframe
                    className="w-full h-full rounded-md"
                    src={s.video}
                    title={`Video de ${s.titulo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {s.imagen && (
                <img
                  src={s.imagen}
                  alt={s.titulo}
                  className="mb-4 w-full h-auto rounded shadow-lg"
                />
              )}

              <p className="text-white/90 text-lg leading-relaxed">{s.texto}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
