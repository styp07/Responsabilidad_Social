const Newsletter = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Mantente Conectado
        </h2>
        <p className="text-orange-100 text-lg mb-12 leading-relaxed">
          Recibe las últimas historias, consejos fotográficos y noticias sobre
          próximos workshops directamente en tu correo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-6 py-4 rounded-none border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
          />
          <button className="bg-black text-white px-8 py-4 rounded-none hover:bg-gray-900 transition-colors font-medium">
            SUSCRIBIRSE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
