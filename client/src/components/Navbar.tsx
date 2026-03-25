import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection?: string;
  scrollToSection?: (section: string) => void;
}

export default function Navbar({ activeSection = "hero", scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "services", label: "Tratamentos da Dor" },
    { id: "treatments", label: "Procedimentos" },
    { id: "differentials", label: "Diferenciais" },
    { id: "locations", label: "Consultório" },
    { id: "faq", label: "Depoimentos" },
    { id: "contact", label: "Contato" },
  ];

  const handleNav = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Adriana%20Macari.";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center cursor-pointer"
            onClick={() => handleNav("hero")}
          >
            <span className="text-xl font-bold" style={{ color: "#1A3C4D" }}>
              Dra. Adriana<span style={{ color: "#2B7A8E" }}> Macari</span>
            </span>
          </motion.div>

          <nav className="hidden xl:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNav(item.id)}
                className="relative text-sm font-medium transition-colors cursor-pointer hover:opacity-80"
                style={{
                  color: activeSection === item.id ? "#2B7A8E" : "#494949"
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ background: "#2B7A8E" }}
                  />
                )}
              </motion.button>
            ))}
            <div className="flex items-center space-x-3 ml-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-white rounded-full text-sm font-medium transition-all hover:shadow-lg cursor-pointer"
                style={{ background: "#2B7A8E" }}
              >
                Agendar Consulta
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "#494949" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="xl:hidden py-4 border-t"
            style={{ borderColor: "rgba(43, 122, 142, 0.2)" }}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:opacity-90 cursor-pointer"
                style={{
                  color: activeSection === item.id ? "#2B7A8E" : "#494949",
                  backgroundColor: activeSection === item.id ? "#EFF5F7" : "transparent"
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 text-white rounded-full text-sm font-medium"
                style={{ background: "#2B7A8E" }}
              >
                Agendar Consulta
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
