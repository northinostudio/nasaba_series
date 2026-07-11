import { siteConfig, socialLinks } from '../data/content'
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

export default function Footer() {
  const { t } = useTranslation()

  const go = (e, href) => {
    e.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-nasaba-dark border-t border-nasaba-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <NasabaLogo size="md" inverted className="mb-5" />
            <p className="text-gold/80 text-xs tracking-widest italic font-serif mb-3">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/25 text-[9px] tracking-[0.38em] uppercase font-display font-bold mb-6">
              {t('footer.nav_label')}
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_KEYS.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => go(e, link.href)}
                     className="text-white/45 text-sm font-display font-medium
                                hover:text-gold transition-colors">
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/25 text-[9px] tracking-[0.38em] uppercase font-display font-bold mb-6">
              {t('footer.connect_label')}
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(s => (
                <a key={s.platform_key} href={s.url} target="_blank" rel="noopener noreferrer"
                   className="text-white/45 text-sm font-display font-medium
                              hover:text-gold transition-colors">
                  {s.platform_key} — {s.handle}
                </a>
              ))}
              <a href={`mailto:${siteConfig.email}`}
                 className="text-white/45 text-sm font-display font-medium
                            hover:text-gold transition-colors mt-1">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-nasaba-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-display">
            © {new Date().getFullYear()} NASABA Productions. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase font-display">
            {t('footer.region')}
          </p>
        </div>
      </div>
    </footer>
  )
}
