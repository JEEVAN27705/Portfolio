import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Sparkles,
  Rocket,
  Bug,
  Cpu,
  TestTube,
  Users
} from "lucide-react";
import { Section } from "./Section";

const interests = [
  {
    icon: Brain,
    label: "Artificial Intelligence",
    desc: "Exploring NLP, ML models, and real-time abuse detection systems."
  },
  {
    icon: Code2,
    label: "Full-Stack Development",
    desc: "Building scalable web applications using MERN Stack."
  },
  {
    icon: Sparkles,
    label: "Creative Development",
    desc: "Creating immersive experiences like Unity-based virtual environments."
  },
  {
    icon: Rocket,
    label: "Problem Solving",
    desc: "Designing efficient solutions for real-world technical challenges."
  },
  {
    icon: Bug,
    label: "Software Testing",
    desc: "Experienced in manual testing, test case design, and regression testing."
  },
  {
    icon: Cpu,
    label: "Machine Learning Systems",
    desc: "Integrating ML models into production-ready applications."
  },
  {
    icon: TestTube,
    label: "Automation Testing",
    desc: "Using Postman and Selenium WebDriver for system validation."
  },
  {
    icon: Users,
    label: "Team Collaboration",
    desc: "Working with Git, Jira, and agile workflows in team environments."
  }
];
export const About = () => (
  <Section id="about" eyebrow="about me" title="A passionate builder driven by curiosity" subtitle="I'm a Computer Engineering student who loves blending intelligent systems with delightful user experiences.">
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 card-shadow"
      >
        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
          I'm a Computer Engineering student with a deep love for crafting software that
          actually matters. From AI-powered systems that fight online abuse, to immersive
          virtual experiences in Unity — I enjoy taking ideas across the full journey from
          concept to deployment.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
          I am a motivated and detail-oriented developer with practical experience in both
          software development and software testing. I have a strong foundation in programming,
          web technologies, and quality assurance practices, with hands-on exposure to building
          real-world applications and testing production platforms.I am passionate about delivering
          high-quality, reliable software solutions along with testing that create real-world impact.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
          My experience includes manual testing, test case design, bug reporting, and regression
          testing, along with developing full-stack and machine learning–enabled applications.
          I am proficient in Python, Java, SQL, and modern web technologies, and have working
          knowledge of automation and API testing using Selenium WebDriver and Postman. I also have
          an industry expirence in manual testing.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">

          I’m comfortable collaborating with cross-functional teams using tools like Jira and Git,
          and I enjoy contributing across the software lifecycle—from development to validation—
          to deliver reliable and scalable solutions. My goal is to keep growing as a developer
          who bridges intelligent backends with beautiful interfaces and builds meaningful,
          human-centered technology.
        </p>

      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {interests.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform card-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <it.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{it.label}</h3>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
