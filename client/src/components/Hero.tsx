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
    <div id="hero" className="relative min-h-screen flex items-center pt-20" style={{ background: "#1A3C4D" }}>

      {/* Right side: pain illustration — visible only on md+ */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden md:flex items-center justify-center overflow-hidden">
        <img
          src="https://www.ortesp.com.br/images/artigos/dor-cronica-nas-articulacoes-como-lidar-e-melhorar-a-qualidade-de-vida.jpg"
          alt="Dor crônica nas articulações"
          className="w-full h-auto"
          style={{ objectFit: "contain", maxHeight: "80vh", opacity: 0.92 }}
        />
        {/* Gradient blending left edge of image into background */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1A3C4D 0%, rgba(26,60,77,0.6) 20%, rgba(26,60,77,0.1) 50%, transparent 100%)" }}
        />
      </div>

      {/* Subtle top/texture overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(43,122,142,0.15) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Tratamento da dor com abordagem médica especializada{" "}
              <span style={{ color: "#5EC4D4" }}>
                e humanizada
              </span>
            </h2>

            <p className="text-lg mb-3 leading-snug" style={{ color: "#EFF5F7" }}>
              Dra. Adriana Macari — Médica anestesiologista especialista em tratamento da dor
            </p>

            <p className="text-base mb-6 leading-relaxed" style={{ color: "rgba(239, 245, 247, 0.85)" }}>
              Consulta médica para diagnóstico preciso da dor e definição de tratamento seguro e individualizado.
              A dor não deve ser ignorada. Quando persistente, precisa de investigação clínica adequada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "#2B7A8E" }}
              >
                <Calendar size={18} />
                Agendar Consulta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-6 py-3 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <User size={18} />
                Conhecer a Médica
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-5 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "Especialista", label: "em Tratamento da Dor" },
              { value: "Formação", label: "em Centro de Excelência" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm" style={{ color: "#EFF5F7" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
