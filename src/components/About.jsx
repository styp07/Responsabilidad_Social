import { aboutSection } from "../data/posts";
import { Camera, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            {aboutSection.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {aboutSection.description}
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Camera size={16} className="mr-2 text-orange-500" />4 sesiones
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-orange-500" />
              Colombia, Bogota (Bosa Porvenir)
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={aboutSection.image}
            alt="Sobre mí"
            className="w-full h-96 object-contain rounded-none shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-amber-500 opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
