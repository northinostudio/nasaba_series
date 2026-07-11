import { sponsors } from '../data/content'
import { useTranslation } from '../hooks/useTranslation'
import imgAbn       from '../assets/sponsor-abn.png'
import imgDurbar    from '../assets/sponsor-durbar.png'
import imgKhf       from '../assets/sponsor-khf.png'
import imgNorthstar from '../assets/sponsor-northstar.png'
import imgSahel     from '../assets/sponsor-sahel.png'
import imgZuma      from '../assets/sponsor-zuma.png'

const SPONSOR_IMG = {
  abn: imgAbn, durbar: imgDurbar, khf: imgKhf,
  northstar: imgNorthstar, sahel: imgSahel, zuma: imgZuma,
}

export default function Sponsors() {
  const { t } = useTranslation()
  const premier    = sponsors.filter(s => s.tier === 'premier')
  const supporting = sponsors.filter(s => s.tier === 'supporting')

  return (
    <section id="sponsors" className="py-24 md:py-36 bg-nasaba-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="overline-terra">{t('sponsors.overline')}</p>
          <h2 className="section-heading text-nasaba-ink">{t('sponsors.heading')}</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-nasaba-muted text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            {t('sponsors.description')}
          </p>
        </div>

        {/* Premier grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-nasaba-line">
          {premier.map(s => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
               className="bg-white flex items-center justify-center p-8 min-h-[140px]
                          hover:bg-nasaba-bg transition-colors group">
              {SPONSOR_IMG[s.id]
                ? <img src={SPONSOR_IMG[s.id]} alt={s.name}
                       className="max-h-24 max-w-[200px] w-full object-contain
                                  opacity-70 group-hover:opacity-100 transition-all duration-300" />
                : <span className="font-display font-bold text-2xl text-nasaba-muted
                                   group-hover:text-nasaba-terra transition-colors tracking-widest text-center">
                    {s.name}
                  </span>
              }
            </a>
          ))}
        </div>

        {/* Supporting */}
        {supporting.length > 0 && (
          <div className="mt-14">
            <p className="text-center text-nasaba-muted text-[10px] tracking-[0.35em] uppercase font-display font-bold mb-8">
              {t('sponsors.supporting_label')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {supporting.map(s => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                   className="border border-nasaba-line px-8 py-3.5 text-nasaba-muted
                              hover:text-nasaba-terra hover:border-nasaba-terra/50
                              transition-all text-sm font-display font-semibold tracking-widest">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 card-light p-10 md:p-14 text-center">
          <p className="overline-terra">{t('sponsors.cta_overline')}</p>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-nasaba-ink mb-5">
            {t('sponsors.cta_heading')}
          </h3>
          <p className="text-nasaba-muted text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            {t('sponsors.cta_description')}
          </p>
          <a href="#contact"
             onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
             className="btn-primary">
            {t('sponsors.cta_button')}
          </a>
        </div>
      </div>
    </section>
  )
}
