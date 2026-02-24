import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { news, NewsTag } from "@/data/news";
import SectionHeading from "@/components/shared/SectionHeading";

const tags: NewsTag[] = ["Paper", "Award", "Talk", "Open-source"];

export default function NewsPage() {
  const [tagFilter, setTagFilter] = useState<NewsTag | "All">("All");

  const filtered = useMemo(
    () =>
      news
        .filter((n) => (tagFilter === "All" ? true : n.tag === tagFilter))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [tagFilter]
  );

  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        <SectionHeading title="News" subtitle="Updates, announcements, and highlights from our group." />

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setTagFilter("All")}
            className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
              tagFilter === "All"
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagFilter(tag)}
              className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                tagFilter === tag
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              to={`/news/${item.slug}`}
              className="block rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                  {item.tag}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{item.summary}</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No news items match the selected filter.</p>
        )}
      </div>
    </div>
  );
}
