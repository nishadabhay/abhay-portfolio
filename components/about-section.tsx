"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Reusable inline style - cannot be overridden by Tailwind v4
const gradientTextStyle: React.CSSProperties = {
  display: "inline-block",
  background: "linear-gradient(135deg, oklch(0.75 0.15 195) 0%, oklch(0.85 0.12 180) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

export function AboutSection() {
  const stats = [
    { value: "2", label: "Years Flutter Experience" },
    { value: "7+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "95.5%", label: "Client Satisfaction" },
  ];

  const skills = ["Flutter", "Dart", "Firebase", "REST APIs", "GetX", "UI/UX"];

  return (
    <section id="about" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Get to know me better
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image and intro */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              {/* Circular profile image */}
              <motion.div
                className="relative shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-lg opacity-50" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                  <Image
                    src="/images/abhay-profile.jpeg"
                    alt="Abhay Nishad - Flutter Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <div className="text-center sm:text-left">
                {/* ✅ FIX: inline style instead of gradient-text class */}
                <h3 className="text-2xl font-semibold mb-3" style={gradientTextStyle}>
                  Abhay Nishad
                </h3>
                <p className="text-primary font-mono text-sm mb-4">
                  Flutter Developer
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A passionate Flutter Developer with 2 years of experience building
                  beautiful, scalable mobile applications.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I specialize in creating cross-platform mobile apps with clean
                architecture, smooth animations, and exceptional user experiences.
                My focus is on writing maintainable, efficient code.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I&apos;m passionate about learning new technologies and best practices
                to deliver high-quality solutions that meet business requirements.
              </motion.p>
            </div>

            {/* Skills badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 200, 200, 0.2)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(0, 200, 200, 0.5)",
                }}
              >
                {/* ✅ FIX: inline style instead of gradient-text class */}
                <p className="text-4xl md:text-5xl font-bold mb-2" style={gradientTextStyle}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}