import { useNavigate } from "react-router-dom";
import { featuredPost } from "../data/posts";

const Hero = () => {
  const navigate = useNavigate(); // Hook para redirección

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featuredPost.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
          {featuredPost.title}
        </h1>

        {/* Subtítulo como imagen (si es logo) */}
        <p className="text-xl md:text-2xl font-light mb-4 text-orange-200 flex items-center justify-center gap-3">
          <img
            src={featuredPost.subtitle}
            alt="Logo Subtítulo"
            className="h-20"
          />
        </p>

        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
          {featuredPost.description}
        </p>

        {/* Botón que redirige a /plan */}
        <button
          onClick={() => navigate("/plan")}
          className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300 text-lg font-semibold tracking-wider"
        >
          {featuredPost.ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
