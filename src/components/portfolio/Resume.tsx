import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Resume = () => (
  <section id="resume" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-10 md:p-16 card-shadow text-center max-w-4xl mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <div className="relative z-10">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center mb-6 glow-shadow">
            <FileText className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Want the <span className="gradient-text">full story?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Grab a copy of my resume — full breakdown of experience, projects, and skills.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 h-12 bg-gradient-to-r from-primary to-accent border-0 glow-shadow">
              <a href="/Resume-JeevanPatil.pdf" download="Resume-JeevanPatil.pdf">
                <Download className="mr-2 h-4 w-4"/> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 glass">
              <a href="/Resume–JeevanPatil.pdf" target="_blank">
                <Eye className="mr-2 h-4 w-4"/> View Online
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
