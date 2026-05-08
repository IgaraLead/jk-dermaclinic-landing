import { useEffect, useRef } from "react"

const WELLNESS_BG_URL =
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80"
const WELLNESS_PARALLAX_PX = 0.5

function useWellnessParallax() {
  const sectionRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const tick = () => {
      rafRef.current = 0
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        el.style.setProperty("--wr-parallax-y", "0px")
        return
      }
      const r = el.getBoundingClientRect()
      const h = window.innerHeight
      const off = h / 2 - (r.top + r.height / 2)
      const y = off * WELLNESS_PARALLAX_PX
      const c = Math.max(-110, Math.min(110, y))
      el.style.setProperty("--wr-parallax-y", `${c.toFixed(2)}px`)
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

export default function WellnessReset() {
  const sectionRef = useWellnessParallax()

  return (
    <section
      ref={sectionRef}
      id="wellness-reset"
      className="section-wellness-reset relative py-20 px-8 lg:px-12 overflow-hidden"
    >
      <div className="wr-parallax-wrap pointer-events-none" aria-hidden>
        <div className="wr-parallax-bg">
          <img
            className="wr-bg-img"
            src={WELLNESS_BG_URL}
            alt=""
            width={1600}
            height={900}
            fetchPriority="low"
            decoding="async"
          />
        </div>
      </div>
      <div className="wr-overlay pointer-events-none absolute inset-0" aria-hidden />

      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden z-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-widest">
              Protocolo exclusivo
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-500 mt-3 mb-2">
              WELLNESS RESET
              <sup className="text-base md:text-lg font-serif align-super">®</sup>
            </h2>
            <p className="text-lg md:text-xl text-accent-500 font-medium italic border-t-4 border-accent-400 pt-4 my-6 mx-auto max-w-xl">
              Processando uma autoestima confiante
            </p>
            <div className="space-y-4 text-neutral-500 leading-relaxed">
              <p>
                O Wellness Reset é um protocolo exclusivo de reequilíbrio corporal desenvolvido para
                quem busca mais do que estética: busca{" "}
                <strong className="text-accent-500">transformação real</strong>.
              </p>
              <p>
                Através da combinação estratégica de tecnologias, técnicas avançadas e
                acompanhamento personalizado, o método atua na redução de medidas, melhora da
                qualidade da pele e reorganização do funcionamento do corpo como um todo.
              </p>
              <p>
                Mais do que resultados visíveis, o Wellness Reset promove uma reconexão com o
                próprio corpo, restaurando a leveza, a confiança e o controle sobre si.
              </p>
              <p className="text-neutral-500 font-medium font-display text-xl">
                É o ponto de partida para uma nova versão sua.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center justify-center glass-btn-primary rounded-full px-8 py-3.5 text-base font-semibold mt-8"
            >
              Quero saber mais sobre o Wellness Reset
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
