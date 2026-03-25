import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/iamsurajsingh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/iamsuuraj", label: "LinkedIn" },
    { icon: Mail, href: "mailto:surajthekng7@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                DEV
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Stack Developer passionate about creating beautiful, functional web experiences.
                Always learning, always building.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Home", "Skills", "Projects", "Experience", "Education", "Awards"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <p className="text-gray-400 text-sm mb-4">
                Have a project in mind? Let's work together to create something amazing.
              </p>
              <a
                href="mailto:john@example.com"
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-purple-500/20 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Created by Suraj. Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/40 transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
