import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Handshake, FileText, Award, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { publications } from "@/data/publications";
import { news } from "@/data/news";
import SectionHeading from "@/components/shared/SectionHeading";

const highlights = [
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Cutting-edge work in machine learning, NLP, computer vision, and trustworthy AI.",
  },
  {
    icon: Award,
    title: "Key Results",
    description: "Multiple best paper awards and top-tier publications across premier venues.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Active partnerships with industry leaders and international research institutions.",
  },
];

export default function HomePage() {
  const featuredPubs = publications.slice(0, 6);
  const latestNews = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/40 to-background">
        <div className="container-narrow mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
            {siteConfig.groupName}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.department}, {siteConfig.university}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Join Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <FileText size={16} /> Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-y border-border bg-card">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-heading font-bold text-primary">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight cards */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <h.icon className="text-primary mb-4" size={28} />
                <h3 className="font-heading text-xl font-semibold text-card-foreground">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <SectionHeading title="Featured Publications" subtitle="Selected recent works from our group." />
          <div className="space-y-4">
            {featuredPubs.map((pub) => (
              <div key={pub.id} className="rounded-lg border border-border bg-card p-5 hover:shadow-sm transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body text-sm font-semibold text-card-foreground">{pub.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{pub.authors.join(", ")}</p>
                    <p className="text-xs text-muted-foreground">
                      {pub.venue}, {pub.year}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {pub.pdfUrl && (
                      <a href={pub.pdfUrl} className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground hover:opacity-80">
                        PDF
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a href={pub.codeUrl} className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground hover:opacity-80">
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all publications <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading title="Latest News" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow group"
              >
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground mb-3">
                  {item.tag}
                </span>
                <h4 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{item.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              All news <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
