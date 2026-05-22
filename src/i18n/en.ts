export const en = {
  nav: {
    performance: "Performance",
    comparison: "Comparison",
    specs: "Technical Data",
    downloads: "Downloads",
    quote: "Request Quote",
    contact: "Contact",
    blog: "Blog",
  },
  hero: {
    badge: "Industrial Fire Protection",
    title1: "Non-Combustible",
    title2: "Mineral Core",
    title3: "Panels.",
    description:
      "Rockwool sandwich panels provide the highest fire safety rating (A1/A2) and exceptional acoustic insulation for industrial warehouses, clean rooms, and public buildings.",
    cta: "Technical Datasheets",
    certified: "Certified for Euroclass Standards",
  },
  specs: {
    label: "Core Specifications",
    title: "Technical Matrix & Conductivity Tables",
    description:
      "Our panels are manufactured using automated continuous lines, ensuring consistent density and structural bonding between the steel skins and the mineral fiber core.",
    card1: {
      title: "Thermal Conductivity",
      description:
        "Optimized mineral fiber orientation provides a stable lambda value.",
      value: "λ = 0.038 - 0.042 W/m·K",
    },
    card2: {
      title: "Fire Resistance",
      description:
        "Integrity and Insulation (EI) tested under European standard EN 1363-1.",
      value: "EI 30 - EI 240 (min)",
    },
    card3: {
      title: "Panel Thickness",
      description:
        "Wide range of options to meet specific U-value requirements.",
      value: "Range: 50mm to 200mm",
    },
    table: {
      title: "Performance Table: U-Value vs Thickness",
      th1: "Thickness (mm)",
      th2: "Weight (kg/m²)",
      th3: "U-Value (W/m²K)",
      th4: "Fire Rating (EI)",
      th5: "Sound Ins. (dB)",
    },
  },
  comparison: {
    label: "Material Comparison",
    title: "Why choose Rockwool for high-risk projects?",
    metrics: {
      fire: "Fire Safety",
      thermal: "Thermal Insulation",
      acoustic: "Acoustic Damping",
    },
    pur: {
      name: "PUR / Polyurethane",
      desc: "Excellent thermal insulator, but extremely vulnerable to fire. Releases toxic fumes during combustion.",
      fire: "Critical",
      thermal: "Optimal",
    },
    pir: {
      name: "PIR / Polyisocyanurate",
      desc: "Improved version of PUR with better flame retardancy, but still categorized as combustible.",
      fire: "Moderate",
      thermal: "Excellent",
    },
    rockwool: {
      name: "Rockwool / Mineral Wool",
      desc: "The only non-combustible solution. Melting point above 1,000°C. Zero toxic smoke.",
      fire: "Maximum (A1)",
      acoustic: "Best in Class",
      badge: "Recommended",
    },
  },
  downloads: {
    title: "Resource Library",
    desc: "Access CAD details, technical sheets, and fire certificates.",
    portalBtn: "Access Portal",
    files: {
      catalog: { name: "General Catalog 2024", size: "12.4 MB" },
      fire: { name: "Fire Performance EI240", size: "3.1 MB" },
      dwg: { name: "DWG Installation Details", size: "45.0 MB" },
      tool: { name: "U-Value Calculation Tool", size: "1.2 MB" },
    },
  },
  footer: {
    desc: "Leading provider of certified mineral wool core sandwich panels for global industrial projects. We focus on fire safety and structural longevity.",
    navTitle: "Navigation",
    networkTitle: "Network",
    contactTitle: "Contact Us",
    contactLabel: "Quick technical inquiry:",
    emailPlaceholder: "Professional Email",
    submitBtn: "Submit",
    copyright: "© 2024 Rockwool Panel Sandwich Ltd. All Technical Rights Reserved.",
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Technical Terms", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
  meta: {
    title: "Rockwool Sandwich Panel | Engineering & Technical Portal",
    description:
      "Non-combustible mineral core sandwich panels with A1/A2 fire rating. Technical data, certifications and CAD resources for engineers.",
  },
  notFound: {
    title: "Page not found",
    desc: "The page you are looking for does not exist or has been moved.",
    btn: "Back to Home",
  },
  performance: {
    label: "Technical Performance",
    title: "Engineering Data & Thermal Performance",
    desc: "Detailed technical specifications for Rockwool mineral wool sandwich panels used in industrial and public building applications.",
    metrics: [
      { value: "0.038", unit: "W/m·K", label: "Thermal Conductivity", desc: "Stable lambda value across the full thickness range." },
      { value: "1000", unit: "°C", label: "Melting Point", desc: "Non-combustible core with Euroclass A1 fire rating." },
      { value: "240", unit: "min", label: "Max Fire Rating", desc: "EI 240 integrity and insulation under EN 1363-1." },
      { value: "200", unit: "mm", label: "Max Thickness", desc: "Available from 50mm to 200mm for any U-value target." },
    ],
    features: {
      label: "Why it matters",
      title: "Built for the most demanding environments",
      desc: "Rockwool panels are the only sandwich panel solution classified as non-combustible. They are used in hospitals, logistics hubs, cold stores, and clean rooms worldwide.",
      cta: "View full spec table",
      items: [
        { title: "Euroclass A1 / A2 rated", desc: "The highest fire classification under EN 13501-1. No contribution to fire, no smoke, no burning droplets." },
        { title: "Acoustic performance", desc: "Mineral fiber core provides superior sound insulation compared to PUR or PIR alternatives." },
        { title: "Dimensional stability", desc: "No thermal bridging. Core remains stable under repeated thermal cycling from -30°C to +250°C." },
        { title: "Continuous production lines", desc: "Automated manufacturing ensures consistent density and bonding across every panel." },
      ],
    },
  },
} as const;

export type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationKeys = DeepString<typeof en>;