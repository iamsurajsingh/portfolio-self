import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "NIET, Greater Noida",
    period: "2015 - 2019",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on neural network optimization.",
    gpa: "7.9 / 10.0",
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Dean's List all semesters",
      "Graduate Research Assistant",
      "Published 2 research papers"
    ]
  },
  {
    degree: "",
    institution: "MIT",
    period: "2012 - 2016",
    description: "Focus on software engineering, algorithms, and system design. Active member of coding club.",
    gpa: "3.8/4.0",
    color: "from-cyan-500 to-blue-500",
    achievements: [
      "Summa Cum Laude",
      "President of Computer Science Society",
      "Winner of Annual Hackathon 2015"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Award
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2022",
    icon: Award
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2022",
    icon: Award
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        {/* Degrees */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="text-purple-400 text-sm font-medium">{edu.period}</span>
                        <span className="text-green-400 text-sm font-medium">GPA: {edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{edu.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${edu.color} mt-2 flex-shrink-0`} />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <span className="text-purple-400 text-xs">{cert.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
