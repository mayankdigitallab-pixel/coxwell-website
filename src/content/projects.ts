export type ProjectCategory =
  | "Sports"
  | "Transit"
  | "Civic"
  | "Commercial"
  | "Industrial"
  | "Agriculture";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  system: string;
  area: string;
  cls: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "jln",
    title: "Stadium roof canopy",
    location: "Delhi · 2023",
    category: "Sports",
    system: "X-Fix",
    area: "18,000 m²",
    cls: "pic-blue stripes-h",
  },
  {
    slug: "metro",
    title: "Metro interchange",
    location: "Bengaluru · 2024",
    category: "Transit",
    system: "Multicell",
    area: "4,200 m²",
    cls: "pic-orange stripes-d",
  },
  {
    slug: "green",
    title: "Commercial nursery",
    location: "Pune · 2022",
    category: "Agriculture",
    system: "Static Sheet",
    area: "9,800 m²",
    cls: "pic-warm stripes-v",
  },
  {
    slug: "auro",
    title: "Cultural pavilion",
    location: "Auroville · 2024",
    category: "Civic",
    system: "Vivid",
    area: "1,400 m²",
    cls: "pic-mixed stripes-d",
  },
  {
    slug: "mum",
    title: "Airport walkway canopy",
    location: "Western India · 2023",
    category: "Transit",
    system: "Spry",
    area: "12,400 m²",
    cls: "pic-cool stripes-h",
  },
  {
    slug: "bvb",
    title: "Coliseum atrium",
    location: "Hyderabad · 2024",
    category: "Civic",
    system: "Multicell",
    area: "2,600 m²",
    cls: "pic-blue stripes-h",
  },
  {
    slug: "tata",
    title: "Steel works canopy",
    location: "Jamshedpur · 2022",
    category: "Industrial",
    system: "X-Fix",
    area: "22,000 m²",
    cls: "pic-dark stripes-h",
  },
  {
    slug: "inf",
    title: "Tech campus façade",
    location: "Pune · 2024",
    category: "Commercial",
    system: "Prism",
    area: "3,800 m²",
    cls: "pic-light stripes-thin",
  },
  {
    slug: "leh",
    title: "Visitor canopy",
    location: "Leh · 2023",
    category: "Transit",
    system: "Snapwall",
    area: "1,900 m²",
    cls: "pic-warm stripes-h",
  },
];

