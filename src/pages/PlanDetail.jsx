import { useParams, useNavigate } from "react-router-dom";
import { problematicas } from "../data/problematicas";

const PlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = problematicas.find((p) => p.id === id);

  if (!plan) {
    return <p className="p-6 text-red-600">Problemática no encontrada.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-orange-600 hover:underline"
      >
        ← Volver
      </button>

      <h1 className="text-3xl font-bold mb-4">{plan.titulo}</h1>
      <p className="text-lg text-gray-600 mb-8">{plan.descripcion}</p>

      {/* Secciones del contenido analítico */}
      {Object.entries(plan.contenido).map(([seccion, texto], idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            {seccion}
          </h3>
          <p className="bg-gray-50 p-4 border rounded text-gray-800 whitespace-pre-wrap leading-relaxed">
            {texto}
          </p>
        </div>
      ))}

      {/* 👇 Aquí aparece el plan de acción justo al final */}
      {plan.planAccion && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Plan de Acción - 4 Semanas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plan.planAccion.map((semana, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition"
              >
                <h3 className="text-orange-600 font-semibold text-lg mb-2">
                  {semana.semana}: {semana.objetivo}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {semana.actividades.map((actividad, i) => (
                    <li key={i}>{actividad}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanDetail;
