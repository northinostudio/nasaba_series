import { useState, useEffect } from 'react'
import { castMembers, crewMembers } from '../data/content'
import { useTranslation } from '../hooks/useTranslation'
import abdulImg  from '../assets/abdul.png'
import zahraImg  from '../assets/zahra.png'
import ahmadImg  from '../assets/ahmad.png'
import amiraImg  from '../assets/amira.png'
import drUmarImg from '../assets/dr-umar.png'
import alhajiImg from '../assets/alhaji.png'
import hajiyaImg from '../assets/hajiya.png'

const IMAGE_MAP = {
  'abdul':          abdulImg,
  'zahra':          zahraImg,
  'ahmad':          ahmadImg,
  'amira':          amiraImg,
  'dr-umar':        drUmarImg,
  'alhaji-ahmad':   alhajiImg,
  'hajiya-zainab':  hajiyaImg,
}

function PlaceholderAvatar({ label }) {
  const initials = (label || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="w-full h-full bg-nasaba-card flex flex-col items-center justify-center gap-3 bg-nasaba-dark/60">
      <svg viewBox="0 0 80 80" className="w-20 h-20 text-nasaba-border" fill="currentColor">
        <circle cx="40" cy="28" r="16" opacity="0.4" />
        <ellipse cx="40" cy="72" rx="28" ry="18" opacity="0.4" />
      </svg>
      <span className="text-white/20 text-xs tracking-widest">{initials}</span>
    </div>
  )
}

function CastCard({ member, onClick, t }) {
  const name     = t(`characters.${member.id}.name`)
  const credit   = t(`characters.${member.id}.credit`)
  const category = t(`characters.${member.id}.category`)
  const quote    = t(`characters.${member.id}.quote`)

  return (
    <div className="group cursor-pointer card-dark overflow-hidden hover:border-gold/50 transition-all duration-300"
         onClick={() => onClick(member)}>
      <div className="relative overflow-hidden aspect-[3/4]">
        {IMAGE_MAP[member.id]
          ? <img src={IMAGE_MAP[member.id]} alt={name}
                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
          : <PlaceholderAvatar label={name} />}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-gold text-[10px] tracking-widest uppercase mb-1">{category}</p>
          <h3 className="font-display font-bold text-xl text-white">{name}</h3>
          <p className="text-white/40 text-xs mt-0.5">{credit}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="font-serif italic text-white/60 text-sm leading-relaxed line-clamp-2">{quote}</p>
        <p className="text-gold/50 text-[10px] mt-3 uppercase tracking-widest">{t('cast_ui.view_character')}</p>
      </div>
    </div>
  )
}

function CrewCard({ member, t }) {
  const name = t(`crew.${member.id}.name`)
  const role = t(`crew.${member.id}.role`)
  const bio  = t(`crew.${member.id}.bio`)

  return (
    <div className="card-dark overflow-hidden hover:border-gold/30 transition-all duration-300">
      <div className="relative overflow-hidden aspect-[3/4]">
        {IMAGE_MAP[member.id]
          ? <img src={IMAGE_MAP[member.id]} alt={name} className="w-full h-full object-cover object-top" />
          : <PlaceholderAvatar label={role} />}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-gold text-[10px] tracking-widest uppercase mb-1">{role}</p>
          <h3 className="font-serif text-xl text-white">{name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-white/50 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}

function CharacterModal({ member, onClose, t }) {
  if (!member) return null
  const name      = t(`characters.${member.id}.name`)
  const credit    = t(`characters.${member.id}.credit`)
  const archetype = t(`characters.${member.id}.archetype`)
  const category  = t(`characters.${member.id}.category`)
  const quote     = t(`characters.${member.id}.quote`)
  const bio       = t(`characters.${member.id}.bio`)
  const details   = t(`characters.${member.id}.details`)

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
         onClick={onClose}>
      <div className="bg-nasaba-card border border-nasaba-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           onClick={e => e.stopPropagation()}>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto min-h-[300px]">
            {IMAGE_MAP[member.id]
              ? <img src={IMAGE_MAP[member.id]} alt={name} className="w-full h-full object-cover object-top" />
              : <PlaceholderAvatar label={name} />}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-nasaba-card/40 hidden md:block" />
          </div>

          <div className="p-8 md:p-10 flex flex-col">
            <button onClick={onClose}
              className="self-end text-white/30 hover:text-white text-xs tracking-widest uppercase mb-8 transition-colors">
              {t('cast_ui.close')}
            </button>

            <p className="text-gold text-[10px] tracking-widest uppercase mb-2">{category}</p>
            <h2 className="font-display font-bold text-4xl text-white mb-1">{name}</h2>
            <p className="text-white/40 text-sm mb-2">{credit}</p>
            <p className="text-gold/70 text-sm font-serif italic mb-6">{archetype}</p>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-white/70 text-sm leading-relaxed mb-5">{bio}</p>

            {Array.isArray(details) && (
              <ul className="space-y-3 mb-6">
                {details.map((d, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                    <span className="text-gold mt-1 shrink-0">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}

            <blockquote className="border-l-2 border-gold pl-4 mt-auto">
              <p className="font-serif italic text-white/75 text-lg">"{quote}"</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Cast() {
  const { t } = useTranslation()
  const [tab, setTab]           = useState('cast')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash
      if (hash === '#crew') setTab('crew')
      else if (hash === '#cast') setTab('cast')
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return (
    <section id="cast" className="py-24 md:py-36 bg-nasaba-dark scroll-mt-16">
      <div id="crew" className="relative -top-24 invisible h-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-title">{t('cast_ui.overline')}</p>
          <h2 className="section-heading text-white">
            {tab === 'cast' ? t('cast_ui.heading_cast') : t('cast_ui.heading_crew')}
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/40 text-sm max-w-xl mx-auto mt-3">
            {tab === 'cast' ? t('cast_ui.subtitle_cast') : t('cast_ui.subtitle_crew')}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-nasaba-border">
            {[
              { key: 'cast', label: t('cast_ui.tab_cast') },
              { key: 'crew', label: t('cast_ui.tab_crew') },
            ].map(({ key, label }) => (
              <button key={key}
                onClick={() => { setTab(key); history.replaceState(null, '', `#${key}`) }}
                className={`px-10 py-3 text-[11px] tracking-widest uppercase font-display font-bold transition-all ${
                  key === 'crew' ? 'border-l border-nasaba-border' : ''
                } ${tab === key
                    ? 'bg-gold text-nasaba-dark'
                    : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {tab === 'cast' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {castMembers.map(m => <CastCard key={m.id} member={m} onClick={setSelected} t={t} />)}
          </div>
        )}

        {tab === 'crew' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {crewMembers.map(m => <CrewCard key={m.id} member={m} t={t} />)}
          </div>
        )}
      </div>

      <CharacterModal member={selected} onClose={() => setSelected(null)} t={t} />
    </section>
  )
}
