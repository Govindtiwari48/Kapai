import type { CSSProperties } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  /** LCP / hero — eager load + high fetch priority */
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className,
  style,
  priority,
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}
