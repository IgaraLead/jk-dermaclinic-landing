import { useEffect, useRef } from "react"

const cuidados = [
  "Tratamento da causa, não só da queixa visível",
  "Protocolo individual: corpo, história e metas respeitados",
  "Ciência, tecnologia e critério em cada indicação",
  "Acompanhamento próximo: do planejamento à evolução",
]

const passos = [
  { fase: "1, Escuta", texto: "Seu contexto, rotina e objetivos alinhados com o que é possível e seguro." },
  { fase: "2, Estratégia", texto: "Plano claro: combinação de técnicas e fases, sem atalhos desnecessários." },
  { fase: "3, Acompanhamento", texto: "Ajustes ao longo do tempo para consolidar resultados reais e duradouros." },
]

const comparacao = [
  {
    title: "Abordagem genérica",
    tagline: "Receitas iguais para pessoas diferentes",
    negativa: true,
  },
  {
    title: "JK Dermaclinic",
    tagline: "Plano sob medida, com segurança e naturalidade",
    negativa: false,
  },
]

const BG_URL = "/dra-ketlyn-rodrigues.png"
const PARALLAX_PX = 0.1

function useDiferenciaisParallax() {
  const sectionRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const tick = () => {
      rafRef.current = 0
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        el.style.setProperty("--jk-parallax-y", "0px")
        return
      }
      const r = el.getBoundingClientRect()
      const h = window.innerHeight
      const off = h / 2 - (r.top + r.height / 2)
      const y = off * PARALLAX_PX
      const c = Math.max(-56, Math.min(56, y))
      el.style.setProperty("--jk-parallax-y", `${c.toFixed(2)}px`)
    }

    const onFrame = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener("scroll", onFrame, { passive: true })
    window.addEventListener("resize", onFrame)
    return () => {
      window.removeEventListener("scroll", onFrame)
      window.removeEventListener("resize", onFrame)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return sectionRef
}

export default function Diferenciais() {
  const sectionRef = useDiferenciaisParallax()

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="section-diferenciais relative overflow-x-hidden py-20 px-8 lg:px-12"
      aria-labelledby="diferenciais-heading"
    >
      <div className="jk-parallax-wrap pointer-events-none" aria-hidden>
        <div className="jk-parallax-bg">
          <img
            className="jk-section-bg-img jk-dra-bg"
            src={BG_URL}
            alt=""
            width={800}
            height={1000}
            fetchPriority="low"
            decoding="async"
          />
        </div>
      </div>
      <div className="jk-degrade pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2
            id="diferenciais-heading"
            className="jk-glow-title font-display text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap items-baseline justify-center gap-x-2"
          >
            <span className="jk-title">Mais do que estética</span>
            <span className="jk-title-line">
              é <span className="jk-title-impact">transformação com propósito</span>
            </span>
          </h2>
          <p className="jk-narr text-lg font-medium mt-4">
            Resultados que acompanham o dia a dia, com método, transparência e cuidado de verdade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-10">
          <div className="glass-card p-8 md:p-10">
            <h3 className="jk-h3 font-display text-xl font-bold mb-4">Nosso compromisso com você</h3>
            <p className="jk-body text-sm leading-relaxed md:text-base">
              Cada pessoa carrega uma história e um ritmo. Por isso, a JK Dermaclinic investe em
              protocolo sob medida, nunca fórmulas genéricas, para alinhar expectativa, segurança e
              resultados que façam sentido no seu dia a dia.
            </p>
            <ul className="mt-6 space-y-3">
              {cuidados.map((item) => (
                <li key={item} className="jk-body flex items-start gap-3 text-sm">
                  <span className="jk-bullet mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 md:p-10">
            <h3 className="jk-h3 font-display text-xl font-bold mb-4">Jornada do início à evolução</h3>
            <div className="space-y-4">
              {passos.map(({ fase, texto }) => (
                <div key={fase} className="jk-pill rounded-xl px-4 py-3">
                  <p className="jk-label text-xs font-semibold uppercase tracking-wide">{fase}</p>
                  <p className="jk-value text-sm md:text-base font-medium leading-snug pt-0.5">{texto}</p>
                </div>
              ))}
            </div>
            <p className="jk-callout text-center font-medium mt-6 text-sm">
              Transparência: você sabe o porquê de cada indicação.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {comparacao.map((col) => (
            <div
              key={col.title}
              className={
                col.negativa
                  ? "glass-card jk-compare-neg p-6 md:p-8"
                  : "glass-card jk-compare-pos p-6 md:p-8"
              }
            >
              <p className="jk-compare-label text-xs font-semibold uppercase tracking-wider mb-1">
                {col.title}
              </p>
              <p
                className={
                  col.negativa
                    ? "jk-compare-line font-display text-lg md:text-xl"
                    : "jk-compare-line font-display text-lg md:text-xl font-bold"
                }
              >
                {col.tagline}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <div className="glass-card jk-card-highlight p-8 md:p-10">
            <p className="jk-sol-title font-display text-2xl md:text-3xl font-bold">Pronta para dar o próximo passo?</p>
            <p className="jk-sol mt-4 leading-relaxed">
              Marque uma <strong className="jk-em">avaliação</strong> e vamos desenhar juntas o melhor
              plano, com tempo, explicação e respeito ao seu ritmo.
            </p>
            <a
              href="#contato"
              className="inline-flex glass-btn-primary rounded-full px-8 py-3.5 text-base font-semibold mt-8"
            >
              Falar com a clínica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
