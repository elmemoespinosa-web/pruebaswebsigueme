import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'IA con criterio humano', href: '#ia-criterio' },
  { label: 'Creative Sprint', href: '#sprint' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex flex-row items-center gap-3">
          <span
            className="select-none text-[25px] text-white sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </div>

        <nav className="hidden flex-row text-[23px] text-white md:flex">
          {NAV_LINKS.map((link, index) => (
            <span key={link.href} className="flex items-center">
              <a href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
              {index < NAV_LINKS.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </nav>

        <a
          href="mailto:administracion@arteypunto.com.mx"
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
        >
          Contacto
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[32px] font-medium text-white transition-opacity hover:opacity-60"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:administracion@arteypunto.com.mx"
          onClick={() => setMenuOpen(false)}
          className="text-[32px] font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-60"
        >
          Contacto
        </a>
      </div>
    </>
  )
}
