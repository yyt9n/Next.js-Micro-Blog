import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date, thumbnail

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合 - 今回は使用していない
/*
export async function getServerSideProps(context) {
  return {
    props: {
      // コンポーネントに渡すためのprops
    },
  };
}
*/

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          私はエンジニアです。/ Next.jsでマイクロブログを作成してみたよ。
        </p>
      </section>
      <section>
        <h2>📃エンジニアのブログ</h2>
        <div>
          <article></article>
        </div>
      </section>
      <div className={styles.grid}>
        { allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
        )) }
      </div>
    </Layout>
  )
}
