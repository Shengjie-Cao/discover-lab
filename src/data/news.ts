export type NewsTag = "Paper" | "Award" | "Talk" | "Open-source";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  tag: NewsTag;
  summary: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    slug: "icml-2024-accepted",
    title: "Paper Accepted at ICML 2024",
    date: "2024-05-15",
    tag: "Paper",
    summary: "Our paper on fair and robust machine learning has been accepted at ICML 2024.",
    content:
      "We are excited to announce that our paper 'Placeholder Title: Towards Fair and Robust Machine Learning' has been accepted at ICML 2024. Congratulations to all co-authors! The paper proposes a novel framework for ensuring fairness constraints while maintaining model robustness.",
  },
  {
    slug: "best-paper-award",
    title: "Best Paper Award at ACL 2024",
    date: "2024-04-20",
    tag: "Award",
    summary: "Alice Chen received the Best Paper Award at ACL 2024 for her work on LLM reasoning.",
    content:
      "PhD student Alice Chen received the Best Paper Award at ACL 2024 for her work on chain-of-thought reasoning in large language models. This recognition highlights the innovative approach to improving reasoning capabilities in LLMs developed in our lab.",
  },
  {
    slug: "open-source-toolkit",
    title: "Fair ML Toolkit Released on GitHub",
    date: "2024-03-10",
    tag: "Open-source",
    summary: "We have open-sourced our Fair ML Toolkit for bias detection and mitigation.",
    content:
      "We are pleased to release our Fair ML Toolkit, a comprehensive Python library for detecting and mitigating bias in machine learning models. The toolkit supports multiple fairness metrics and debiasing algorithms. Check it out on our GitHub page.",
  },
  {
    slug: "invited-talk-stanford",
    title: "Invited Talk at Stanford AI Seminar",
    date: "2024-02-05",
    tag: "Talk",
    summary: "Prof. Jane Doe gave an invited talk on trustworthy AI at Stanford's AI Seminar.",
    content:
      "Prof. Jane Doe delivered an invited talk titled 'Building Trustworthy AI Systems: From Theory to Practice' at Stanford University's AI Seminar series. The talk covered recent advances in fairness, robustness, and interpretability of AI systems.",
  },
  {
    slug: "neurips-2024-papers",
    title: "Two Papers Accepted at NeurIPS 2024",
    date: "2024-06-01",
    tag: "Paper",
    summary: "Two of our papers have been accepted at NeurIPS 2024.",
    content:
      "We are thrilled to share that two papers from our group have been accepted at NeurIPS 2024. The papers cover distributed optimization and privacy-preserving federated learning. Congratulations to all team members involved!",
  },
];
