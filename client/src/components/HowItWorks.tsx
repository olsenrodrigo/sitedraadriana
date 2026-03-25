import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function HowItWorks() {
  const topics = [
    {
      title: "Dor nas costas é normal?",
      description: "Dor nas costas é frequente, mas não deve ser tratada como normal. Quando persistente ou recorrente, pode indicar condições que precisam de investigação médica adequada.",
    },
    {
      title: "Quando procurar especialista em dor?",
      description: "Se a dor persiste por mais de três meses, piora com o tempo, afeta o sono ou limita atividades do dia a dia, é hora de buscar avaliação com especialista.",
    },
    {
      title: "O que é dor neuropática?",
      description: "A dor neuropática ocorre por lesão ou disfunção do sistema nervoso. Pode se manifestar como queimação, formigamento ou choques, e exige tratamento específico.",
    },
    {
      title: "Dor tem cura?",
      description: "Muitas condições dolorosas têm tratamento eficaz. O primeiro passo é o diagnóstico correto. Com abordagem adequada, é possível reduzir significativamente a dor e restaurar a qualidade de vida.",
    },
    {
      title: "Qual exame identifica a dor?",
      description: "Não existe um único exame para dor. O diagnóstico combina avaliação clínica, história do paciente e, quando necessário, exames complementares específicos para cada caso.",
    },
    {
      title: "Qual médico trata dor crônica?",
      description: "O médico especialista em dor é o profissional mais indicado. Em muitos casos, é um anestesiologista com formação adicional em tratamento da dor, como a Dra. Adriana Macari.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#EFF5F7" }}>
            <span className="text-sm font-medium" style={{ color: "#2B7A8E" }}>Conteúdo Educativo</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            O que você precisa saber sobre dor
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Informação de qualidade para entender melhor sua condição e buscar o tratamento adequado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#EFF5F7" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#2B7A8E" }} />
              </div>

              <h4 className="text-lg font-bold mb-3" style={{ color: "#1A1A1A" }}>
                {topic.title}
              </h4>

              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
