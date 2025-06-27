import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sesiones = [
  {
    id: 1,
    titulo: "Sesión 1 - Introducción a la IA",
    video:
      "https://drive.google.com/file/d/1IP6uCpGXHmoT1OATbPDpV-eTlcEhKzm7/preview",
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
    reflexion:
      "Esta sesión nos permitió comprender los conceptos base necesarios para aprovechar la tecnología con IA desde una perspectiva informada.",
  },
  {
    id: 2,
    titulo: "Sesión 2 - Navegadores y búsqueda con IA",
    video:
      "https://drive.google.com/file/d/1RHRQmiRGhwidonotoWAvW_hpugUpql1M/preview",
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
    reflexion:
      "Aplicamos técnicas de búsqueda responsable y descubrimos cómo la IA puede ayudarnos a encontrar información útil sin caer en desinformación.",
  },
  {
    id: 3,
    titulo: "Sesión 3 - Creación de contenido con IA",
    video:
      "https://drive.google.com/file/d/10iTzFls9BLB1AUt87qqiqCO6uTx_4msO/preview",
    fecha: "18 de Junio, 2025",
    duracion: "44 min",
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
    reflexion:
      "Vimos cómo la IA no sustituye nuestras ideas, sino que amplifica nuestra capacidad de comunicarlas con claridad y confianza.",
  },
  {
    id: 4,
    titulo: "Sesión 4 - Futuro de la IA y proyecto final",
    video:
      "https://drive.google.com/file/d/1S_MQNKJYy-8PDQQ7UJ1j1yEkhTHVN-OJ/preview",
    fecha: "21 de Junio, 2025",
    duracion: "+2 Horas",
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
    reflexion:
      "Esta última sesión nos deja el mensaje de que la IA no es solo futuro, es presente, y está en nuestras manos usarla con responsabilidad y creatividad para mejorar nuestro entorno.",
  },
];

export default sesiones;
