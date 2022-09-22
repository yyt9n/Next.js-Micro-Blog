import Head from "next/head";
import Image from "next/image";

const name = "yyt9n"

export const siteTitle = "Next.js blog"

function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/images/profile.png" />
            </Head>
            <header>
                <Image src="/images/profile.png" alt="Profile Logo" width={72} height={72} />
                <h1>{name}</h1>
                <main>{children}</main>
            </header>
        </div>
    );
}

export default Layout;