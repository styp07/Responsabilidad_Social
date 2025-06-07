import { upcomingSection } from "../data/posts";
import { ArrowRight } from "lucide-react";

const Upcoming = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {upcomingSection.title}
          </h2>
          <p className="text-lg text-gray-600">
            Próximos workshops y expediciones fotográficas
          </p>
        </div>

        <div className="space-y-8">
          {upcomingSection.items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-48 h-32 object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-orange-600 font-medium">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors flex items-center">
                    Más información <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
