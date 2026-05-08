import { useEffect, useRef } from "react"
import { JKLogo } from "./Logo"

const HERO_BG =
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80"
const HERO_PARALLAX_PX = 0.5

function useHeroParallax() {
  const sectionRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const tick = () => {
      rafRef.current = 0
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        el.style.setProperty("--hero-parallax-y", "0px")
        return
      }
      const r = el.getBoundingClientRect()
      const h = window.innerHeight
      const off = h / 2 - (r.top + r.height / 2)
      const y = off * HERO_PARALLAX_PX
      const c = Math.max(-120, Math.min(120, y))
      el.style.setProperty("--hero-parallax-y", `${c.toFixed(2)}px`)
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

export default function Hero() {
  const sectionRef = useHeroParallax()

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center py-20 px-8 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 h-[125%] w-[125%] bg-cover bg-center bg-no-repeat blur-md sm:blur-lg"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            transform: "translate3d(-50%, calc(-50% + var(--hero-parallax-y, 0px)), 0)",
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(15,28,46,0.78) 0%, rgba(15,28,46,0.86) 52%, rgba(15,28,46,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <JKLogo markSize={112} className="opacity-95" />
        </div>

        <div className="max-w-2xl mx-auto mb-4">
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-neutral-100 leading-snug font-medium">
            Resultados que acompanham o seu dia a dia, {" "}
            <span className="text-accent-500">com base em ciência, tecnologia e escuta de verdade.</span>
          </p>
        </div>

        <p className="text-base md:text-lg text-neutral-200 max-w-xl mx-auto mb-12 leading-relaxed">
          <strong className="text-neutral-100">Estética avançada</strong> com{" "}
          <strong className="text-neutral-100">protocolos personalizados</strong>, método exclusivo e
          acompanhamento estratégico, do primeiro contato à sua evolução.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="glass-btn-primary rounded-full px-8 py-4 text-lg font-semibold w-full sm:w-auto"
          >
            Quero agendar
          </a>
          <a
            href="#wellness-reset"
            className="glass-btn rounded-full px-8 py-4 text-lg font-semibold text-neutral-100 w-full sm:w-auto"
          >
            Conhecer o Wellness Reset
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-xl mx-auto px-2">
          {[
            { value: "Exclusivo", label: "Método Wellness Reset" },
            { value: "1:1", label: "Acompanhamento próximo" },
            { value: "Real", label: "Resultados sustentáveis" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-neutral-100">{stat.value}</div>
              <div className="text-xs md:text-sm text-neutral-200 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
