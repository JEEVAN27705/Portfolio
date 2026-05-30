import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "Computer Engineering Student",
  "Full-Stack Developer",
  "Software Developer & Tester",
  "AI & Machine Learning Enthusiast",
  "Quality-Driven Problem Solver",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setTitleIdx((i) => (i + 1) % titles.length);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, titleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent/25 blur-3xl animate-float-slower" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block glass rounded-full px-4 py-2 text-sm font-mono text-muted-foreground mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="gradient-text animate-gradient">Jeevan Patil</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-3xl font-mono text-muted-foreground mb-8 h-10"
          >
            <span className="typing-cursor">{text}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Crafting intelligent digital experiences at the intersection of code, design, and AI —
            building products that solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full text-base px-7 h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-shadow border-0"
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-base px-7 h-12 glass border-border/50"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full text-base px-7 h-12"
            >
              <a href="/Resume-JeevanPatil.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4"/> Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
