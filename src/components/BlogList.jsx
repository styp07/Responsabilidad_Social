import { useState } from "react";
import { Search, User, Heart, MapPin } from "lucide-react";
import { blogPosts } from "../data/posts";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["Todos", "Fotografía", "Viajes", "Retratos", "Paisajes"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Historias Visuales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada imagen cuenta una historia, cada momento capturado es una
            ventana al alma
          </p>
        </div>

        {/* Filtro */}
        <div className="mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative max-w-md w-full">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar historias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-none font-medium ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Lista */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/70 text-white px-4 py-2 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900 group-hover:text-orange-600">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User size={14} className="mr-2" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {post.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>{post.readTime}</span>
                    <span className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
