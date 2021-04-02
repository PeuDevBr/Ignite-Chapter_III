import Head from "next/head";
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