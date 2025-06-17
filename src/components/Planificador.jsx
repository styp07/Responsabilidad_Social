import { X } from "lucide-react";

const contenido = {
  "Problemática Identificada": `
La comunidad educativa del colegio Ciudadela Educativa de Bosa ha identificado un creciente desinterés académico y una limitada participación estudiantil en actividades formativas extracurriculares. Esta situación refleja una desconexión entre el entorno familiar, el contexto social del sector y las oportunidades educativas disponibles.
  `,
  "Análisis a Nivel Local": `
A nivel local, se evidencia un creciente desinterés por parte de los estudiantes hacia las actividades académicas y formativas. En el colegio Ciudadela Educativa de Bosa, docentes y orientadores han manifestado preocupación frente a la baja participación en clase, la apatía frente al aprendizaje y la limitada motivación por el logro académico. Este comportamiento está asociado a factores como la falta de acompañamiento familiar, el uso excesivo de dispositivos electrónicos con fines recreativos y la escasa identificación de los jóvenes con su proyecto de vida escolar. Esta situación pone en riesgo la permanencia de los estudiantes en el sistema educativo y debilita los procesos de formación integral en la comunidad.
`,
  "Análisis a Nivel Nacional": `
En Colombia, el Ministerio de Educación ha reportado altos niveles de deserción escolar en zonas urbanas marginales. La falta de inversión sostenida en programas de acompañamiento psicosocial, y la limitada articulación con las familias, son factores que replican la problemática observada en Bosa a nivel nacional.
  `,
  "Análisis a Nivel Global": `
La UNESCO ha advertido sobre las consecuencias del abandono escolar en contextos urbanos desfavorecidos en América Latina. La desmotivación estudiantil, la sobrecarga económica familiar y la falta de espacios seguros para la formación integral son problemáticas comunes que afectan a millones de niños y adolescentes en la región.
  `,
  "Causas Históricas, Socioculturales, Políticas y Económicas": `
Históricamente, la localidad de Bosa ha estado marcada por procesos de urbanización acelerada sin planificación adecuada. Esto ha generado una segregación social que limita el acceso equitativo a educación de calidad. Políticamente, la falta de continuidad en los planes de inversión educativa y la poca participación de la comunidad han perpetuado esta situación.
  `,
  "Efectos Sociales, Culturales, Ambientales y Políticos": `
Los efectos son múltiples: aumento en la deserción escolar, menor posibilidad de movilidad social, pérdida de identidad cultural juvenil y desconfianza hacia las instituciones. A nivel político, esta desconexión genera apatía ciudadana y menor participación en procesos democráticos desde temprana edad.
  `,
};

const Planificador = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center px-4">
      <div className="bg-white max-w-5xl w-full p-6 overflow-y-auto max-h-[90vh] rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Plan de Acción - Problemáticas
        </h2>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Este planificador ha sido construido para apoyar a los{" "}
          <strong>
            padres de familia y estudiantes del colegio Ciudadela Educativa de
            Bosa
          </strong>
          , ofreciendo un análisis completo de una problemática prioritaria, con
          enfoque territorial, social y educativo.
        </p>

        {Object.entries(contenido).map(([titulo, texto], idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-medium text-orange-600 mb-2">
              {titulo}
            </h3>
            <div className="bg-gray-50 border border-gray-300 p-4 rounded text-gray-800 whitespace-pre-wrap leading-relaxed">
              {texto.trim()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planificador;
