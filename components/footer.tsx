"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nishadabhay", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abhay-nishad-ba64651ab/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:imabhaynishad@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
       <div className="flex items-center justify-center gap-6">
          {/* <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            by <span className="text-primary font-medium">Abhay Nishad</span>
          </motion.p> */}

          {/* <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div> */}

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
