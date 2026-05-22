import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  nav: {
    performance: "Rendimiento",
    comparison: "Comparativa",
    specs: "Datos Técnicos",
    downloads: "Descargas",
    quote: "Solicitar Presupuesto",
    contact: "Contact",
  },
  hero: {
    badge: "Protección contra Incendios Industrial",
    title1: "Panel No",
    title2: "Combustible de",
    title3: "Lana de Roca.",
    description:
      "Los paneles sándwich de Rockwool ofrecen la más alta calificación de seguridad contra incendios (A1/A2) y un excepcional aislamiento acústico para naves industriales, salas blancas y edificios públicos.",
    cta: "Fichas Técnicas",
    certified: "Certificado para Estándares Euroclase",
  },
  specs: {
    label: "Especificaciones Principales",
    title: "Matriz Técnica y Tablas de Conductividad",
    description:
      "Nuestros paneles se fabrican en líneas continuas automatizadas, garantizando una densidad homogénea y una unión estructural entre las caras de acero y el núcleo de fibra mineral.",
    card1: {
      title: "Conductividad Térmica",
      description:
        "La orientación optimizada de la fibra mineral proporciona un valor lambda estable.",
      value: "λ = 0.038 - 0.042 W/m·K",
    },
    card2: {
      title: "Resistencia al Fuego",
      description:
        "Integridad y Aislamiento (EI) ensayado según la norma europea EN 1363-1.",
      value: "EI 30 - EI 240 (min)",
    },
    card3: {
      title: "Espesor del Panel",
      description:
        "Amplia gama de opciones para cumplir con los requisitos específicos de valor U.",
      value: "Rango: 50mm a 200mm",
    },
    table: {
      title: "Tabla de Rendimiento: Valor U vs Espesor",
      th1: "Espesor (mm)",
      th2: "Peso (kg/m²)",
      th3: "Valor U (W/m²K)",
      th4: "Resistencia al Fuego (EI)",
      th5: "Aislam. Acústico (dB)",
    },
  },
  comparison: {
    label: "Comparativa de Materiales",
    title: "¿Por qué elegir Rockwool en proyectos de alto riesgo?",
    metrics: {
      fire: "Seguridad contra incendios",
      thermal: "Aislamiento térmico",
      acoustic: "Absorción acústica",
    },
    pur: {
      name: "PUR / Poliuretano",
      desc: "Excelente aislante térmico, pero extremadamente vulnerable al fuego. Libera humos tóxicos en la combustión.",
      fire: "Crítico",
      thermal: "Óptimo",
    },
    pir: {
      name: "PIR / Poliisocianurato",
      desc: "Versión mejorada del PUR con mejor retardante de llama, pero sigue clasificado como combustible.",
      fire: "Moderado",
      thermal: "Excelente",
    },
    rockwool: {
      name: "Rockwool / Lana de Roca",
      desc: "La única solución no combustible. Punto de fusión superior a 1.000 °C. Cero humos tóxicos.",
      fire: "Máximo (A1)",
      acoustic: "Mejor de su clase",
      badge: "Recomendado",
    },
  },
  downloads: {
    title: "Biblioteca de Recursos",
    desc: "Accede a detalles CAD, fichas técnicas y certificados de incendio.",
    portalBtn: "Acceder al Portal",
    files: {
      catalog: { name: "Catálogo General 2024", size: "12.4 MB" },
      fire: { name: "Certificado EI240 Fuego", size: "3.1 MB" },
      dwg: { name: "Detalles de Instalación DWG", size: "45.0 MB" },
      tool: { name: "Herramienta Cálculo U-Value", size: "1.2 MB" },
    },
  },
  footer: {
    desc: "Proveedor líder de paneles sándwich de núcleo de lana mineral certificada para proyectos industriales globales. Nos enfocamos en seguridad contra incendios y longevidad estructural.",
    navTitle: "Navegación",
    networkTitle: "Red",
    contactTitle: "Contáctanos",
    contactLabel: "Consulta técnica rápida:",
    emailPlaceholder: "Email profesional",
    submitBtn: "Enviar",
    copyright: "© 2024 Rockwool Panel Sandwich Ltd. Todos los derechos técnicos reservados.",
    legal: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos Técnicos", href: "#" },
      { label: "Cumplimiento", href: "#" },
    ],
  },
  meta: {
    title: "Panel Sándwich Rockwool | Portal de Ingeniería y Técnico",
    description:
      "Paneles sándwich de núcleo mineral no combustible con clasificación de fuego A1/A2. Datos técnicos, certificaciones y recursos CAD para ingenieros.",
  },
  notFound: {
    title: "Página no encontrada",
    desc: "La página que buscas no existe o ha sido movida.",
    btn: "Volver al inicio",
  },
  performance: {
    label: "Rendimiento Técnico",
    title: "Datos de Ingeniería y Rendimiento Térmico",
    desc: "Especificaciones técnicas detalladas para paneles sándwich de lana mineral Rockwool utilizados en edificios industriales y públicos.",
    metrics: [
      { value: "0.038", unit: "W/m·K", label: "Conductividad Térmica", desc: "Valor lambda estable en todo el rango de espesores." },
      { value: "1000", unit: "°C", label: "Punto de Fusión", desc: "Núcleo no combustible con clasificación de fuego Euroclass A1." },
      { value: "240", unit: "min", label: "Clasificación Máx. Fuego", desc: "Integridad e aislamiento EI 240 bajo EN 1363-1." },
      { value: "200", unit: "mm", label: "Espesor Máximo", desc: "Disponible de 50mm a 200mm para cualquier objetivo de valor U." },
    ],
    features: {
      label: "Por qué importa",
      title: "Diseñado para los entornos más exigentes",
      desc: "Los paneles Rockwool son la única solución de panel sándwich clasificada como no combustible. Se utilizan en hospitales, centros logísticos, cámaras frigoríficas y salas blancas en todo el mundo.",
      cta: "Ver tabla de especificaciones completa",
      items: [
        { title: "Clasificación Euroclass A1 / A2", desc: "La más alta clasificación de fuego bajo EN 13501-1. Sin contribución al fuego, sin humo, sin gotas ardientes." },
        { title: "Rendimiento acústico", desc: "El núcleo de fibra mineral proporciona un aislamiento acústico superior en comparación con alternativas PUR o PIR." },
        { title: "Estabilidad dimensional", desc: "Sin puentes térmicos. El núcleo permanece estable bajo ciclos térmicos repetidos de -30°C a +250°C." },
        { title: "Líneas de producción continua", desc: "La fabricación automatizada garantiza densidad y unión consistentes en cada panel." },
      ],
    },
  },
};