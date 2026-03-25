import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Briefcase, Heart, Stethoscope } from "lucide-react";

export default function About() {
  const credentials = [
    { icon: Briefcase, text: "15 anos de experiência clínica" },
    { icon: Award, text: "Especialista em tratamento da dor" },
    { icon: Stethoscope, text: "Anestesiologista com atuação em centro cirúrgico" },
    { icon: GraduationCap, text: "Formação em centro de excelência" },
    { icon: BookOpen, text: "Condutas baseadas em evidência científica" },
    { icon: Heart, text: "Atendimento humanizado e individualizado" },
  ];

  const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20da%20dor%20com%20a%20Dra.%20Adriana%20Macari.";

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EFF5F7" }}>
              <span className="text-sm font-medium" style={{ color: "#2B7A8E" }}>Sobre a Especialista</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#1A1A1A" }}>
              Dra. Adriana Macari
            </h3>

            <p className="text-lg mb-6 font-medium" style={{ color: "#2B7A8E" }}>
              Medicina baseada em ciência, escuta e cuidado individual
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              A <strong>Dra. Adriana Macari</strong> é médica <strong>anestesiologista</strong> e <strong>especialista em tratamento da dor</strong>,
              com mais de <strong>15 anos de experiência clínica</strong>.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Atua no diagnóstico e tratamento de <strong>dor neuropática, lombalgia, cefaleia e dor crônica</strong>,
              sempre com abordagem baseada em evidência científica.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Seu trabalho é focado em <strong>reduzir a dor, restaurar a funcionalidade e melhorar a qualidade de vida</strong> do paciente.
              O atendimento é realizado com escuta ativa, responsabilidade médica e plano terapêutico individualizado.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Também atua como <strong>anestesiologista em ambiente cirúrgico</strong>, colaborando com equipes médicas em procedimentos
              que exigem controle rigoroso da dor e segurança anestésica.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(43, 122, 142, 0.15)", backgroundColor: "rgba(239, 245, 247, 0.4)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#2B7A8E" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              <div
                className="w-full h-[550px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #EFF5F7 0%, #2B7A8E 100%)" }}
              >
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium opacity-80">Foto da Dra. Adriana</p>
                  <p className="text-sm opacity-60 mt-2">Substituir por foto profissional</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(43, 122, 142, 0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(43, 122, 142, 0.1)" }} />
          </motion.div>
        </div>

        {/* Indicadores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 xl:grid-cols-4 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(43, 122, 142, 0.2)" }}
        >
          {[
            { value: "15 anos", label: "de experiência clínica" },
            { value: "Especialista", label: "em tratamento da dor" },
            { value: "Anestesiologista", label: "formação sólida" },
            { value: "Humanizado", label: "atendimento individualizado" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2" style={{ color: "#1A3C4D" }}>{item.value}</div>
              <div className="text-sm md:text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Frase de posicionamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-bold italic max-w-3xl mx-auto mb-8" style={{ color: "#1A3C4D" }}>
            "Você não precisa conviver com a dor sem diagnóstico."
          </blockquote>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "#2B7A8E" }}
          >
            Agendar avaliação da dor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
