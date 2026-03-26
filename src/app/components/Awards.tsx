import { motion } from "motion/react";
import { Trophy, Star, Medal, Award as AwardIcon } from "lucide-react";

const awards = [
  {
    title: "Top Performer of the Year",
    organization: "Guardian Excellence Awards",
    year: "2023 | 2025",
    description: "Recognized for top performance through out the year for the features delivered",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Cheers for Champions",
    organization: "Guardian Excellence Awards",
    year: "2022 | 2024 | 2025",
    description: "Awarded the Cheers for Champions awards for continued excellence in deliveries leading to huge customer impact.",
    icon: Star,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Wall of Fame",
    organization: "Guardian Wall of Fame",
    year: "2023 | 2024 | 2025",
    description: "Awarded for exceptional user experience design, Increading the Guardian Anytime traffic by 240K more, increase in time on the site by 9 minutes per visit, Digital Id cards with more than 13K downloads to apple wallet.",
    icon: Medal,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Community Champion",
    organization: "Guardian Learning",
    year: "2023 | 2025",
    description: "Recognized for significant contributions to the developer community through mentorship and open-source work.",
    icon: AwardIcon,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Super Star Award",
    organization: "Guardian Excellence Awards",
    year: "2024",
    description: "Awarded the super star award for making a feature go live in less than 8 hrs.",
    icon: Trophy,
    color: "from-pink-500 to-rose-500"
  },
];

const recognitions = [
  "Listed on the Wall of Fame",
  "Tech Leader - GSC 2024",
];

export function Awards() {
  return (
    <section id="awards" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '20%' }}
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 pb-5 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honors and achievements throughout my career
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/40 transition-all">
                  {/* Gradient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
                  
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-purple-400 text-sm font-medium">{award.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {award.title}
                    </h3>
                    
                    <p className="text-cyan-400 text-sm font-medium mb-3">{award.organization}</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              Additional Recognition
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={recognition}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{recognition}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
