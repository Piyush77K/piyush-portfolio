import { Project, Skill, Hobby } from "./types";
import thumbnailImage from "./assets/images/regenerated_image_1780074708699.png";
import legendImage from "./assets/images/regenerated_image_1780042930827.jpg";
import illustrationImage from "./assets/images/regenerated_image_1780042721637.png";
import metroImage from "./assets/images/regenerated_image_1780731272625.jpg";
import iphoneImage from "./assets/images/regenerated_image_1780732277445.jpg";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    number: "01",
    title: "Thumbnails",
    category: "GRAPHIC DESIGN",
    year: "2024",
    description: "High-impact visual designs and custom layouts tailored for digital content creator streams and videos.",
    tags: ["PHOTOSHOP", "ILLUSTRATOR", "COMPOSITION"],
    image: thumbnailImage
  },
  {
    id: "proj-2",
    number: "02",
    title: "Illustrations",
    category: "VISUAL ART",
    year: "2024",
    description: "Detailed raster and vector artworks capturing dynamic character forms, environments, and concept boards.",
    tags: ["CHARACTER ART", "DIGITAL PAINTING", "CONCEPT"],
    image: illustrationImage
  },
  {
    id: "proj-3",
    number: "03",
    title: "Videos",
    category: "Video works",
    year: "23",
    description: "Dynamic video compilations and kinetic posters combining sound, rhythm, and sleek typography transitions.",
    tags: ["PREMIERE PRO", "AFTER EFFECTS", "SOUND SYNC"],
    videoUrl: "https://www.youtube.com/embed/88mkNmDDR9E",
    image: iphoneImage
  },
  {
    id: "proj-4",
    number: "04",
    title: "METRO",
    category: "SHORT FILM",
    year: "2026",
    description: "Trapped between expectations. An atmospheric and suspenseful short film directed, written, and acted by Piyush Tiwari, capturing the raw tension of transit.",
    tags: ["FILM DIRECTION", "CINEMATOGRAPHY", "ACTING", "VIDEO PRODUCTION"],
    videoUrl: "https://www.youtube.com/embed/zV8wjtsd_RM",
    image: metroImage
  }
];

export const skillsData: Skill[] = [
  { name: "Adobe Photoshop", level: 92, id: "skill-item-brand-identity" },
  { name: "Adobe Illustrator", level: 97, id: "skill-item-typography" },
  { name: "Adobe Premier Pro", level: 88, id: "skill-item-editorial-design" },
  { name: "Adobe After Effects", level: 74, id: "skill-item-motion-&-interaction" },
  { name: "Ai", level: 65, id: "skill-item-generative-/-code" }
];

export const toolsData: string[] = [
  "Illustrator",
  "Photoshop",
  "After Effects",
  "Premiere Pro",
  "AI"
];

export const hobbiesData: Hobby[] = [
  {
    id: "hob-1",
    title: "Gaming",
    description: "Immersive virtual worlds and interactive storytelling."
  },
  {
    id: "hob-2",
    title: "Photography",
    description: "Capturing urban landscapes, street narratives, and geometry."
  },
  {
    id: "hob-3",
    title: "Travel",
    description: "Exploring diverse cultures, local history, and landscapes."
  }
];
