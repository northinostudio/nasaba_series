import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'

const TAB_KEYS = ['tab_bts', 'tab_onset', 'tab_events']
const galleryItems = { tab_bts: [], tab_onset: [], tab_events: [] }

export default function Gallery() {
  const { t } = useTranslation()
  const [activeIdx, setActiveIdx] = useState(0)
  const activeKey = TAB_KEYS[activeIdx]
  const items     = galleryItems[activeKey] || []

  return (
    <section id="gallery" className="py-24 md:py-36 bg-nasaba-bg-alt">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="overline-terra">{t('gallery.overline')}</p>
          <h2 className="section-heading text-nasaba-ink">{t('gallery.heading')}</h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-nasaba-line">
            {TAB_KEYS.map((key, i) => (
              <button key={key} onClick={() => setActiveIdx(i)}
                className={`px-8 md:px-12 py-3.5 text-[11px] tracking-[0.25em] uppercase font-display font-semibold
                            transition-all ${i > 0 ? 'border-l border-nasaba-line' : ''} ${
                  activeIdx === i
                    ? 'bg-nasaba-terra text-white'
                    : 'text-nasaba-muted hover:text-nasaba-ink'
                }`}>
                {t(`gallery.${key}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {items.map((item, i) => (
              <div key={i} className="relative aspect-video overflow-hidden group">
                <img src={item.src} alt={item.caption || ''}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {item.caption && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm font-display">{item.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="card-light py-24 text-center">
            <div className="w-16 h-16 border-2 border-nasaba-line rounded-full
                            flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-nasaba-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-nasaba-terra font-display font-bold text-[11px] tracking-[0.35em] uppercase mb-3">
              {t(`gallery.${activeKey}`)}
            </p>
            <p className="text-nasaba-muted text-sm font-display font-medium">{t('gallery.coming_soon')}</p>
            <p className="text-nasaba-muted/50 text-xs mt-2">{t('gallery.coming_hint')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
