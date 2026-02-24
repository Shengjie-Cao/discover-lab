import { useState, useMemo } from "react";
import { FileText, ExternalLink, Code, Quote } from "lucide-react";
import { publications, PublicationType } from "@/data/publications";
import SectionHeading from "@/components/shared/SectionHeading";
import BibTexModal from "@/components/shared/BibTexModal";
import { useLanguage } from "@/contexts/LanguageContext";

const types: PublicationType[] = ["Conference", "Journal", "Preprint", "Patent"];

export default function PublicationsPage() {
  const { t } = useLanguage();
  const [typeFilter, setTypeFilter] = useState<PublicationType | "All">("All");
  const [yearFilter, setYearFilter] = useState<number | "All">("All");
  const [bibtexPub, setBibtexPub] = useState<typeof publications[0] | null>(null);

  const years = useMemo(() => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a), []);

  const filtered = useMemo(() => {
    return publications
      .filter((p) => (typeFilter === "All" ? true : p.type === typeFilter))
      .filter((p) => (yearFilter === "All" ? true : p.year === yearFilter))
      .sort((a, b) => b.year - a.year);
  }, [typeFilter, yearFilter]);

  const grouped = useMemo(() => {
    const map = new Map<number, typeof publications>();
    filtered.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year)!.push(p);
    });
    return [...map.entries()].sort(([a], [b]) => b - a);
  }, [filtered]);

  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        <SectionHeading title={t("pubs.title")} subtitle={t("pubs.subtitle")} />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div>
            <label className="text-xs font-medium text-muted-foreground block mb-1">{t("pubs.type")}</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as PublicationType | "All")}
              className="px-3 py-1.5 text-sm rounded-md border border-border bg-card text-card-foreground"
            >
              <option value="All">{t("pubs.allTypes")}</option>
              {types.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground block mb-1">{t("pubs.year")}</label>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value === "All" ? "All" : Number(e.target.value))}
              className="px-3 py-1.5 text-sm rounded-md border border-border bg-card text-card-foreground"
            >
              <option value="All">{t("pubs.allYears")}</option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>

        {grouped.map(([year, pubs]) => (
          <section key={year} className="mb-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">{year}</h3>
            <div className="space-y-4">
              {pubs.map((pub) => (
                <div key={pub.id} className="rounded-lg border border-border bg-card p-5">
                  <h4 className="font-body text-sm font-semibold text-card-foreground">{pub.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{pub.authors.join(", ")}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="italic">{pub.venue}</span>, {pub.year}
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs">{pub.type}</span>
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pub.pdfUrl && (
                      <a href={pub.pdfUrl} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <FileText size={12} /> PDF
                      </a>
                    )}
                    {pub.doiUrl && (
                      <a href={pub.doiUrl} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink size={12} /> DOI
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a href={pub.codeUrl} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Code size={12} /> Code
                      </a>
                    )}
                    <button
                      onClick={() => setBibtexPub(pub)}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Quote size={12} /> BibTeX
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">{t("pubs.noMatch")}</p>
        )}
      </div>

      {bibtexPub && (
        <BibTexModal bibtex={bibtexPub.bibtex} title={bibtexPub.title} onClose={() => setBibtexPub(null)} />
      )}
    </div>
  );
}
