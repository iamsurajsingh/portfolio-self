import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Guardian Life",
    position: "Senior Engineer",
    period: "Dec 2021 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Tata Consultancy Services",
    position: "System Engineer",
    period: "Nov 2019 - Nov 2021",
    description: "Developed and maintained multiple client projects, focusing on responsive design and optimal user experience.",
    achievements: [
      "Built 15+ production-ready applications",
      "Reduced bug reports by 50% through rigorous testing",
      "Introduced TypeScript to the tech stack"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    company: "Enigma Digital",
    position: "Web Developer Intern",
    period: "Jun 2019 - Feb 2021",
    description: "Specialized in creating beautiful, responsive user interfaces with modern frontend technologies.",
    achievements: [
      "Increased user engagement by 35%",
      "Redesigned entire product interface",
      "Collaborated with UX team on user research"
    ],
    color: "from-pink-500 to-rose-500"
  },
  {
    company: "Freelance",
    position: "Full Stack Engineer",
    period: "June 2018 - Present",
    description: "Worked with various clients to deliver custom web solutions, from landing pages to full-stack applications.",
    achievements: [
      "Completed 20+ projects",
      "Maintained 98% client satisfaction rate",
      "Built long-term relationships with repeat clients"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div ref={containerRef} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - background */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/20 hidden sm:block" />
            
            {/* Timeline line - animated fill */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 hidden sm:block origin-top"
              style={{ height: lineHeight }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute top-8 ${
                    index % 2 === 0 ? 'left-6 md:right-[-1.1rem]' : 'left-6 md:left-[-1.1rem]'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div 
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center border-4 border-slate-900 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="ml-20 md:ml-0 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all group cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                      whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                    >
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-medium">{exp.period}</span>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {exp.position}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                    
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <div className={`space-y-2 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div 
                          key={achievement} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.4 }}
                          >
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`} />
                          </motion.div>
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-purple-400 text-sm font-medium">
              6+ Years of Experience
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
