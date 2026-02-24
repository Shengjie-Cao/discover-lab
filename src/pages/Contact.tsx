import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t("contact.email")}</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t("contact.address")}</h4>
                  <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-border bg-muted h-48 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">{t("contact.mapPlaceholder")}</span>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <Send className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold text-card-foreground">{t("contact.sent")}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t("contact.sentDesc")}</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  {t("contact.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">{t("contact.name")}</label>
                  <input id="name" type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">{t("contact.emailField")}</label>
                  <input id="email" type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">{t("contact.subject")}</label>
                  <input id="subject" type="text" required value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">{t("contact.message")}</label>
                  <textarea id="message" rows={5} required value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Send size={14} /> {t("contact.send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
