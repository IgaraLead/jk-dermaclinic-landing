const LOGO_FULL = "/brand/jk-logo-mark.svg"
const LOGO_MONOGRAM = "/brand/jk-logo-monogram.svg"

export function JKMark({ size = 60, className = "" }) {
  return (
    <img
      src={LOGO_MONOGRAM}
      alt="Monograma JK Dermaclinic"
      width={size}
      height={size}
      className={`block object-contain ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  )
}

export function JKLogo({ markSize = 44, className = "" }) {
  return (
    <img
      src={LOGO_FULL}
      alt="Logo JK Dermaclinic"
      width={markSize * 2.2}
      height={markSize * 1.5}
      className={`block object-contain ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  )
}
