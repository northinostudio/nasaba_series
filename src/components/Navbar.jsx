import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import NasabaLogo from './NasabaLogo'

const NAV_KEYS = [
  { key: 'home',     href: '#home' },
  { key: 'story',    href: '#story' },
  { key: 'cast',     href: '#cast' },
  { key: 'crew',     href: '#crew' },
  { key: 'sponsors', href: '#sponsors' },
  { key: 'gallery',  href: '#gallery' },
  { key: 'contact',  href: '#contact' },
]

export default function Navbar() {
  const { lang, toggle } = useLang()
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      for (const link of [...NAV_KEYS].reverse()) {
        const el = document.getElementById(link.href.slice(1))
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(link.href.slice(1))
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  // Which sections have a dark background
  const DARK_SECTIONS = new Set(['home', 'cast', 'crew'])
  const isDark = DARK_SECTIONS.has(active)

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
      !scrolled
        ? 'bg-transparent'
        : isDark
          ? 'bg-nasaba-dark/80 backdrop-blur-md border-b border-white/10'
          : 'bg-nasaba-bg/96 backdrop-blur-md border-b border-nasaba-line shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={e => go(e, '#home')}
           className="hover:opacity-80 transition-opacity">
          <NasabaLogo size="md" inverted={isDark} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {NAV_KEYS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => go(e, link.href)}
                  className={`nav-link text-[11px] tracking-[0.25em] uppercase font-display font-semibold transition-colors ${
                    active === link.href.slice(1)
                      ? isDark ? 'text-gold active' : 'text-nasaba-terra active'
                      : isDark
                        ? 'text-white/65 hover:text-white'
                        : 'text-nasaba-ink/55 hover:text-nasaba-ink'
                  }`}>
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggle}
            title={lang === 'en' ? 'Koma Hausa' : 'Switch to English'}
            className={`flex items-center gap-1.5 border px-3 py-1.5
                       text-[10px] tracking-widest uppercase font-display font-semibold
                       transition-all ${
              isDark
                ? 'border-white/30 hover:border-white/60'
                : 'border-nasaba-line hover:border-nasaba-terra'
            }`}>
            <span className={lang === 'en'
              ? isDark ? 'text-gold' : 'text-nasaba-terra'
              : isDark ? 'text-white/45' : 'text-nasaba-muted'}>
              {t('nav.lang_en')}
            </span>
            <span className={isDark ? 'text-white/25' : 'text-nasaba-muted/40'}>/</span>
            <span className={lang === 'ha'
              ? isDark ? 'text-gold' : 'text-nasaba-terra'
              : isDark ? 'text-white/45' : 'text-nasaba-muted'}>
              {t('nav.lang_ha')}
            </span>
          </button>
        </div>

        {/* Mobile: lang + burger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggle}
            className={`text-[10px] tracking-widest border px-2 py-1
                       font-display font-semibold transition-all ${
              isDark ? 'border-white/30' : 'border-nasaba-line hover:border-nasaba-terra'
            }`}>
            <span className={lang === 'en'
              ? isDark ? 'text-gold' : 'text-nasaba-terra'
              : isDark ? 'text-white/45' : 'text-nasaba-muted'}>
              {t('nav.lang_en')}
            </span>
            <span className={isDark ? 'text-white/25 mx-0.5' : 'text-nasaba-muted/40 mx-0.5'}>/</span>
            <span className={lang === 'ha'
              ? isDark ? 'text-gold' : 'text-nasaba-terra'
              : isDark ? 'text-white/45' : 'text-nasaba-muted'}>
              {t('nav.lang_ha')}
            </span>
          </button>

          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-2">
            <span className={`block w-5 h-[2px] transition-all duration-300 ${
              isDark ? 'bg-white' : 'bg-nasaba-ink'
            } ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] transition-all duration-300 ${
              isDark ? 'bg-white' : 'bg-nasaba-ink'
            } ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] transition-all duration-300 ${
              isDark ? 'bg-white' : 'bg-nasaba-ink'
            } ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden py-7 px-8 ${
          isDark
            ? 'bg-nasaba-dark/95 backdrop-blur-md border-t border-white/10'
            : 'bg-nasaba-bg border-t border-nasaba-line'
        }`}>
          <ul className="flex flex-col gap-6">
            {NAV_KEYS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={e => go(e, link.href)}
                   className={`text-sm tracking-[0.25em] uppercase font-display font-semibold transition-colors ${
                     active === link.href.slice(1)
                       ? isDark ? 'text-gold' : 'text-nasaba-terra'
                       : isDark
                         ? 'text-white/60 hover:text-white'
                         : 'text-nasaba-ink/60 hover:text-nasaba-terra'
                   }`}>
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
