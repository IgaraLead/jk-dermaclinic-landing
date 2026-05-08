export default function About() {
  return (
    <section id="sobre" className="py-20 px-8 lg:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Sobre a clínica
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-500 mt-3">
              Transformar corpos, autoestima e vidas
            </h2>
            <p className="text-neutral-500 mt-4 text-lg leading-relaxed">
              Estética avançada, ciência e acompanhamento de verdade, de forma real e duradoura.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-5 text-neutral-500 leading-relaxed">
            <p>
              A JK Dermaclinic nasceu com o propósito de transformar corpos, autoestima e vidas de
              forma <strong className="text-accent-500">real e duradoura</strong>. Com atuação
              sólida na área de estética avançada, a clínica vem se destacando por oferecer
              tratamentos personalizados, baseados em{" "}
              <strong className="text-accent-500">ciência, tecnologia</strong> e acompanhamento
              próximo de cada paciente.
            </p>
            <p>
              Mais do que procedimentos estéticos, a JK Dermaclinic entrega resultados que impactam
              o dia a dia. Cada protocolo é pensado de forma individual, respeitando o corpo, a
              história e os objetivos de quem busca mudança.
            </p>
          </div>

          <figure className="max-w-2xl mx-auto my-10 md:my-12 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/20">
            <blockquote className="font-display text-lg md:text-xl text-neutral-500 text-center leading-snug">
              Ao longo da trajetória, a clínica já acompanhou inúmeros casos de sucesso. Um dos
              mais marcantes é o de uma paciente que{" "}
              <strong>eliminou mais de 20kg</strong> através de um acompanhamento estratégico e
              personalizado. Essa transformação foi muito além do físico: ela recuperou a
              autoestima, passou a se posicionar com mais confiança e teve uma mudança significativa
              na vida pessoal e profissional.
            </blockquote>
            <figcaption className="text-center text-sm text-neutral-500 mt-4">
              Resultados reais com protocolo e suporte alinhados aos seus objetivos
            </figcaption>
          </figure>

          <p className="max-w-3xl mx-auto text-neutral-500 leading-relaxed text-center">
            Esse é o <strong className="text-accent-500">compromisso</strong> da JK Dermaclinic: não
            apenas transformar corpos, mas elevar a forma como cada paciente se enxerga e se
            posiciona no mundo.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-12">
            {["Estética avançada", "Protocolos personalizados", "Ciência e tecnologia", "Acompanhamento próximo"].map(
              (tag) => (
                <span
                  key={tag}
                  className="glass-btn rounded-full px-5 py-2 text-sm font-medium text-neutral-500"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
