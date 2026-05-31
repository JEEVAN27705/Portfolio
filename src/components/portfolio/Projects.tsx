import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

const projects = [
 {
  title: "Hate Speech Detection System",
  desc: "Machine learning model for multi-class classification of hate speech with high accuracy on social media datasets.",
  tech: ["Python", "Scikit-learn", "NLTK"],
  category: "AI",
  github: "/not-found",
  demo: "/in-development",
  image: "/projects/hate_speech_ai_1777407682517.png",
},
  {
    title: "QR Code Event Entry System",
    desc: "Full-stack system for generating and validating QR-based event passes with real-time scanning and verification.",
    tech: ["React", "Node.js", "MySQL"],
    category: "Android",
    github: "https://github.com/JEEVAN27705/qr-refreshment-system",
    demo: "https://picrefreshmentpass.netlify.app/login",
    image: "/projects/qr_code_event_1777407710417.png",
  },
  {
  title: "AI Chatbot Assistant",
  desc: "Intelligent chatbot that understands user queries and generates contextual responses using NLP and LLM integration, with a clean conversational UI.",
  tech: ["Python", "FastAPI", "React", "NLP", "OpenAI API"],
  category: "AI",
  github: "https://github.com/JEEVAN27705/PBL_2025", 
  demo: "/in-development",
  image: "/projects/ai_chatbot_1777408211755.png",
},
{
    title: "Virtual Fort Tour Website",
  desc: "Interactive web-based experience showcasing Kolaba Fort with visual exploration, historical insights, and a user-friendly interface for virtual navigation.",
  tech: ["React", "JavaScript", "CSS", "Three.js"],
    category: "Web",
    github: "https://github.com/JEEVAN27705/virtual-fort-tour",
    demo: "https://virtualswaraj.netlify.app/",
    image: "/projects/virtual_fort_tour_1777408521932.png",
  },
  {
    title: "Payroll Management System",
    desc:"Developed a web-based payroll management system to automate salary calculation, attendance tracking, and employee data management",
    tech: ["Html",'CSS', 'Javascript','PHP', 'XAMMP'],
    category: "Web",
    github: "#",
    demo: "#",
    image: "#",
  },
  {
    title: "Student Management System",
    desc: "Built a console-based application to store, search, update, and manage student records using C++ and object-oriented programming concepts",
    tech: ["Html",'CSS', 'Javascript','C++', 'MySql'],
    category: "Web",
    github: "https://github.com/JEEVAN27705/LP_2.git",
    demo: "/in-development",
    image: "#",
  }
];

const filters = ["All", "AI", "Android", "Web"] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="selected work" title="Projects I'm proud of" subtitle="A mix of AI experiments, full-stack builds, and immersive interactive experiences.">
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow-shadow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-3xl p-6 card-shadow flex flex-col group hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[16/10] rounded-2xl mb-5 mesh-bg relative overflow-hidden flex items-center justify-center">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover absolute inset-0 z-0" />
                ) : (
                  <span className="font-mono text-5xl font-bold gradient-text opacity-60">
                    {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                )}
                <span className="absolute top-3 right-3 z-10 text-xs font-mono px-2 py-1 rounded-full glass shadow-sm">
                  {p.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button asChild size="sm" variant="outline" className="rounded-full flex-1">
                  <a href={p.github} rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild size="sm" className="rounded-full flex-1 bg-gradient-to-r from-primary to-accent border-0">
                  <a href={p.demo}  rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
