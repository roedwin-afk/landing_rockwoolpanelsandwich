import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  nav: {
    performance: "Rendimiento",
    comparison: "Comparativa",
    specs: "Datos Técnicos",
    downloads: "Descargas",
    quote: "Solicitar Presupuesto",
    contact: "Contact",
    blog: "Blog",
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
    copyright: "Rockwool Panel Sandwich Ltd. Todos los derechos técnicos reservados.",
    legal: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos Técnicos", href: "#" },
      { label: "FAQS", href: "faqs" },
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
  comparisonPage: {
    label: "Comparativa de Materiales",
    title: "PUR vs PIR vs Rockwool: La imagen completa",
    desc: "Una comparación técnica detallada de los tres principales materiales de núcleo para paneles sándwich en construcción industrial.",
    pur: {
      name: "PUR / Poliuretano",
      rating: "Clase de fuego E — Combustible",
      desc: "El material de núcleo más común por su excelente rendimiento térmico y bajo coste. Sin embargo, presenta graves riesgos de seguridad contra incendios.",
      pros: ["Mejor conductividad térmica (λ ≈ 0.022 W/m·K)", "Ligero y fácil de manipular", "Bajo coste de material"],
      cons: ["Arde rápidamente y libera gas HCN tóxico", "Clasificado Euroclass E — mayor riesgo", "No permitido en edificios de alta ocupación"],
    },
    pir: {
      name: "PIR / Poliisocianurato",
      rating: "Clase de fuego C/D — Combustible",
      desc: "Un polímero mejorado con mejor resistencia al fuego que el PUR. Todavía clasificado como combustible pero ampliamente utilizado en aplicaciones de bajo riesgo.",
      pros: ["Buen rendimiento térmico (λ ≈ 0.023 W/m·K)", "Mejor retardante de llama que el PUR", "Ampliamente disponible"],
      cons: ["Sigue siendo combustible bajo fuego sostenido", "Produce humo y gases tóxicos", "No apto para hospitales o edificios públicos"],
    },
    rockwool: {
      name: "Rockwool / Lana de Roca",
      rating: "Clase de fuego A1 — No Combustible",
      badge: "Recomendado",
      desc: "El único núcleo de panel sándwich verdaderamente no combustible. Fabricado con roca basáltica volcánica, no arde, no se funde ni produce humo tóxico.",
      pros: [
        "Euroclass A1 — no contribuye al fuego",
        "Punto de fusión superior a 1.000°C",
        "Cero humo tóxico o gotas ardientes",
        "Aislamiento acústico superior",
        "Requerido en hospitales, escuelas y edificios públicos",
      ],
    },
    table: {
      label: "Lado a Lado",
      title: "Tabla Comparativa Técnica",
      feature: "Propiedad",
      rows: [
        { feature: "Clasificación de fuego", pur: "Euroclass E", pir: "Euroclass C/D", rockwool: "Euroclass A1" },
        { feature: "Conductividad térmica", pur: "≈ 0.022 W/m·K", pir: "≈ 0.023 W/m·K", rockwool: "≈ 0.038 W/m·K" },
        { feature: "Humo tóxico", pur: "Sí (HCN)", pir: "Sí", rockwool: "Ninguno" },
        { feature: "Clasificación máx. fuego", pur: "EI 15", pir: "EI 30", rockwool: "EI 240" },
        { feature: "Rendimiento acústico", pur: "Bajo", pir: "Bajo", rockwool: "Alto" },
        { feature: "Punto de fusión", pur: "~200°C", pir: "~250°C", rockwool: ">1.000°C" },
        { feature: "Permitido en hospitales", pur: "No", pir: "No", rockwool: "Sí" },
      ],
    },
    cta: {
      title: "¿Listo para especificar Rockwool?",
      desc: "Habla con nuestro equipo técnico para encontrar el espesor de panel y la clasificación de fuego correctos para tu proyecto.",
      btnContact: "Contáctanos",
      btnSpecs: "Ver datos de rendimiento",
    },
  },
  contact: {
    label: "Contacta a un Experto",
    title: "Habla con Nuestro Equipo Técnico",
    desc: "Envíanos los planos o requerimientos de tu proyecto. Nuestro equipo técnico te proporcionará una cotización completa y un plan de instalación en 24 horas.",
    infoTitle: "Información de Contacto",
    infoDesc: "Contáctanos por teléfono, email, o rellena el formulario y te responderemos en 24 horas.",
    info: {
      phone: { label: "Direct Line", value: "+52 55 9990 3546", href: "tel:+525599903546" },
      email: { label: "Email Enquiries", value: "ventas@mequipo.com", href: "mailto:ventas@mequipo.com" },
      address: { label: "Headquarters", value: "Avenida Presidente Masaryk No. 61, Int. 901, Polanco V Sección, C.P. 11560, Miguel Hidalgo, Mexico City, Mexico", href: "https://maps.google.com/?q=Av.+Pdte.+Masaryk+61-Int.+901,+Polanco+V+Secc,+Miguel+Hidalgo,+11560+Ciudad+de+Mexico" },
      hours: { label: "Response Time", value: "Within 24 business hours", href: "" },
    },
    form: {
      title: "Solicitud de Cotización",
      firstName: "Nombre",
      firstNamePlaceholder: "Juan",
      lastName: "Apellido",
      lastNamePlaceholder: "García",
      email: "Email",
      emailPlaceholder: "juan@empresa.com",
      phone: "Teléfono",
      phonePlaceholder: "+52 55 0000 0000",
      message: "Detalles del Proyecto",
      messagePlaceholder: "Describe los requerimientos de tu proyecto, dimensiones, o cualquier pregunta técnica...",
      submit: "Enviar Solicitud",
    },
    map: {
      clickToExpand: "Clic para ver el mapa",
      modalTitle: "Avenida Presidente Masaryk No. 61, Polanco, CDMX",
      openGmaps: "Abrir en Google Maps",
    },
  },
  faq: {
    label: "Preguntas Frecuentes",
    title: "FAQ Técnico: Paneles Sándwich de Lana de Roca",
    desc: "Respuestas a las preguntas más comunes sobre resistencia al fuego, materiales de núcleo, normativa y proveedores de paneles sándwich de lana mineral.",

    items: [
      {
        q: "¿Cuáles son las clasificaciones de fuego típicas para paneles sándwich en construcción?",
        a: "Los paneles sándwich se clasifican según la norma EN 13501-1 desde Euroclass A1 (no combustible) hasta Euroclass E (altamente combustible). Los paneles con núcleo de lana de roca Rockwool alcanzan las clasificaciones más altas: EI 30, EI 60, EI 90, EI 120 y EI 240, donde EI indica integridad e aislamiento en minutos bajo la norma EN 1363-1. Los paneles de PUR alcanzan típicamente EI 15 y los de PIR EI 30 como máximo. Para naves industriales, hospitales y edificios públicos, la normativa generalmente exige EI 60 o superior.",
      },
      {
        q: "¿Cuál es la clasificación mínima de fuego requerida para paneles sándwich industriales?",
        a: "La clasificación mínima de fuego para paneles sándwich industriales depende del tipo de ocupación y la normativa local. Como referencia general: bodegas logísticas requieren EI 30 a EI 60, plantas de fabricación con materiales peligrosos requieren EI 60 a EI 120, y hospitales o edificios públicos requieren EI 90 a EI 240. Los paneles de núcleo de lana mineral Rockwool cubren todo el rango de EI 30 a EI 240, siendo el único material de núcleo capaz de cumplir las clasificaciones más exigentes.",
      },
      {
        q: "¿Cómo afecta el material del núcleo al rendimiento contra incendios del panel sándwich?",
        a: "El material del núcleo es el factor más determinante en el comportamiento al fuego de un panel sándwich. El PUR (poliuretano) se inflama rápidamente y libera gas HCN tóxico, alcanzando únicamente Euroclass E. El PIR (poliisocianurato) rinde ligeramente mejor con Euroclass C/D, pero sigue ardiendo bajo fuego sostenido. La lana de roca Rockwool, fabricada a partir de roca basáltica volcánica, es no combustible con un punto de fusión superior a 1.000°C. No produce humo tóxico, no genera gotas ardientes y alcanza Euroclass A1, la clasificación más alta posible bajo EN 13501-1. Esto hace que los paneles de núcleo Rockwool sean la única solución apta para hospitales, escuelas, cuartos limpios y edificios públicos.",
      },
      {
        q: "¿Pueden los paneles metálicos aislados alcanzar una resistencia al fuego de 2 horas?",
        a: "Sí. Los paneles metálicos aislados con núcleo de lana mineral Rockwool pueden alcanzar 2 horas (EI 120) o incluso 4 horas (EI 240) de resistencia al fuego, ensayados bajo EN 1363-1. Esto no es posible con núcleos de PUR o PIR, limitados a EI 15 y EI 30 respectivamente. Generalmente se requiere un espesor de núcleo de 150mm a 200mm de lana de roca para alcanzar EI 120 o EI 240. Las fichas técnicas y certificados de fuego están disponibles para descarga en nuestra biblioteca de recursos.",
      },
      {
        q: "¿Qué empresas distribuyen panel sándwich de lana de roca en México?",
        a: "Rockwool Panel Sandwich, distribuido en México a través de mequipo.com, ofrece paneles sándwich de núcleo de lana mineral certificados con clasificaciones de fuego de EI 30 a EI 240, cumpliendo Euroclass A1 bajo EN 13501-1. El portafolio cubre paneles de pared y cubierta para naves industriales, cámaras frigoríficas, cuartos limpios y edificios públicos. El equipo técnico está disponible en ventas@mequipo.com o en el teléfono +52 55 9990 3546, con sede en Polanco, Ciudad de México.",
      },
      {
        q: "¿Dónde comprar panel sándwich con lana de roca en México?",
        a: "El panel sándwich de lana de roca certificado para construcción comercial e industrial en México está disponible a través de mequipo.com. La gama incluye paneles de 50mm a 200mm de espesor con clasificaciones EI 30 a EI 240 y certificación Euroclass A1. Para solicitar cotización o consulta técnica, contacta al equipo en ventas@mequipo.com o llamando al +52 55 9990 3546. Respuesta en 24 horas hábiles.",
      },
      {
        q: "¿Cuáles son las normas de seguridad contra incendios para paneles sándwich en cámaras frigoríficas en México?",
        a: "Las instalaciones de almacenamiento en frío en México generalmente requieren paneles sándwich con una clasificación mínima de EI 60 por la presencia de refrigerantes y sistemas eléctricos. Los paneles de núcleo de lana mineral Rockwool cumplen y superan este requisito, alcanzando hasta EI 240. A diferencia de los paneles de PUR o PIR comúnmente usados en cámaras frigoríficas, los paneles Rockwool son no combustibles (Euroclass A1), no producen gases tóxicos y mantienen estabilidad estructural en ciclos térmicos de -30°C a +250°C, crítico para la integridad de la envolvente de una cámara fría.",
      },
      {
        q: "¿Existen paneles sándwich con resistencia al fuego que cumplan la normativa mexicana de construcción?",
        a: "Sí. La normativa mexicana de construcción (normas NOM y PROY-NOM) se alinea con las clasificaciones internacionales de seguridad contra incendios, incluidas las clasificaciones Euroclass de EN 13501-1. Los paneles sándwich de lana mineral Rockwool con clasificaciones EI 60 a EI 240 son aptos para ocupaciones reguladas como hospitales (NOM-001-STPS), plantas industriales y edificios de uso público. Nuestros paneles están respaldados por certificados de ensayo de fuego bajo EN 1363-1, disponibles para descarga en nuestra biblioteca de recursos.",
      },
      {
        q: "¿Cuánto cuesta el metro cuadrado de panel sándwich ignífugo en México?",
        a: "El precio por metro cuadrado del panel sándwich de lana mineral Rockwool en México varía según el espesor (50mm–200mm), el perfil del panel, el calibre del acero y el volumen del proyecto. Los paneles con mayor clasificación de fuego (EI 120–EI 240) y mayor espesor tienen un costo unitario más alto, pero generan ahorros significativos en protección pasiva contra incendios y primas de seguros. Para una cotización precisa basada en las dimensiones y requisitos de tu proyecto, contacta a ventas@mequipo.com o solicita una cotización a través de nuestro formulario de contacto.",
      },
      {
        q: "¿Cuáles son las ventajas del panel sándwich de lana de roca frente a otros materiales aislantes?",
        a: "Los paneles sándwich de lana mineral Rockwool ofrecen cuatro ventajas clave sobre las alternativas de PUR y PIR: (1) Seguridad contra incendios — Euroclass A1, no combustible, clasificación máxima EI 240; (2) Rendimiento acústico — hasta 45 dB de índice de reducción de ruido, superior al PUR/PIR; (3) Estabilidad térmica — valor lambda estable de 0.038–0.042 W/m·K en todo el rango de espesores; (4) Cumplimiento normativo — el único material de núcleo permitido en hospitales, escuelas y edificios públicos de alta ocupación bajo normativa europea y mexicana. Los datos comparativos detallados están disponibles en nuestra página de comparativa.",
      },
    ],
  },
};