import { Link } from "react-router-dom";
import { Mail, Globe, GraduationCap, User } from "lucide-react";
import { people, roleOrder, roleLabels } from "@/data/people";
import SectionHeading from "@/components/shared/SectionHeading";
import KeywordChip from "@/components/shared/KeywordChip";

export default function PeoplePage() {
  return (
    <div className="section-padding">
      <div className="container-wide mx-auto">
        <SectionHeading title="People" subtitle="Meet the members of our research group." />

        {roleOrder.map((role) => {
          const members = people.filter((p) => p.role === role);
          if (members.length === 0) return null;
          return (
            <section key={role} className="mb-12">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 border-b border-border pb-2">
                {roleLabels[role]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {members.map((person) => (
                  <Link
                    key={person.slug}
                    to={`/people/${person.slug}`}
                    className="group rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <User className="text-muted-foreground" size={28} />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{roleLabels[person.role]}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {person.keywords.slice(0, 3).map((kw) => (
                        <KeywordChip key={kw} label={kw} />
                      ))}
                    </div>
                    <div className="mt-4 flex gap-3">
                      {person.email && (
                        <span className="text-muted-foreground" title="Email">
                          <Mail size={14} />
                        </span>
                      )}
                      {person.website && (
                        <span className="text-muted-foreground" title="Website">
                          <Globe size={14} />
                        </span>
                      )}
                      {person.scholar && (
                        <span className="text-muted-foreground" title="Google Scholar">
                          <GraduationCap size={14} />
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
