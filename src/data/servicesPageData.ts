export interface GalleryProjectItem {
  id: string;
  title: string;
  displayTitle: string; // empty string for items without center text (like butter sneaker)
  hoverTitle?: string;
  categories: string[];
  src: string;
  caption: string;
}

export const WORK_CATEGORIES = [
  "COMMERCIAL",
  "FOOD ART",
  "INSTALLATION + EVENT",
  "LARGE SCALE",
  "PORTRAIT",
] as const;

export type WorkCategory = (typeof WORK_CATEGORIES)[number] | "ALL";

export const GALLERY_PROJECTS: GalleryProjectItem[] = [
  {
    id: "espn",
    title: "ESPN",
    displayTitle: "ESPN",
    categories: ["COMMERCIAL", "PORTRAIT", "LARGE SCALE"],
    src: "/assets/jessie-work/01-espn.jpg",
    caption:
      "US Open 50th Anniversary — Court Artwork & Cultural Commercial Direction",
  },
  {
    id: "grubhub",
    title: "GRUBHUB",
    displayTitle: "GRUBHUB",
    categories: ["FOOD ART", "INSTALLATION + EVENT"],
    src: "/assets/jessie-work/02-grubhub.jpg",
    caption:
      "Surreal Silverware Mandala Art Installation for Corporate Headquarters",
  },
  {
    id: "mtv",
    title: "MTV",
    displayTitle: "MTV",
    categories: ["PORTRAIT", "COMMERCIAL", "FOOD ART"],
    src: "/assets/jessie-work/03-mtv.jpg",
    caption:
      "Miley Cyrus Portrait Sculpted from Mixed Media, Chains & Guitar Ephemera",
  },
  {
    id: "specialized",
    title: "SPECIALIZED",
    displayTitle: "SPECIALIZED",
    categories: ["COMMERCIAL", "LARGE SCALE", "PORTRAIT"],
    src: "/assets/jessie-work/04-specialized.jpg",
    caption:
      "Mountain Valley Large-Scale Canvas Portrait & Commercial Campaign",
  },
  {
    id: "walmart",
    title: "WALMART",
    displayTitle: "WALMART",
    categories: ["INSTALLATION + EVENT", "COMMERCIAL"],
    src: "/assets/jessie-work/05-walmart.jpg",
    caption:
      "Chromatically Curated Object Wall Art Installation & Experiential Architecture",
  },
  {
    id: "marvel",
    title: "MARVEL x M&M",
    displayTitle: "MARVEL x M&M",
    categories: ["FOOD ART", "COMMERCIAL", "PORTRAIT"],
    src: "/assets/jessie-work/06-marvel.jpg",
    caption:
      "Guardians of the Galaxy Edible Art Mosaic Directed with Candy Media",
  },
  {
    id: "butter-sneaker",
    title: "AIR FORCE 1",
    displayTitle: "AIR FORCE 1",
    categories: ["FOOD ART"],
    src: "/assets/jessie-work/07-butter-sneaker.jpg",
    caption:
      "Air Force 1 Sculpted Pure Butter Sneaker for Bleacher Report & Food Art",
  },
  {
    id: "making-it",
    title: "MAKING IT",
    displayTitle: "MAKING IT",
    categories: ["INSTALLATION + EVENT", "COMMERCIAL"],
    src: "/assets/jessie-work/08-making-it.jpg",
    caption:
      "NBC 'Making It' Architectural Translucent Spatial Installation",
  },
  {
    id: "american-express",
    title: "AMERICAN EXPRESS",
    displayTitle: "AMERICAN EXPRESS",
    categories: ["COMMERCIAL", "FOOD ART"],
    src: "/assets/jessie-work/09-american-express.jpg",
    caption:
      "Coffee Dust & Macro Particle Commercial Direction for AmEx",
  },
  {
    id: "joe-fresh",
    title: "JOE FRESH",
    displayTitle: "JOE FRESH",
    categories: ["COMMERCIAL"],
    src: "/assets/jessie-work/10-joe-fresh.jpg",
    caption:
      "Illustrated Line-Art Apparel Campaign & Commercial Direction",
  },
  {
    id: "gap",
    title: "GAP",
    displayTitle: "GAP",
    categories: ["COMMERCIAL", "INSTALLATION + EVENT"],
    src: "/assets/jessie-work/11-gap.jpg",
    caption:
      "Deconstructed Denim Typography System & Heritage Brand Direction",
  },
  {
    id: "dramamine",
    title: "DRAMAMINE",
    displayTitle: "DRAMAMINE",
    categories: ["COMMERCIAL", "INSTALLATION + EVENT"],
    src: "/assets/jessie-work/12-dramamine.jpg",
    caption:
      "Repurposed Airline Sick Bag Puffer Jacket & Cultural PR Stunt",
  },
];
