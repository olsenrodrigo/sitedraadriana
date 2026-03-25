import { motion } from "framer-motion";
import { Syringe, ScanLine, Pill, ClipboardCheck, HeartPulse, Monitor, ShieldCheck, Users, AlertCircle } from "lucide-react";

export default function Treatments() {
  const procedimentos = [
    { icon: Syringe, text: "Bloqueios analgésicos" },
    { icon: ScanLine, text: "Procedimentos guiados por imagem" },
    { icon: Pill, text: "Toxina botulínica para dor" },
    { icon: ClipboardCheck, text: "Avaliação pré-anestésica" },
  ];

  const centroCirurgico = [
    { icon: HeartPulse, text: "Acompanhamento anestésico em cirurgias" },
    { icon: Monitor, text: "Monitorização intraoperatória" },
    { icon: Pill, text: "Controle da dor no perioperatório" },
    { icon: ShieldCheck, text: "Segurança anestésica baseada em protocolos" },
    { icon: Users, text: "Suporte ao cirurgião e equipe médica" },
  ];

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EFF5F7" }}>
            <span className="text-sm font-medium" style={{ color: "#2B7A8E" }}>Procedimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            Procedimentos para controle da dor
          </h3>

          <p className="text-lg max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Técnicas médicas seguras para controle da dor, realizadas com precisão por médica anestesiologista especialista em dor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Bloco Procedimentos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border"
            style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "linear-gradient(135deg, #2B7A8E 0%, #1A3C4D 100%)" }}
            >
              <Syringe className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: "#1A1A1A" }}>
              Procedimentos Intervencionistas
            </h4>
            <p className="text-sm mb-6" style={{ color: "#3C3C3C" }}>
              Técnicas minimamente invasivas para alívio da dor
            </p>
            <div className="space-y-3">
              {procedimentos.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(43, 122, 142, 0.1)", backgroundColor: "rgba(239, 245, 247, 0.5)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#2B7A8E" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bloco Centro Cirúrgico */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border"
            style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "linear-gradient(135deg, #1A3C4D 0%, #2B7A8E 100%)" }}
            >
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: "#1A1A1A" }}>
              Acompanhamento Anestésico em Cirurgias
            </h4>
            <p className="text-sm mb-6" style={{ color: "#3C3C3C" }}>
              Segurança e controle da dor durante todo o processo operatório
            </p>
            <div className="space-y-3">
              {centroCirurgico.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(43, 122, 142, 0.1)", backgroundColor: "rgba(239, 245, 247, 0.5)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#2B7A8E" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 max-w-3xl mx-auto p-6 rounded-xl"
          style={{ backgroundColor: "rgba(43, 122, 142, 0.08)" }}
        >
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#2B7A8E" }} />
          <p className="text-base" style={{ color: "#3C3C3C" }}>
            A indicação de tratamento é feita após avaliação médica criteriosa, sempre com decisão
            compartilhada e orientação clara ao paciente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
