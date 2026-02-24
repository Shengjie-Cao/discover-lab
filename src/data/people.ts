export type PersonRole = "PI" | "PhD" | "Master" | "Undergrad" | "Alumni";

export interface Person {
  slug: string;
  name: string;
  role: PersonRole;
  photo?: string;
  keywords: string[];
  email?: string;
  website?: string;
  scholar?: string;
  bio: string;
  selectedPublications: string[];
  projects: string[];
}

export const people: Person[] = [
  {
    slug: "jane-doe",
    name: "Jane Doe",
    role: "PI",
    keywords: ["Machine Learning", "Optimization", "Trustworthy AI"],
    email: "janedoe@university.edu",
    website: "https://university.edu/~janedoe",
    scholar: "https://scholar.google.com",
    bio: "Dr. Jane Doe is an Associate Professor at (YOUR UNIVERSITY). She received her Ph.D. from a top university and has published extensively in machine learning and AI safety. Her work has been recognized with multiple best paper awards.",
    selectedPublications: ["pub-1", "pub-2"],
    projects: ["Trustworthy ML Framework", "Large-Scale Optimization"],
  },
  {
    slug: "alice-chen",
    name: "Alice Chen",
    role: "PhD",
    keywords: ["NLP", "LLMs", "Dialogue"],
    email: "alicechen@university.edu",
    scholar: "https://scholar.google.com",
    bio: "Alice is a third-year PhD student working on large language models and dialogue systems. She interned at a major tech company and has published at top NLP venues.",
    selectedPublications: ["pub-3"],
    projects: ["Conversational AI"],
  },
  {
    slug: "bob-smith",
    name: "Bob Smith",
    role: "PhD",
    keywords: ["Computer Vision", "3D Reconstruction", "Self-supervised"],
    email: "bobsmith@university.edu",
    bio: "Bob is a second-year PhD student focused on 3D scene understanding and self-supervised visual learning.",
    selectedPublications: ["pub-5"],
    projects: ["3D Scene Parsing"],
  },
  {
    slug: "carol-wang",
    name: "Carol Wang",
    role: "PhD",
    keywords: ["Fairness", "Explainability", "ML Safety"],
    bio: "Carol studies fairness and explainability in machine learning models, with a focus on high-stakes decision systems.",
    selectedPublications: ["pub-1"],
    projects: ["Fair ML Toolkit"],
  },
  {
    slug: "david-lee",
    name: "David Lee",
    role: "Master",
    keywords: ["HCI", "AR/VR", "User Studies"],
    bio: "David is a Master's student exploring augmented reality interaction techniques.",
    selectedPublications: [],
    projects: ["AR Navigation"],
  },
  {
    slug: "emma-zhang",
    name: "Emma Zhang",
    role: "Master",
    keywords: ["NLP", "Information Extraction", "Knowledge Graphs"],
    bio: "Emma works on knowledge graph construction from unstructured text.",
    selectedPublications: ["pub-4"],
    projects: ["Knowledge Graph Builder"],
  },
  {
    slug: "frank-johnson",
    name: "Frank Johnson",
    role: "Undergrad",
    keywords: ["Deep Learning", "Vision", "Robotics"],
    bio: "Frank is an undergraduate research assistant interested in vision-guided robotics.",
    selectedPublications: [],
    projects: ["Robot Perception"],
  },
  {
    slug: "grace-liu",
    name: "Grace Liu",
    role: "Alumni",
    keywords: ["Optimization", "Distributed Systems", "ML Systems"],
    bio: "Grace completed her PhD in 2023 and is now a research scientist at a leading AI lab.",
    selectedPublications: ["pub-2"],
    projects: ["Distributed Training Framework"],
  },
];

export const roleOrder: PersonRole[] = ["PI", "PhD", "Master", "Undergrad", "Alumni"];

export const roleLabels: Record<PersonRole, string> = {
  PI: "Principal Investigator",
  PhD: "PhD Students",
  Master: "Master's Students",
  Undergrad: "Undergraduate Researchers",
  Alumni: "Alumni",
};
