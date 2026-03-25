import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function FAQ() {
  const testimonials = [
    {
      text: "Consulta muito clara e objetiva. A Dra. Adriana explicou cada etapa do tratamento com paciência e segurança. Me senti acolhida desde o primeiro momento.",
      name: "Paciente",
      detail: "Tratamento de dor crônica",
    },
    {
      text: "Finalmente recebi um diagnóstico preciso depois de anos convivendo com dor. O atendimento é realmente diferenciado — com escuta e cuidado real.",
      name: "Paciente",
      detail: "Diagnóstico de dor neuropática",
    },
    {
      text: "Atendimento cuidadoso e humano. A Dra. Adriana não tem pressa, investiga com profundidade e propõe um plano de tratamento que faz sentido.",
      name: "Paciente",
      detail: "Avaliação de lombalgia",
    },
  ];

  const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Adriana%20Macari.";

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#EFF5F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(43, 122, 142, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A3C4D" }}>Depoimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1A1A1A" }}>
            O que dizem os pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Histórias reais de quem confiou seu cuidado à Dra. Adriana Macari.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#2B7A8E" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#2B7A8E" }} />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm" style={{ color: "#1A1A1A" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#2B7A8E" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #2B7A8E 0%, #1A3C4D 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Você não precisa aceitar a dor como parte da sua vida
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg" style={{ color: "#EFF5F7" }}>
            <span>Atendimento particular</span>
            <span>|</span>
            <span>Avaliação completa</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#1A3C4D" }}
          >
            Agendar consulta agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
