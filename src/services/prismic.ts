import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  // req?:(opcional) unknown (não sabemos o tipo)
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    { 
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return prismic
}