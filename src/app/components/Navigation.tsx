import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1_0_umX86X71M-Rh_mH1HqhegPhMQCmPN";
  link.target = "_blank"; // optional
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="ml-0 text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DEV
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block mr-[20px]">
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden"
          style={{ top: "64px" }}
        >
          <div className="bg-slate-950/95 backdrop-blur-lg border-b border-purple-500/20 h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="mt-4">
                  <Button
                    onClick={handleDownloadResume}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}