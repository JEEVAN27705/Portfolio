import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Github, Linkedin, Send, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/JEEVAN27705" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:patiljeevan800@gmail.com" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <Section id="contact" eyebrow="Contact Me " title="Let's build something" subtitle="Have an idea, opportunity, or just want to say hi? My inbox is open.">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass rounded-2xl p-6 card-shadow">
            <h3 className="font-semibold text-lg mb-4">Reach me directly</h3>

            <div className="space-y-3 mb-6">

              {/* Email */}
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:patiljeevan800@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  patiljeevan800@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+919373617934"
                  className="hover:text-primary transition-colors"
                >
                  +91 7276605175
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Pune, Maharashtra, India
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground hover:scale-110 transition-all"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 card-shadow">
            <p className="font-mono text-sm text-muted-foreground mb-1">// Current status</p>
            <p className="text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse" />
              Open for website & android development and testing internships & collaborations.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 card-shadow space-y-5"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jeevan Patil"
              maxLength={100}
              className="mt-2 h-12 rounded-xl bg-background/50"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="patiljeevan800@gmail.com"
              maxLength={255}
              className="mt-2 h-12 rounded-xl bg-background/50"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              rows={5}
              maxLength={1000}
              className="mt-2 rounded-xl bg-background/50 resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full rounded-xl h-12 bg-gradient-to-r from-primary to-accent border-0 glow-shadow"
          >
            {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
};
