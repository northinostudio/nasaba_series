import { useState } from 'react'
import { siteConfig, socialLinks } from '../data/content'
import { useTranslation } from '../hooks/useTranslation'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]  = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  const fields = [
    { name: 'name',    label: t('contact.form_name'),    type: 'text' },
    { name: 'email',   label: t('contact.form_email'),   type: 'email' },
    { name: 'subject', label: t('contact.form_subject'), type: 'text' },
  ]

  return (
    <section id="contact" className="py-24 md:py-36 bg-nasaba-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="overline-terra">{t('contact.overline')}</p>
          <h2 className="section-heading text-nasaba-ink">{t('contact.heading')}</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-nasaba-muted text-sm max-w-md mx-auto mt-2 leading-relaxed">
            {t('contact.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

          {/* Info column */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="overline-terra text-[9px]">{t('contact.email_label')}</p>
              <a href={`mailto:${siteConfig.email}`}
                 className="font-display font-bold text-xl text-nasaba-ink hover:text-nasaba-terra transition-colors">
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="overline-terra text-[9px]">{t('contact.social_label')}</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(s => (
                  <a key={s.platform_key} href={s.url} target="_blank" rel="noopener noreferrer"
                     className="card-light flex items-center justify-between p-4
                                hover:border-nasaba-terra/50 hover:bg-nasaba-terra-l transition-all group">
                    <div>
                      <p className="text-nasaba-muted text-[9px] uppercase tracking-[0.3em] font-display font-bold">
                        {s.platform_key}
                      </p>
                      <p className="text-nasaba-ink font-display font-semibold group-hover:text-nasaba-terra transition-colors">
                        {s.handle}
                      </p>
                    </div>
                    <span className="text-nasaba-muted/40 group-hover:text-nasaba-terra transition-colors text-lg">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-light p-6">
              <p className="overline-terra text-[9px]">{t('contact.press_label')}</p>
              <p className="text-nasaba-muted text-sm leading-relaxed">{t('contact.press_description')}</p>
            </div>
          </div>

          {/* Form column */}
          <div>
            {sent ? (
              <div className="card-light p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 border-2 border-gold flex items-center justify-center mb-6 rounded-full">
                  <span className="text-gold text-2xl font-bold">✓</span>
                </div>
                <p className="font-display font-bold text-2xl text-nasaba-ink mb-3">
                  {t('contact.success_heading')}
                </p>
                <p className="text-nasaba-muted text-sm">{t('contact.success_sub')}</p>
                <button onClick={() => setSent(false)}
                  className="mt-8 text-nasaba-terra text-xs tracking-widest uppercase font-display font-bold
                             hover:text-nasaba-terra/70 transition-colors">
                  {t('contact.success_again')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {fields.map(field => (
                  <div key={field.name}>
                    <label className="block text-[9px] tracking-[0.35em] uppercase font-display font-bold
                                      text-nasaba-muted mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.name]}
                      onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-white border border-nasaba-line px-4 py-3.5
                                 text-nasaba-ink text-sm font-sans
                                 focus:outline-none focus:border-nasaba-terra transition-colors
                                 placeholder:text-nasaba-muted/40"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[9px] tracking-[0.35em] uppercase font-display font-bold
                                    text-nasaba-muted mb-2">
                    {t('contact.form_message')}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-nasaba-line px-4 py-3.5
                               text-nasaba-ink text-sm font-sans
                               focus:outline-none focus:border-nasaba-terra transition-colors
                               resize-none placeholder:text-nasaba-muted/40"
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center mt-2">
                  {t('contact.form_submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
