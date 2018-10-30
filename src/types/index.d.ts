declare function require(string): string

export type Site = {
  href: string
  placeholderImgSrc: string
  imgSrc: string
  label: string
}

export type Project = {
  href: string
  placeholderImgSrc: string
  imgSrc: string
  title: string
  description: string
  tech: Array<{ name: string; description: string; link: string }>
}
