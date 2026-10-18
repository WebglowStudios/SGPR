import {
  CarouselRowData,
  FeatureItem,
  MasonryItem,
  ServiceItem,
  StatItem,
  ClientLogo,
  MarqueeItem,
} from "@/types";

export const CAROUSEL_ROWS: CarouselRowData[] = [
  {
    id: 1,
    category: "pr brand editorial",
    slides: [
      {
        src: "https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png",
        title: "Haute Couture Monogram",
        caption: "Editorial Brand Rollout & High-Fashion Direction",
        tag: "Fashion Editorial",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_829a5383dbfc408bb9900e2eeea1164af003.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_829a5383dbfc408bb9900e2eeea1164af003.jpg",
        title: "DEFI Global Billboard",
        caption: "OOH Campaign & Public Relations Placement",
        tag: "OOH / Media Placement",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_3e10e8c7eb254b6ca4646f986ace94ea~mv2.png/v1/fit/w_960,h_1156,q_90,enc_avif,quality_auto/99ea51_3e10e8c7eb254b6ca4646f986ace94ea~mv2.png",
        title: "Aguza 6,400 Glyphs",
        caption: "Custom Foundry Identity & Type System",
        tag: "Brand Typography",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_2f588ff352eb40fc9c55cc51f18e1cf3~mv2.png/v1/fit/w_960,h_1186,q_90,enc_avif,quality_auto/99ea51_2f588ff352eb40fc9c55cc51f18e1cf3~mv2.png",
        title: "Luxe Identity System",
        caption: "Comprehensive Visual Identity & Guidelines",
        tag: "Brand Identity",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_165d00cb4a6d4854bea046298cadadb9f003.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_165d00cb4a6d4854bea046298cadadb9f003.jpg",
        title: "National Cultural Campaign",
        caption: "Metropolitan PR Guerilla Rollout",
        tag: "PR Campaign",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_617778a8a48b4b81929ace5bb5163237~mv2.png/v1/fit/w_960,h_587,q_90,enc_avif,quality_auto/99ea51_617778a8a48b4b81929ace5bb5163237~mv2.png",
        title: "Monograph Direction",
        caption: "Print & Digital Monograph",
        tag: "Editorial",
      },
    ],
  },
  {
    id: 2,
    category: "pr brand spatial",
    slides: [
      {
        src: "https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png",
        title: "Next-Gen Visa Card",
        caption: "Fintech Global PR Launch & Card Architecture",
        tag: "Fintech / PR Launch",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_5953999bf0a7451ba34447a05b4413ee~mv2.png/v1/fit/w_960,h_587,q_90,enc_avif,quality_auto/99ea51_5953999bf0a7451ba34447a05b4413ee~mv2.png",
        title: "Smart Eyewear Hardware",
        caption: "Hardware Launch Strategy & Media Briefings",
        tag: "Spatial & Tech",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_75c0a8f0d9b049668d2cb16cf471161d~mv2.png/v1/fit/w_960,h_1520,q_90,enc_avif,quality_auto/99ea51_75c0a8f0d9b049668d2cb16cf471161d~mv2.png",
        title: "Zero-Knowledge Security",
        caption: "Web3 & Security Narrative Positioning",
        tag: "Protocol PR",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_9209e0789ede442aa0ade4ae46526091~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_9209e0789ede442aa0ade4ae46526091~mv2.png",
        title: "Dimension-X Worlds",
        caption: "3D Spatial Architecture & Brand World",
        tag: "Spatial Experience",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_9880199bd29143849a68ee6e9818e2c6~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_9880199bd29143849a68ee6e9818e2c6~mv2.png",
        title: "Sculptural Objects",
        caption: "Limited Edition Art Release PR",
        tag: "Art Direction",
      },
    ],
  },
  {
    id: 3,
    category: "pr brand spatial",
    slides: [
      {
        src: "https://static.wixstatic.com/media/99ea51_604fd69af67a4143b0afd305334ef9e5~mv2.png/v1/fit/w_960,h_1372,q_90,enc_avif,quality_auto/99ea51_604fd69af67a4143b0afd305334ef9e5~mv2.png",
        title: "Spotify Audio Identity",
        caption: "Streaming Giant Brand Strategy & Identity System",
        tag: "Brand Strategy",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg/v1/fit/w_960,h_624,q_90,enc_avif,quality_auto/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg",
        title: "Times Square Takeover",
        caption: "Flagship OOH PR Domination in New York",
        tag: "PR Domination",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_71bc2680b14342288faf549b9b780f7a~mv2.jpg/v1/fit/w_960,h_641,q_90,enc_avif,quality_auto/99ea51_71bc2680b14342288faf549b9b780f7a~mv2.jpg",
        title: "Metropolitan Mega-Billboard",
        caption: "Metropolitan Urban Advertising & Press Event",
        tag: "Urban OOH",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_d06f8cc826454746bf5751949af9c040~mv2.png/v1/fit/w_1440,h_608,q_90,enc_avif,quality_auto/99ea51_d06f8cc826454746bf5751949af9c040~mv2.png",
        title: "Kinetic Brand Motion",
        caption: "Digital Identity System & Animation Guidelines",
        tag: "Motion Identity",
      },
    ],
  },
  {
    id: 4,
    category: "pr brand editorial",
    slides: [
      {
        src: "https://static.wixstatic.com/media/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif",
        title: "Sky Mirror Installation",
        caption: "Surrealist Brand Installation & Campaign Visuals",
        tag: "Surrealist Campaign",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_c2e7f62ebbf24a7489258c68d5a78722~mv2.png/v1/fit/w_960,h_889,q_90,enc_avif,quality_auto/99ea51_c2e7f62ebbf24a7489258c68d5a78722~mv2.png",
        title: "iOS Modular Experience",
        caption: "Product PR & Consumer App Launch",
        tag: "Digital Product",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_e553f6d1093b47159c6a35d61326294b~mv2.png/v1/fit/w_960,h_889,q_90,enc_avif,quality_auto/99ea51_e553f6d1093b47159c6a35d61326294b~mv2.png",
        title: "Wetland Club Heavyweight Tote",
        caption: "Lifestyle Club Merchandising & Community PR",
        tag: "Lifestyle PR",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_62ab27f23dd9436faf6ebcc8ef6c2141~mv2.gif/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_62ab27f23dd9436faf6ebcc8ef6c2141~mv2.gif",
        title: "Fluid Motion UX",
        caption: "Haptic UX & Interactive Showreel",
        tag: "Interactive",
      },
    ],
  },
  {
    id: 5,
    category: "brand editorial",
    slides: [
      {
        src: "https://static.wixstatic.com/media/99ea51_28dca8ad185c4d6ca061de3cf4ef9e64~mv2.png/v1/fit/w_960,h_642,q_90,enc_avif,quality_auto/99ea51_28dca8ad185c4d6ca061de3cf4ef9e64~mv2.png",
        title: "SENSE Street Domination",
        caption: "Guerilla OOH Campaign & Fashion Week Launch",
        tag: "Fashion Week PR",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_ae5f9f99c21144cab66145518f5e2b98~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_ae5f9f99c21144cab66145518f5e2b98~mv2.png",
        title: "Scarlet Virgin Wool",
        caption: "Luxury Textile Packaging & Monogram Identity",
        tag: "Luxury Goods",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png",
        title: "Maison SENSE Flacon",
        caption: "Parfum Packaging & Global Beauty PR Rollout",
        tag: "Beauty PR",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_6f25bcac7a0c44369a9fbf4844edcf8b~mv2.png/v1/fit/w_960,h_1706,q_90,enc_avif,quality_auto/99ea51_6f25bcac7a0c44369a9fbf4844edcf8b~mv2.png",
        title: "Experimental Monograms",
        caption: "Bespoke Heraldry & Emblems",
        tag: "Identity",
      },
    ],
  },
  {
    id: 6,
    category: "spatial brand",
    slides: [
      {
        src: "https://static.wixstatic.com/media/99ea51_99934ec0bda34757a1553b183a773c5a~mv2.png/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_99934ec0bda34757a1553b183a773c5a~mv2.png",
        title: "Studio Display Monolith",
        caption: "Industrial Design Retrospective & Launch",
        tag: "Industrial Luxury",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_7930cb7cb9324790b3eef3be28b89519~mv2.png/v1/fit/w_1440,h_682,q_90,enc_avif,quality_auto/99ea51_7930cb7cb9324790b3eef3be28b89519~mv2.png",
        title: "Heritage Product Archive",
        caption: "Brand Repertoire & Product Suites",
        tag: "Packaging Suite",
      },
      {
        src: "https://static.wixstatic.com/media/99ea51_a647d095356347b5a69440d649244336~mv2.png/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_a647d095356347b5a69440d649244336~mv2.png",
        title: "Spatial Brand Pavilion",
        caption: "Experiential Brand Installation & Launch Gala",
        tag: "Spatial Gala",
      },
    ],
  },
];

export const MARQUEE_ITEMS_1: MarqueeItem[] = [
  { text: "ALL WORK" },
  { text: "SELECTED", em: "PR CASES" },
  { text: "BRAND WORLDS" },
  { text: "MUMBAI &", em: "BEYOND" },
  { text: "EDITORIAL DIRECTION" },
  { text: "ALL WORK" },
  { text: "SELECTED", em: "PR CASES" },
  { text: "BRAND WORLDS" },
  { text: "MUMBAI &", em: "BEYOND" },
  { text: "EDITORIAL DIRECTION" },
];

export const MARQUEE_ITEMS_2: MarqueeItem[] = [
  { text: "MEDIA PLACEMENTS" },
  { text: "EXECUTIVE", em: "POSITIONING" },
  { text: "HIGH JEWELRY" },
  { text: "CULTURE &", em: "COMMERCE" },
  { text: "MEDIA PLACEMENTS" },
  { text: "EXECUTIVE", em: "POSITIONING" },
  { text: "HIGH JEWELRY" },
  { text: "CULTURE &", em: "COMMERCE" },
];

export const FEATURE_GRID_ITEMS: {
  left: FeatureItem;
  middle: FeatureItem;
  stackedTop: FeatureItem;
  stackedBottom: FeatureItem;
} = {
  left: {
    src: "https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png",
    title: "The Hooded Muse",
    italicWord: "Vogue",
    caption: "Vogue India Digital Cover & Wardrobe Narrative",
    tag: "Cover Editorial",
  },
  middle: {
    src: "https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png",
    title: "Sensory Ephemera",
    caption: "Sensory Brand Architecture & Print Textures",
    tag: "Sensory Branding",
  },
  stackedTop: {
    src: "https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png",
    title: "Studio Monolith",
    caption: "Apple Hardware Launch Strategy & Editorial Placements",
    tag: "Hardware PR",
  },
  stackedBottom: {
    src: "https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png",
    title: "Botanical Essence",
    caption: "Organic Cosmetics Campaign & Influencer Kit",
    tag: "Beauty PR",
  },
};

export const MASONRY_COLUMNS: MasonryItem[][] = [
  // Column 1
  [
    {
      src: "https://static.wixstatic.com/media/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png/v1/fit/w_960,h_1431,q_90,enc_avif,quality_auto/99ea51_b806ac16c33141219557d5cddf0d16a1~mv2.png",
      title: "Cashmere Hood",
      italicWord: "AW26",
      caption: "Autumn/Winter Fashion Campaign & Runway Retrospect",
      tag: "Editorial Run",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg/v1/fit/w_960,h_624,q_90,enc_avif,quality_auto/99ea51_dd1cffc56fce4bb49de3562d23534801~mv2.jpg",
      title: "Midtown NYC Takeover",
      caption: "Global PR Announcement & International Press Feed",
      tag: "PR Announcement",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png/v1/fit/w_960,h_641,q_90,enc_avif,quality_auto/99ea51_6617df07a70840a7988bf26c7b6b7126~mv2.png",
      title: "Cerulean Geometric Steps",
      caption: "Mathematical Identity & Generative Design System",
      tag: "Generative Identity",
    },
  ],
  // Column 2
  [
    {
      src: "https://static.wixstatic.com/media/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7867ea4896394e909fbabbe76c286904~mv2.png",
      title: "Tactile Ephemera Suite",
      caption: "VIP Invitation Suites & Press Preview Kits",
      tag: "VIP Press Kit",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_1480f5dc2ad9446a86e7b49ec6528421~mv2.gif",
      title: "Daisy Meadow Reflection",
      caption: "Creative Direction for Device Product Launch",
      tag: "Product PR",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif/v1/fit/w_600,h_600,q_90,enc_avif,quality_auto/99ea51_07beaace81984750bf2b11865411c6bd~mv2.gif",
      title: "Amber Interactive Dock",
      caption: "Smart Hardware Prototype & Tech Media Campaign",
      tag: "Tech Hardware",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_avif,quality_auto/99ea51_385ae4ad76924814941abc139f42a665~mv2.jpg",
      title: "Underground Paste-Up Wall",
      caption: "Urban PR Street Takeover & Subcultural Buzz",
      tag: "Guerilla PR",
    },
  ],
  // Column 3
  [
    {
      src: "https://static.wixstatic.com/media/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png/v1/fit/w_960,h_665,q_90,enc_avif,quality_auto/99ea51_232f6304f79c46c49b6cbe87e144f365~mv2.png",
      title: "Obsidian Display Monolith",
      caption: "Minimalist Hardware Retrospective",
      tag: "Minimalist Luxury",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/99ea51_7f399233d1114fa4b20564882d91f337~mv2.png",
      title: "Maison SENSE Flacons",
      caption: "Bespoke Glassware & Perfumery PR",
      tag: "Perfumery PR",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif/v1/fit/w_600,h_338,q_90,enc_avif,quality_auto/99ea51_bd3bb571c3be428d9568642bb993383b~mv2.gif",
      title: "Luminescent Hourglass",
      caption: "Digital Artifact & NFT Launch Strategy",
      tag: "Digital Artifact",
    },
    {
      src: "https://static.wixstatic.com/media/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif/v1/fit/w_800,h_800,q_90,enc_avif,quality_auto/99ea51_20999418393d4e609e444a67a0fe5a84~mv2.gif",
      title: "Pink Peony Spring Gala",
      caption: "High Jewelry Spring Rollout & Haute Horlogerie",
      tag: "High Jewelry PR",
    },
  ],
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    num: "01",
    name: "Social Media Marketing",
    desc: "Content strategies, community management, and growth campaigns built for today's platforms. We make brands impossible to scroll past.",
    img: "/assets/services/01-social-media.jpg",
  },
  {
    num: "02",
    name: "Search Engine Optimisation",
    desc: "Data-driven SEO that puts your brand in front of the right audience at the right moment. Organic growth that compounds over time.",
    img: "/assets/services/02-seo.jpg",
  },
  {
    num: "03",
    name: "Website Development",
    desc: "Premium, conversion-focused websites that look as good as they perform. Every pixel purposeful.",
    img: "/assets/services/03-website-dev.jpg",
  },
  {
    num: "04",
    name: "Public Relations",
    desc: "Media placements, press releases, and influencer partnerships that build lasting credibility in the right rooms.",
    img: "/assets/services/04-public-relations.jpg",
  },
  {
    num: "05",
    name: "Brand Building",
    desc: "From positioning to identity — we build brands that people remember, trust, and talk about.",
    img: "/assets/services/05-brand-building.jpg",
  },
  {
    num: "06",
    name: "Designing",
    desc: "Visual work spanning print, digital, packaging, and motion. Every brand deserves to look exceptional.",
    img: "/assets/services/06-designing.jpg",
  },
];

export const ABOUT_STATS: StatItem[] = [
  {
    count: 50,
    label: "Brands Elevated",
    detail: "Culture, fashion & luxury",
  },
  {
    count: 6,
    label: "Years of Direction",
    detail: "Narratives that redefine industries",
  },
  {
    count: 200,
    label: "Tier-1 Placements",
    detail: "Vogue, GQ, Forbes & press",
  },
  {
    count: 0,
    label: "Select Engagements",
    detail: "Global Direction 2026",
    isAvailable: true,
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "Walmart",
    category: "Enterprise Retail",
    src: "/assets/logos/walmart.png",
    caption: "Global Retail & Enterprise Communications",
  },
  {
    name: "Sony Music",
    category: "Music & Entertainment",
    src: "/assets/logos/sony-music.png",
    caption: "Global Music & Entertainment Storytelling",
  },
  {
    name: "GAP",
    category: "Apparel & Fashion",
    src: "/assets/logos/gap.png",
    caption: "Heritage Apparel & Global Fashion Campaign Direction",
  },
  {
    name: "ESPN",
    category: "Broadcast & Sports Media",
    src: "/assets/logos/espn.png",
    caption: "Sports Media Broadcast & Digital Cultural Takeover",
  },
  {
    name: "American Express",
    category: "Financial Services",
    src: "/assets/logos/american-express.png",
    caption: "Global Financial Services & Premium Lifestyle Elevation",
  },
  {
    name: "MTV",
    category: "Youth Culture & TV",
    src: "/assets/logos/mtv.png",
    caption: "Global Youth Culture, Music & Television Direction",
  },
];
