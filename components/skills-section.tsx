"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Flame,
  GitBranch,
  Layers,
  Palette,
  Server,
  Zap,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export function SkillsSection() {
  const skills: Skill[] = [
    { name: "Flutter", level: 75, icon: <Smartphone className="h-6 w-6" /> },
    { name: "Dart", level: 70, icon: <Code2 className="h-6 w-6" /> },
    { name: "Firebase", level: 55, icon: <Flame className="h-6 w-6" /> },
    { name: "REST APIs", level: 65, icon: <Server className="h-6 w-6" /> },
    { name: "GetX", level: 68, icon: <Zap className="h-6 w-6" /> },
    { name: "BLoC", level: 20, icon: <Layers className="h-6 w-6" /> },
    { name: "UI/UX Design", level: 90, icon: <Palette className="h-6 w-6" /> },
    { name: "Git & GitHub", level: 85, icon: <GitBranch className="h-6 w-6" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            My Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="p-3 bg-primary/10 rounded-lg text-primary"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}%</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
