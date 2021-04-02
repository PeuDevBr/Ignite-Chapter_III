import { GetStaticProps } from 'next';
import Head from "next/head";
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from "./styles.module.scss"

export default function Posts() {

  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>02 de Abril de 2021</time>
          <strong>Como renomear arquivos de uma vez usando o terminal</strong>
          <p>Suponha que seu projeto tenha uma base de código com 150 arquivos JavaScript e você precisar migrar para TypeScript alterando as extensões dos arquivos. 🤔

          Como renomear a extensão do arquivo de .js para .ts ou arquivos React de .jsx para .tsx de maneira fácil e rápida?</p>
        </a>
        <a href="#">
          <time>02 de Abril de 2021</time>
          <strong>Como renomear arquivos de uma vez usando o terminal</strong>
          <p>Suponha que seu projeto tenha uma base de código com 150 arquivos JavaScript e você precisar migrar para TypeScript alterando as extensões dos arquivos. 🤔

          Como renomear a extensão do arquivo de .js para .ts ou arquivos React de .jsx para .tsx de maneira fácil e rápida?</p>
        </a>
        <a href="#">
          <time>02 de Abril de 2021</time>
          <strong>Como renomear arquivos de uma vez usando o terminal</strong>
          <p>Suponha que seu projeto tenha uma base de código com 150 arquivos JavaScript e você precisar migrar para TypeScript alterando as extensões dos arquivos. 🤔

          Como renomear a extensão do arquivo de .js para .ts ou arquivos React de .jsx para .tsx de maneira fácil e rápida?</p>
        </a>
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

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}