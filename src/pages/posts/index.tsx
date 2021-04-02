import { GetStaticProps } from 'next';
import Head from "next/head";
import Prismic from '@prismicio/client';


import { getPrismicClient } from '../../services/prismic';

import styles from "./styles.module.scss"
import { RichText } from 'prismic-dom';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updated: string;
}
interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {

  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        { posts.map(post => (
          <a href="#" key={post.slug}>
          <time>{post.updated}</time>
          <strong>{post.title}</strong>
          <p>
            {post.excerpt}
          </p>
        </a>
        ))}
      </div>
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    // busca todos os documentos do tipo 'Publication'
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    // e pega o título e o conteúdo de cada publicação
    pageSize: 100, // quantidade máxima por página
  })

  //console.log(JSON.stringify(response, null, 2));

  // formatando os dados
  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      // procura um conteúdo que o tipo seja igual a paragraph, caso não encontre retorna uma string vazia
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR' , {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })


  return {
    props: {posts}
  }
}