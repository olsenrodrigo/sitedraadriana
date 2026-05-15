import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, BookOpen, Heart } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Formação em Anestesiologia",
      rqe: "RQE: 86593",
      description: "Experiência em centros cirúrgicos, hemodinâmica e diagnóstico por imagem.",
    },
    {
      icon: Stethoscope,
      title: "Especialista em Dor",
      rqe: "RQE: 865931",
      description: "Diagnóstico e tratamento direcionado da dor.",
    },
    {
      icon: BookOpen,
      title: "Base científica",
      rqe: "",
      description: "Condutas baseadas em evidência e experiência clínica.",
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      rqe: "",
      description: "Acolhimento, escuta ativa e cuidado individualizado.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#EFF5F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(43, 122, 142, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#1A3C4D" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
              Por que escolher a Dra. Adriana?
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Um cuidado que vai além do diagnóstico.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border text-center"
                style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #2B7A8E 0%, #1A3C4D 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-1" style={{ color: "#1A1A1A" }}>
                  {item.title}
                </h4>

                {item.rqe && (
                  <p className="text-xs font-medium mb-3" style={{ color: "#2B7A8E" }}>{item.rqe}</p>
                )}

                <p className={`leading-relaxed ${!item.rqe ? "mt-3" : ""}`} style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
