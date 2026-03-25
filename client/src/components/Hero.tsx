import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Adriana%20Macari.";

  return (
    <div id="hero" className="relative min-h-screen flex items-center">
      {/* Background com imagem médica */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
          alt="Tratamento da dor"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(26, 60, 77, 0.92), rgba(26, 60, 77, 0.75), rgba(43, 122, 142, 0.4))" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 pt-32 sm:pt-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-2 backdrop-blur-sm border rounded-full mb-6"
              style={{ backgroundColor: "rgba(43, 122, 142, 0.2)", borderColor: "rgba(43, 122, 142, 0.3)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#EFF5F7" }}>
                Anestesiologista &middot; Especialista em Dor
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tratamento da dor com abordagem médica{" "}
              <span style={{ color: "#5EC4D4" }}>
                especializada e humanizada
              </span>
            </h2>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#EFF5F7" }}>
              Dra. Adriana Macari — Médica anestesiologista especialista em tratamento da dor
            </p>

            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(239, 245, 247, 0.85)" }}>
              Consulta médica para diagnóstico preciso da dor e definição de tratamento seguro e individualizado.
              A dor não deve ser ignorada. Quando persistente, precisa de investigação clínica adequada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "#2B7A8E" }}
              >
                <Calendar size={20} />
                Agendar Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-8 py-4 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <User size={20} />
                Conhecer a Médica
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16 pt-6 sm:pt-10 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "Dor", label: "Especialista em Tratamento da Dor" },
              { value: "Centro", label: "Formação de Excelência" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm" style={{ color: "#EFF5F7" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
