import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
        <article>
          <Link href="/">
            <img src="/images/thumbnail1.jpg" alt="" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>タイトル1</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            February 23, 2020
          </small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail1.jpg" alt="" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>タイトル1</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            February 23, 2020
          </small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail1.jpg" alt="" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>タイトル1</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            February 23, 2020
          </small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail1.jpg" alt="" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <a className={utilStyles.boldText}>タイトル1</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            February 23, 2020
          </small>
        </article>
      </div>
    </Layout>
  )
}
