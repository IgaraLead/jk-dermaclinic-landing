const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664v.75h-4.5A2.25 2.25 0 003.25 6.108V16.5A2.25 2.25 0 005.5 18.75h9.75A2.25 2.25 0 0017.5 16.5v-2.25a.75.75 0 00-.75-.75H15a.75.75 0 00-.75.75v.75H9V9.75A2.25 2.25 0 0111.25 7.5h1.5a2.25 2.25 0 012.25 2.25V12"
        />
      </svg>
    ),
    title: "Criolipólise e contorno",
    description:
      "Avaliação e protocolos em criolipólise para redução de gordura localizada, com alinhamento ao seu biotipo e metas, sempre com acompanhamento de perto.",
    highlights: ["Avaliação completa", "Foco em resultados reais", "Ajustes personalizados"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    title: "Diástase abdominal",
    description:
      "Tratamento de diástase com abordagem estratégica do tronco, integrando técnicas e orientação para alinhar função, estética e recuperação de forma consciente.",
    highlights: ["Avaliação alinhada ao protocolo", "Acompanhamento com consistência", "Cuidado individualizado"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m0 0V18a2.25 2.25 0 002.25 2.25H15A2.25 2.25 0 0021.75 18v-3.5"
        />
      </svg>
    ),
    title: "Protocolo Wellness Reset",
    description:
      "Reequilíbrio corporal com combinação de tecnologias, técnicas e acompanhamento: redução de medidas, pele e reorganização do funcionamento do corpo com um olhar de conjunto.",
    highlights: ["Plano sob medida", "Mais do que o visível: reconexão com o corpo", "Acompanhamento contínuo"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Estética avançada e pele",
    description:
      "Cuidado integrado à textura, qualidade de pele e alinhamento estético, com abordagem que trata a causa, não só o sintoma, para evolução consistente.",
    highlights: ["Precisão e ética", "Tecnologias apropriadas", "Evolução acompanhada no tempo"],
  },
]

export default function Services() {
  return (
    <section id="tratamentos" className="py-20 px-8 lg:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            O que oferecemos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-500 mt-3">
            Tratamentos com{" "}
            <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-neutral-100 bg-clip-text text-transparent">
              visão personalizada
            </span>
          </h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
            Cada proposta respeita o seu corpo, a sua história e o que você deseja alcançar, com
            protocolos individuais e acompanhamento alinhado ao seu processo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-2 px-1">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card p-6 flex flex-col group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-100/30 to-accent-300/20 flex items-center justify-center text-accent-500 mb-5">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-500 mb-3">{service.title}</h3>
              <p className="text-sm text-neutral-500 mb-5 flex-1">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-accent-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
