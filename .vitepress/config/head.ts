import { metaData } from "./constants";
import type { HeadConfig } from "vitepress";

const head: HeadConfig[] = [
  ["meta", { name: "author", content: "Areskul" }],
  [
    "meta",
    {
      name: "keywords",
      content:
        "simpcicd, simp, cicd, typescript, continuous, delivery, integration, deployment"
    }
  ],
  ["link", { rel: "icon", type: "image/png", href: "/images/simp.png" }],

  ["meta", { name: "HandheldFriendly", content: "True" }],
  ["meta", { name: "MobileOptimized", content: "320" }],
  ["meta", { name: "theme-color", content: "#f28fbc" }],

  ["meta", { name: "twitter:card", content: "/images/simp_light.png" }],
  ["meta", { name: "twitter:site", content: metaData.site }],
  ["meta", { name: "twitter:title", value: metaData.title }],
  ["meta", { name: "twitter:description", value: metaData.description }],
  ["meta", { name: "twitter:image", content: metaData.image }],

  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: "en_US" }],
  ["meta", { property: "og:site", content: metaData.site }],
  ["meta", { property: "og:site_name", content: metaData.title }],
  ["meta", { property: "og:title", content: metaData.title }],
  ["meta", { property: "og:image", content: metaData.image }],
  ["meta", { property: "og:description", content: metaData.description }],

  ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
  [
    "link",
    {
      rel: "preconnect",
      crossorigin: "anonymous",
      href: "https://fonts.gstatic.com"
    }
  ],
  [
    "link",
    {
      href: "https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@200;400;500;600&display=swap",
      rel: "stylesheet"
    }
  ]
];

export default head;
