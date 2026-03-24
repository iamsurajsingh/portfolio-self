import { motion, useInView } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Zap,
  CircleCheckBig,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Jotai", level: 85}
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Prisma ORM", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    icon: CircleCheckBig,
    title: "TDD",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Jest", level: 92 },
      { name: "Enzyme", level: 85 },
      { name: "React Testing Library", level: 88 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "AWS", level: 87 },
      { name: "Docker", level: 90 },
      { name: "Terraform", level: 78 },
    ],
  },
  {
    icon: Zap,
    title: "Other Skills",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Git", level: 95 },
      { name: "Webpack", level: 90 },
      { name: "Splunk", level: 88 },
      { name: "Performance", level: 92 },
      { name: "WCAG 2.1", level: 85 },
      { name: "Micro Front-End", level: 85 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
  color,
}: {
  name: string;
  level: number;
  delay: number;
  color: string;
}) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <div
      ref={ref}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <motion.span
          className="text-xs text-purple-400 font-medium"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          {animatedLevel}%
        </motion.span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: delay / 1000, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = selectedCategory === index;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/40 transition-all cursor-pointer"
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  animate={{
                    rotateY: isExpanded ? 0 : 0,
                    rotateX: isExpanded ? 0 : 0,
                  }}
                  onClick={() => setSelectedCategory(isExpanded ? null : index)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category.title}
                    </h3>

                    <motion.div
                      className="space-y-3"
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : "auto" }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          delay={index * 100 + skillIndex * 50}
                          color={category.color}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* 3D effect shadow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl transform translate-z-[-10px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ transform: "translateZ(-10px)" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
