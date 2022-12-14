import Head from "next/head";
import Image from "next/image";
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'

const name = "@ yyt9n"

export const siteTitle = "Next.js blog"

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/profile.png" />
            </Head>
            <header className={styles.header}>
                <Image src="/images/profile.png" alt="Profile Logo" width={72} height={72} className={utilStyles.borderCircle} />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <main>{children}</main>
                {!home && (
                    <div>
                        <Link href="/">←ホームへ戻る</Link>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Layout;