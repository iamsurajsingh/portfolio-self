import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', right: '20%' }}
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
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Decorative element */}
            <motion.div
              className="relative h-64 mt-12 rounded-2xl overflow-hidden border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-32 h-32 border-4 border-purple-500/30 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <motion.div
                animate={{
                  scale: focusedField === "name" ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              {/* Email field */}
              <motion.div
                animate={{
                  scale: focusedField === "email" ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              {/* Message field */}
              <motion.div
                animate={{
                  scale: focusedField === "message" ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              {/* Submit button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold shadow-lg shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <motion.span 
                      className="flex items-center justify-center gap-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
