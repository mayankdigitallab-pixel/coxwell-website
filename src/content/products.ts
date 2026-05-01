export type ProductFamily = "Innovative" | "Traditional";

export type Product = {
  slug: string;
  family: ProductFamily;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cls: string;
  perf: string[];
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "prism",
    family: "Innovative",
    title: "Prism",
    subtitle: "6‑layer prismatic · climate control",
    description:
      "Solar Screening for Climate Control™. A 6-layer prismatic structure with dual/tri-colour fusion that reflects summer heat and admits passive winter warmth.",
    tags: ["Façade", "Skylight", "High‑perf"],
    cls: "pic-orange stripes-d",
    perf: ["U=0.99 W/m²K", "16–25mm", "Up to 30% HVAC saving"],
    badge: "New",
  },
  {
    slug: "vivid",
    family: "Innovative",
    title: "Vivid",
    subtitle: "4‑layer · tri-colour fusion",
    description:
      "Daylight-Directional Louver Technology™. Three colours fused in one panel with a precision micro-louver matrix for dramatic façades and roofs.",
    tags: ["Façade", "Roof"],
    cls: "pic-mixed stripes-d",
    perf: ["Tri-colour fusion", "16–25mm", "25% HVAC saving"],
    badge: "New",
  },
  {
    slug: "snapwall",
    family: "Innovative",
    title: "Snapwall",
    subtitle: "10‑wall X-structure · click-lock",
    description:
      "The first polycarbonate system with a 10-wall X-structure. Click-Lock vertical glazing for modern façades — strength and colour in one panel.",
    tags: ["Façade", "Vertical glazing"],
    cls: "pic-blue stripes-v",
    perf: ["40mm · 10-wall", "U=0.99 W/m²K", "Fire-resistant"],
    badge: "New",
  },
  {
    slug: "multicell",
    family: "Traditional",
    title: "Multicell",
    subtitle: "Double-tooth interlock",
    description:
      "Premium-grade multiwall with a double-tooth interlocking system. Leak-proof, long-span, and engineered for diverse specifications at accessible cost.",
    tags: ["Roof", "Skylight", "Industrial"],
    cls: "pic-cool stripes-h",
    perf: ["6–30mm", "3-cell / 5-cell", "Up to 11.8m"],
  },
  {
    slug: "xfix",
    family: "Traditional",
    title: "X-Fix",
    subtitle: "7-layer · 5-wall",
    description:
      "The smartest X-structure you can afford. Seven-layer five-wall interlock for industrial roofs, public buildings and commercial sheds.",
    tags: ["Industrial", "Public", "Commercial"],
    cls: "pic-warm stripes-h",
    perf: ["16–25mm", "Dry-fit install", "10-yr warranty"],
  },
  {
    slug: "static",
    family: "Traditional",
    title: "Static Sheet",
    subtitle: "Solid · glass-replacement",
    description:
      "Glass-like transparency with 250× the impact strength of glass. Single-layer polycarbonate for façades, carports, greenhouses, and security glazing.",
    tags: ["Façade", "Carport", "Greenhouse"],
    cls: "pic-light stripes-thin",
    perf: ["1.5–12mm", "Up to 89% clarity", "UV both sides"],
  },
  {
    slug: "spry",
    family: "Traditional",
    title: "Spry",
    subtitle: "Twin-wall · time-tested",
    description:
      "The sheet behind iconic builds. Twin-wall multiwall with light-diffusing design — clarity without glare, insulation without weight.",
    tags: ["Roof", "Canopy", "Skylight"],
    cls: "pic-blue stripes-h",
    perf: ["6–12mm", "Twin-wall", "Up to 11.8m"],
  },
];

