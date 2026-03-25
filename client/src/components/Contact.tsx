import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", painType: "", painDuration: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const WHATSAPP_URL = "https://wa.me/5500000000000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus("loading");

    // Monta mensagem para WhatsApp
    const message = encodeURIComponent(
      `Olá, gostaria de agendar uma consulta com a Dra. Adriana Macari.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nTipo de dor: ${formData.painType || "Não informado"}\nTempo de dor: ${formData.painDuration || "Não informado"}`
    );

    // Tenta enviar via API primeiro
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "",
          message: `Tipo de dor: ${formData.painType}. Tempo de dor: ${formData.painDuration}`,
        }),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      setFormData({ name: "", phone: "", painType: "", painDuration: "" });
    } catch {
      // Fallback: redireciona para WhatsApp
      window.open(`${WHATSAPP_URL}?text=${message}`, "_blank");
      setStatus("success");
      setFormData({ name: "", phone: "", painType: "", painDuration: "" });
    }
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#E8EDEF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(43, 122, 142, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#1A3C4D" }}>Agende sua Consulta</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            Agendar consulta com especialista em dor
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Preencha seus dados para atendimento. Entraremos em contato pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#2B7A8E" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1A1A1A" }}>Endereço</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    Endereço a confirmar<br />
                    Consultório — Cidade/UF
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                  <Phone className="w-5 h-5" style={{ color: "#2B7A8E" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1A1A1A" }}>Contato</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    WhatsApp: a confirmar
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(43, 122, 142, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#EFF5F7" }}>
                  <Mail className="w-5 h-5" style={{ color: "#2B7A8E" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#1A1A1A" }}>E-mail</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    contato a confirmar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#1A3C4D" }}>Mensagem Enviada!</h4>
                  <p className="mb-6" style={{ color: "#3C3C3C" }}>Entraremos em contato em breve para agendar sua consulta.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 rounded-lg border font-medium transition-colors hover:bg-gray-50 cursor-pointer"
                    style={{ borderColor: "rgba(43, 122, 142, 0.3)", color: "#1A3C4D" }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#1A1A1A" }}>Nome Completo</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(43, 122, 142, 0.3)" }}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#1A1A1A" }}>Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(43, 122, 142, 0.3)" }}
                        placeholder="(XX) XXXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#1A1A1A" }}>Tipo de Dor</label>
                      <select
                        value={formData.painType}
                        onChange={(e) => setFormData({ ...formData, painType: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none bg-white"
                        style={{ borderColor: "rgba(43, 122, 142, 0.3)" }}
                      >
                        <option value="">Selecione o tipo de dor</option>
                        <option value="Dor nas costas / Lombalgia">Dor nas costas / Lombalgia</option>
                        <option value="Dor de cabeça / Cefaleia">Dor de cabeça / Cefaleia</option>
                        <option value="Dor neuropática">Dor neuropática</option>
                        <option value="Dor crônica">Dor crônica</option>
                        <option value="Dor pós-cirúrgica">Dor pós-cirúrgica</option>
                        <option value="Outro tipo de dor">Outro tipo de dor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#1A1A1A" }}>Tempo de Dor</label>
                      <select
                        value={formData.painDuration}
                        onChange={(e) => setFormData({ ...formData, painDuration: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none bg-white"
                        style={{ borderColor: "rgba(43, 122, 142, 0.3)" }}
                      >
                        <option value="">Há quanto tempo sente dor?</option>
                        <option value="Menos de 1 mês">Menos de 1 mês</option>
                        <option value="1 a 3 meses">1 a 3 meses</option>
                        <option value="3 a 6 meses">3 a 6 meses</option>
                        <option value="6 meses a 1 ano">6 meses a 1 ano</option>
                        <option value="Mais de 1 ano">Mais de 1 ano</option>
                        <option value="Mais de 5 anos">Mais de 5 anos</option>
                      </select>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Ocorreu um erro ao enviar. Tente novamente.</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #2B7A8E 0%, #1A3C4D 100%)" }}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                    ) : (
                      <>Agendar Agora <Send size={20} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
