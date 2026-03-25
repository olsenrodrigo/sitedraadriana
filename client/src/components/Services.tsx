import { motion } from "framer-motion";
import { CheckCircle2, Stethoscope, Activity, Brain, Bone, Zap } from "lucide-react";

export default function Services() {
  const consultaItems = [
    { icon: Brain, text: "Dor neuropática" },
    { icon: Bone, text: "Lombalgia" },
    { icon: Zap, text: "Cefaleia" },
    { icon: Activity, text: "Dor crônica" },
    { icon: Stethoscope, text: "Dor pós-cirúrgica" },
  ];

  const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Adriana%20Macari.";

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#EFF5F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(43, 122, 142, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A3C4D" }}>Tratamentos da Dor</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            Tratamentos e procedimentos para dor
          </h3>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Abordagem completa para diagnóstico e controle da dor
          </p>
        </motion.div>

        {/* Bloco: Consulta médica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border mb-8 max-w-5xl mx-auto"
          style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2B7A8E 0%, #1A3C4D 100%)" }}
            >
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>
                Consulta médica para diagnóstico da dor
              </h4>
              <p className="text-base mt-1" style={{ color: "#3C3C3C" }}>
                Avaliação clínica detalhada para identificar a origem da dor e indicar o melhor tratamento.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {consultaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border"
                style={{ borderColor: "rgba(43, 122, 142, 0.12)" }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                  <item.icon className="w-5 h-5" style={{ color: "#2B7A8E" }} />
                </div>
                <span className="font-medium" style={{ color: "#1A1A1A" }}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white max-w-5xl mx-auto"
          style={{ background: "linear-gradient(135deg, #2B7A8E 0%, #1A3C4D 100%)" }}
        >
          <h4 className="text-3xl font-bold mb-4 text-white">
            Sua dor precisa de diagnóstico correto
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#EFF5F7" }}>
            Consulta com médica anestesiologista especialista em dor, com avaliação completa e definição de tratamento seguro.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#1A3C4D" }}
          >
            Quero agendar consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
}
