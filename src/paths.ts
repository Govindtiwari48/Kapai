/** Public asset URLs (files live under `public/Kapai images/`). */
export function publicImg(filename: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  return encodeURI(`${base}Kapai images/${filename}`)
}
