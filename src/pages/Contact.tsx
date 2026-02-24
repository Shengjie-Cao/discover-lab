import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only — just show confirmation
    setSubmitted(true);
  };

  return (
    <div className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading title="Contact" subtitle="Get in touch with our research group." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Address</h4>
                  <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-lg border border-border bg-muted h-48 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Map Placeholder</span>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <Send className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold text-card-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-md border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
