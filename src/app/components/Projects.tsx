import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web App",
    color: "from-purple-500 to-pink-500",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Social Media Analytics",
    description: "Advanced analytics platform for tracking social media metrics across multiple platforms with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: ["Next.js", "Python", "MongoDB", "D3.js"],
    category: "Dashboard",
    color: "from-cyan-500 to-blue-500",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI Task Manager",
    description: "Smart task management application with AI-powered prioritization and scheduling recommendations.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    tags: ["React Native", "Firebase", "OpenAI", "TypeScript"],
    category: "Mobile App",
    color: "from-pink-500 to-rose-500",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Real Estate Portal",
    description: "Modern property listing platform with virtual tours, advanced search filters, and mortgage calculators.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    tags: ["Vue.js", "Express", "MySQL", "Maps API"],
    category: "Web App",
    color: "from-green-500 to-emerald-500",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Fitness Tracking App",
    description: "Comprehensive fitness application with workout plans, nutrition tracking, and progress analytics.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "Mobile App",
    color: "from-blue-500 to-indigo-500",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Educational Platform",
    description: "Interactive learning management system with video courses, quizzes, and progress tracking for students and educators.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    tags: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
    category: "Dashboard",
    color: "from-yellow-500 to-orange-500",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const categories = ["All", "Web App", "Mobile App", "Dashboard"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 pb-5 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects are coming soon.....
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        {/* <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Filter className="w-5 h-5 text-purple-400 mt-2" />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-slate-900/50 text-gray-400 border border-purple-500/20 hover:border-purple-500/40 hover:text-purple-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div> */}
        { /*
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div 
                  className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all h-full flex flex-col"
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Project image */}
                  {/*
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredProject === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-t ${project.color}`}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: hoveredProject === index ? 0.4 : 0.2 }}
                    />
                    
                    {/* Overlay buttons on hover */}
                    {/*
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-5 h-5 text-slate-900" />
                      </motion.button>
                      <motion.button
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Project content */}
                  {/*
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className={`px-2 py-1 bg-gradient-to-r ${project.color} text-white text-xs rounded-full`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                    {/* Tags */}
                    {/*
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show count */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400">
            Showing <span className="text-purple-400 font-semibold">{filteredProjects.length}</span> of{" "}
            <span className="text-purple-400 font-semibold">{projects.length}</span> projects
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
