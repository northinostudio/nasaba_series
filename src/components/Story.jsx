import { siteConfig, themes } from '../data/content'
import { useTranslation } from '../hooks/useTranslation'

export default function Story() {
  const { t } = useTranslation()

  const paragraphs = [t('story.para1'), t('story.para2'), t('story.para3')]
  const platforms  = [t('story.platform_cable'), t('story.platform_satellite'), t('story.platform_streaming')]

  return (
    <section id="story" className="py-24 md:py-36 bg-nasaba-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="overline-terra">{t('story.overline')}</p>
          <h2 className="section-heading text-nasaba-ink mb-4">{t('story.heading')}</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-nasaba-muted text-base max-w-2xl mx-auto mt-2 leading-relaxed">
            {t('story.synopsis')}
          </p>
        </div>

        {/* Trailer */}
        <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden mb-20
                        border border-nasaba-line shadow-2xl shadow-nasaba-ink/10">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${siteConfig.trailerVideoId}?rel=0`}
            title={t('story.trailer_title')}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Two-column narrative */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">

          {/* Left — story paragraphs */}
          <div>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-nasaba-ink-2 leading-relaxed text-[15px] mb-5">{p}</p>
            ))}

            {/* Themes */}
            <div className="mt-8">
              <p className="overline-terra text-[9px]">{t('story.themes_label')}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {themes.map(theme => (
                  <span key={theme}
                    className="border border-nasaba-terra/40 text-nasaba-terra
                               text-[10px] tracking-[0.3em] px-4 py-2 uppercase font-display font-bold">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Platform badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {platforms.map(p => (
                <div key={p} className="card-light px-5 py-3">
                  <p className="text-nasaba-ink-2 text-[11px] tracking-[0.25em] uppercase font-display font-bold">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pull quote + details */}
          <div className="flex flex-col gap-8">

            {/* Pull quote */}
            <blockquote className="border-l-4 border-gold pl-8 py-2">
              <p className="font-serif text-xl md:text-2xl italic text-nasaba-ink leading-relaxed mb-5">
                "{t('story.pull_quote')}"
              </p>
              <div className="w-8 h-px bg-gold mb-3" />
              <p className="text-nasaba-muted text-[10px] tracking-[0.3em] uppercase font-display font-bold">
                {t('story.pull_attr')}
              </p>
            </blockquote>

            {/* Stats highlight */}
            <div className="grid grid-cols-2 gap-px bg-nasaba-line mt-4">
              {[
                { label: t('hero.stat_episodes'), value: '13' },
                { label: t('hero.stat_minutes'),  value: '45' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-nasaba-bg px-6 py-6">
                  <p className="font-display font-bold text-4xl text-nasaba-terra">{value}</p>
                  <p className="text-nasaba-muted text-[10px] tracking-widest uppercase font-display mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
