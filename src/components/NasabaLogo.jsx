export default function NasabaLogo({ className = '', inverted = false, size = 'md' }) {
  const txtCls = {
    xs: 'text-sm  tracking-[0.15em]',
    sm: 'text-lg  tracking-[0.18em]',
    md: 'text-xl  tracking-[0.2em]',
    lg: 'text-3xl tracking-[0.2em]',
    xl: 'text-5xl tracking-[0.2em]',
  }[size] ?? 'text-xl tracking-[0.2em]'

  const color = inverted ? 'text-white' : 'text-nasaba-ink'

  return (
    <span className={`font-display font-bold leading-none ${txtCls} ${color} ${className}`}>
      NASABA
    </span>
  )
}
