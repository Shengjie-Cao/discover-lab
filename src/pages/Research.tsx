import { researchAreas } from "@/data/research";
import { publications } from "@/data/publications";
import SectionHeading from "@/components/shared/SectionHeading";
import KeywordChip from "@/components/shared/KeywordChip";

export default function ResearchPage() {
  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        <SectionHeading
          title="Research"
          subtitle="Our group explores a range of topics at the intersection of machine learning, language, vision, and human-centered computing."
        />

        {/* Anchor nav */}
        <div className="flex flex-wrap gap-2 mb-12">
          {researchAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="px-3 py-1.5 text-sm rounded-md border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {area.title}
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {researchAreas.map((area) => {
            const relatedPubs = publications.filter((p) => area.publicationRefs.includes(p.id));
            return (
              <section
                key={area.id}
                id={area.id}
                className="scroll-mt-20 rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <h3 className="font-heading text-2xl font-bold text-card-foreground">{area.title}</h3>
                <p className="mt-3 text-muted-foreground">{area.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.keywords.map((kw) => (
                    <KeywordChip key={kw} label={kw} />
                  ))}
                </div>
                {relatedPubs.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-card-foreground mb-3">Representative Publications</h4>
                    <ul className="space-y-2">
                      {relatedPubs.map((pub) => (
                        <li key={pub.id} className="text-sm text-muted-foreground">
                          <span className="font-medium text-card-foreground">{pub.title}</span>
                          <br />
                          {pub.venue}, {pub.year}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
