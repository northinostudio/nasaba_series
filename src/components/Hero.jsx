import { siteConfig, statValues } from '../data/content'
import { useTranslation } from '../hooks/useTranslation'
import NasabaLogo from './NasabaLogo'
import abdulImg  from '../assets/abdul.png'
import zahraImg  from '../assets/zahra.png'
import ahmadImg  from '../assets/ahmad.png'
import amiraImg  from '../assets/amira.png'
import drUmarImg from '../assets/dr-umar.png'
import alhajiImg from '../assets/alhaji.png'
import hajiyaImg from '../assets/hajiya.png'

const STAT_KEYS = ['stat_episodes', 'stat_minutes', 'stat_broadcast', 'stat_ages']
const DARK = '#180A00'

const ACTORS = [
  { img: abdulImg,  label: 'ABDUL' },
  { img: zahraImg,  label: 'ZAHRA' },
  { img: ahmadImg,  label: 'AHMAD' },
  { img: amiraImg,  label: 'AMIRA' },
  { img: drUmarImg, label: 'DR. UMAR' },
  { img: alhajiImg, label: 'ALH. AHMAD' },
  { img: hajiyaImg, label: 'HAJ. ZAINAB' },
]

export default function Hero() {
  const { t } = useTranslation()
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home"
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: '100svh', backgroundColor: DARK }}>

      {/* ── FULL-SECTION CAROUSEL BACKGROUND ────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex h-full w-max animate-carousel will-change-transform">
          {[...ACTORS, ...ACTORS].map((actor, i) => (
            <div key={i}
              className="relative flex-shrink-0 h-full overflow-hidden
                         w-[48vw] sm:w-[35vw] md:w-[26vw] lg:w-[22vw]">
              <img
                src={actor.img}
                alt=""
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Warm mahogany-amber overlay — lets photos show through richly */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, rgba(48,18,2,0.78) 0%, rgba(24,10,0,0.60) 50%, rgba(12,4,0,0.88) 100%)'
        }} />

        {/* Arewa lattice — brighter on dark bg */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9961A' stroke-width='0.8'%3E%3Cpath d='M0 28 L56 28 M28 0 L28 56'/%3E%3Crect x='14' y='14' width='28' height='28' transform='rotate(45 28 28)'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      {/* ── CONTENT ZONE ─────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col">

        {/* Heritage / Horizon corner labels */}
        <div className="flex justify-between px-8 md:px-16 pt-28 md:pt-32 select-none">
          <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase">{t('hero.heritage')}</span>
          <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase">{t('hero.horizon')}</span>
        </div>

        {/* Main centred block */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-8 md:pb-14">

          {/* Badge overline */}
          <p className="section-title mb-7
                        opacity-0 animate-fade-in [animation-delay:280ms] [animation-fill-mode:forwards]">
            {t('hero.badge')}
          </p>

          {/* Title */}
          <h1 className="font-display font-bold text-white leading-[0.85] tracking-tight
                         text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem] xl:text-[13rem]
                         opacity-0 animate-slide-up [animation-delay:460ms] [animation-fill-mode:forwards]">
            {siteConfig.title}
          </h1>

          {/* Gold rule */}
          <div className="w-24 h-[2px] bg-gold mx-auto mt-7 mb-6
                          opacity-0 animate-fade-in [animation-delay:640ms] [animation-fill-mode:forwards]" />

          {/* Tagline */}
          <p className="font-serif italic text-gold/85 text-lg md:text-xl lg:text-2xl max-w-lg
                        opacity-0 animate-fade-in [animation-delay:780ms] [animation-fill-mode:forwards]">
            {t('hero.tagline')}
          </p>

          {/* Description */}
          <p className="text-white/55 text-sm md:text-[15px] max-w-sm md:max-w-md mt-4 mb-10 leading-relaxed
                        opacity-0 animate-fade-in [animation-delay:920ms] [animation-fill-mode:forwards]">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4
                          opacity-0 animate-slide-up [animation-delay:1060ms] [animation-fill-mode:forwards]">
            <button onClick={() => scrollTo('story')} className="btn-primary-inv">
              {t('hero.cta_story')}
            </button>
            <button onClick={() => scrollTo('cast')} className="btn-ghost-inv">
              {t('hero.cta_cast')}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade into stats bar */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${DARK})` }} />

      {/* ── STATS BAR ────────────────────────────── */}
      <div className="relative z-20 bg-nasaba-dark flex-shrink-0">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {statValues.map((value, i) => (
            <div key={i}
              className={`flex flex-col items-center py-6 md:py-7 ${
                i < statValues.length - 1 ? 'border-r border-nasaba-border' : ''
              }`}>
              <span className="font-display font-bold text-3xl md:text-4xl text-gold">{value}</span>
              <span className="text-white/35 text-[9px] tracking-widest uppercase mt-1.5 font-display">
                {t(`hero.${STAT_KEYS[i]}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
