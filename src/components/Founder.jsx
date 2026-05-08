const DRA_IMG = `${import.meta.env.BASE_URL}dra-ketlyn-rodrigues.png`

export default function Founder() {
  return (
    <section id="fundadora" className="py-20 px-8 lg:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            A fundadora
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-500 mt-3">
            Quem está à frente da JK Dermaclinic
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-900/5">
                <img
                  src={DRA_IMG}
                  alt="Dra. J. Ketlyn Rodrigues, fundadora da JK Dermaclinic"
                  className="block h-full w-full min-h-0 object-cover object-top"
                  width={400}
                  height={500}
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-500">
                Dra. J. Ketlyn Rodrigues
              </h3>
              <p className="text-accent-500 font-medium mt-1 mb-6">Biomédica · Estética avançada</p>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  A Dra. J. Ketlyn Rodrigues é biomédica especialista em estética avançada, com
                  especialização em criolipólise e tratamento de diástase abdominal.
                </p>
                <p>
                  Fundadora da JK Dermaclinic, desenvolveu um{" "}
                  <strong className="text-accent-500">método exclusivo</strong> que integra
                  tecnologia, ciência e protocolos personalizados, com foco em resultados
                  consistentes e duradouros.
                </p>
                <p>
                  Seu trabalho se destaca pela{" "}
                  <strong className="text-accent-500">precisão técnica</strong> e por uma
                  abordagem estratégica do corpo, tratando não apenas a queixa estética, mas a
                  sua causa.
                </p>
                <p>
                  Ao longo da sua trajetória, já conduziu transformações que impactam não só o
                  físico, mas a autoestima, a confiança e o posicionamento pessoal e profissional
                  de suas pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
