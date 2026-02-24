export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  publicationRefs: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "area-1",
    title: "Machine Learning & Optimization",
    description:
      "We develop novel machine learning algorithms and optimization techniques for large-scale data analysis, with a focus on theoretical guarantees and practical efficiency.",
    keywords: ["Deep Learning", "Convex Optimization", "Generalization", "Neural Architecture"],
    publicationRefs: ["pub-1", "pub-2"],
  },
  {
    id: "area-2",
    title: "Natural Language Processing",
    description:
      "Our NLP research spans language understanding, generation, and multimodal reasoning, aiming to build systems that communicate effectively with humans.",
    keywords: ["LLMs", "Semantic Parsing", "Dialogue Systems", "Multilingual"],
    publicationRefs: ["pub-3", "pub-4"],
  },
  {
    id: "area-3",
    title: "Computer Vision & Perception",
    description:
      "We explore visual recognition, 3D reconstruction, and scene understanding, bridging the gap between pixel-level data and semantic knowledge.",
    keywords: ["Object Detection", "3D Vision", "Video Understanding", "Self-supervised Learning"],
    publicationRefs: ["pub-5"],
  },
  {
    id: "area-4",
    title: "Human-Computer Interaction",
    description:
      "Our HCI research investigates novel interaction paradigms, accessibility tools, and user-centered design for emerging computing platforms.",
    keywords: ["AR/VR", "Accessibility", "User Studies", "Interaction Design"],
    publicationRefs: ["pub-6"],
  },
  {
    id: "area-5",
    title: "Trustworthy AI & Ethics",
    description:
      "We study fairness, interpretability, robustness, and privacy in AI systems, ensuring responsible deployment of intelligent technologies.",
    keywords: ["Fairness", "Explainability", "Robustness", "Differential Privacy"],
    publicationRefs: ["pub-1", "pub-3"],
  },
];
