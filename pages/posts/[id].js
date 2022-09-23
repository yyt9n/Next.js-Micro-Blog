import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // 含まれていないパスにアクセスすると404エラー
    }
}

// 開発時はSSRになる。本番環境ではビルド時にプリレンダリングされるのでSSGでURLの切り替わりが速くなる。
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id); // リクエストにあるurlのidを渡す
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>{postData.title}{postData.date}{postData.blogContentHTML}</Layout>
    );
}