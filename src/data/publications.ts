export type PublicationType = "Conference" | "Journal" | "Preprint" | "Patent";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  pdfUrl?: string;
  doiUrl?: string;
  codeUrl?: string;
  bibtex: string;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Placeholder Title: Towards Fair and Robust Machine Learning",
    authors: ["Jane Doe", "Carol Wang", "Collaborator A"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2024,
    type: "Conference",
    pdfUrl: "#",
    doiUrl: "#",
    codeUrl: "#",
    bibtex: `@inproceedings{doe2024fair,
  title={Placeholder Title: Towards Fair and Robust Machine Learning},
  author={Doe, Jane and Wang, Carol and A, Collaborator},
  booktitle={ICML},
  year={2024}
}`,
  },
  {
    id: "pub-2",
    title: "Placeholder Title: Efficient Distributed Optimization for Deep Networks",
    authors: ["Jane Doe", "Grace Liu", "Collaborator B"],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2024,
    type: "Conference",
    pdfUrl: "#",
    doiUrl: "#",
    bibtex: `@inproceedings{doe2024efficient,
  title={Placeholder Title: Efficient Distributed Optimization for Deep Networks},
  author={Doe, Jane and Liu, Grace and B, Collaborator},
  booktitle={NeurIPS},
  year={2024}
}`,
  },
  {
    id: "pub-3",
    title: "Placeholder Title: Reasoning in Large Language Models via Chain-of-Thought",
    authors: ["Alice Chen", "Jane Doe"],
    venue: "Association for Computational Linguistics (ACL)",
    year: 2024,
    type: "Conference",
    pdfUrl: "#",
    doiUrl: "#",
    codeUrl: "#",
    bibtex: `@inproceedings{chen2024reasoning,
  title={Placeholder Title: Reasoning in Large Language Models via Chain-of-Thought},
  author={Chen, Alice and Doe, Jane},
  booktitle={ACL},
  year={2024}
}`,
  },
  {
    id: "pub-4",
    title: "Placeholder Title: Knowledge Graph Construction from Scientific Text",
    authors: ["Emma Zhang", "Alice Chen", "Jane Doe"],
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    year: 2023,
    type: "Journal",
    doiUrl: "#",
    bibtex: `@article{zhang2023knowledge,
  title={Placeholder Title: Knowledge Graph Construction from Scientific Text},
  author={Zhang, Emma and Chen, Alice and Doe, Jane},
  journal={IEEE TKDE},
  year={2023}
}`,
  },
  {
    id: "pub-5",
    title: "Placeholder Title: Self-supervised 3D Scene Understanding",
    authors: ["Bob Smith", "Jane Doe", "Collaborator C"],
    venue: "Computer Vision and Pattern Recognition (CVPR)",
    year: 2023,
    type: "Conference",
    pdfUrl: "#",
    codeUrl: "#",
    bibtex: `@inproceedings{smith2023self,
  title={Placeholder Title: Self-supervised 3D Scene Understanding},
  author={Smith, Bob and Doe, Jane and C, Collaborator},
  booktitle={CVPR},
  year={2023}
}`,
  },
  {
    id: "pub-6",
    title: "Placeholder Title: Accessible Interaction Techniques for AR Environments",
    authors: ["David Lee", "Jane Doe"],
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    year: 2023,
    type: "Conference",
    pdfUrl: "#",
    bibtex: `@inproceedings{lee2023accessible,
  title={Placeholder Title: Accessible Interaction Techniques for AR Environments},
  author={Lee, David and Doe, Jane},
  booktitle={CHI},
  year={2023}
}`,
  },
  {
    id: "pub-7",
    title: "Placeholder Title: Privacy-Preserving Federated Learning Survey",
    authors: ["Jane Doe", "Collaborator D"],
    venue: "arXiv preprint",
    year: 2024,
    type: "Preprint",
    pdfUrl: "#",
    bibtex: `@article{doe2024privacy,
  title={Placeholder Title: Privacy-Preserving Federated Learning Survey},
  author={Doe, Jane and D, Collaborator},
  journal={arXiv preprint},
  year={2024}
}`,
  },
  {
    id: "pub-8",
    title: "Placeholder Title: Neural Architecture for Edge Deployment",
    authors: ["Grace Liu", "Jane Doe"],
    venue: "Journal of Machine Learning Research (JMLR)",
    year: 2022,
    type: "Journal",
    doiUrl: "#",
    bibtex: `@article{liu2022neural,
  title={Placeholder Title: Neural Architecture for Edge Deployment},
  author={Liu, Grace and Doe, Jane},
  journal={JMLR},
  year={2022}
}`,
  },
];
