import { useEffect, useState } from "react"
import { JKLogo } from "./Logo"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A clínica", href: "#sobre" },
  { label: "Wellness Reset", href: "#wellness-reset" },
  { label: "Dra. Ketlyn", href: "#fundadora" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hero = document.getElementById("inicio")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldHide = entry.isIntersecting && entry.intersectionRatio > 0.3
        setVisible(!shouldHide)
        if (shouldHide) setOpen(false)
      },
      {
        threshold: [0, 0.3, 0.31, 0.5, 1],
      }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        <a href="#inicio" aria-label="JK Dermaclinic, início" className="flex items-center py-1">
          <JKLogo markSize={42} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-500 hover:text-accent-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="glass-btn-primary rounded-full px-6 py-2.5 text-sm font-semibold">
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-500 p-2"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card rounded-none border-x-0 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-neutral-500 hover:text-accent-500 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="block glass-btn-primary rounded-full px-6 py-2.5 text-sm font-semibold text-center mt-2"
          >
            Agendar consulta
          </a>
        </div>
      )}
    </nav>
  )
}
