"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type ProjectCategory = "all" | "mobile" | "web";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory[];
  github?: string;
  live?: string;
  image: string; // ✅ path to your image e.g. "/images/chat-app.png"
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
     title: "Apployee",
     description:"Driving learning application with real-time performance tracking, heart rate monitoring, interactive charts, push notifications, and chat functionality for better user engagement and training.",
     tags: ["Flutter", "Health Tracking", "Charts", "Push Notifications", "Chat System"],
      category: ["mobile"],
      github: "https://github.com/nishadabhay/Apployee",
      live: "https://play.google.com/store/apps/details?id=com.app.wolfiz.apployee&hl=en_IN",
      image: "/images/apployee.png", // 👈 replace with your actual image path
    },
    {
     title: "Wayway Rider",
     description:"Ride booking application for riders with real-time trip management, Google Maps integration, secure payment gateway, push notifications, and in-app chat for seamless communication.",
     tags: ["Flutter", "Google Maps", "Payment Gateway", "Push Notifications", "Chat System"],
     category: ["mobile"],
    github: "#",
    live: "https://play.google.com/store/apps/details?id=com.waywayapp.customer&hl=en_IN",
    image: "/images/wayway.png", // 👈 replace with your actual image path
    },
    {
      title: "Ekalakaar",
      description:"Artist platform application where artists can create professional profiles, discover and apply for programs based on their art, with integrated payment gateway, real-time notifications, and seamless user interaction.",
      tags: ["Flutter", "Payment Gateway", "Push Notifications", "Artist Platform","GetX"],
      category: ["mobile"],
      github: "#",
      live: "https://play.google.com/store/search?q=Ekalakaar&c=apps&hl=en_IN",
      image: "/images/ek.png", // 👈 replace with your actual image path
    },
    {
     title: "Exam Genie",
     description: "AI-powered competitive exam preparation app for SSC, Banking, and Railway exams. Features include smart mock test generation, multilingual support (English, Hindi, Hinglish), PDF download, question scanning, and a community-driven query system where users can post and solve doubts. Built with Flutter using GetX for state management, Firebase Authentication, and Firestore database.",
      tags: ["Flutter", "GetX", "Firebase Auth", "Firestore", "AI", "EdTech"],
      category: ["mobile"],
      github: "#",
      live: "#",
      image: "/images/exam.png", // 👈 replace with your actual image path
    },
  ];

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "Mobile", value: "mobile" },
    { label: "Web", value: "web" },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className={`transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border hover:border-primary/50 hover:bg-secondary"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass-card rounded-xl overflow-hidden"
              >
                {/* ✅ Project image area */}
                <div className="aspect-video relative overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}