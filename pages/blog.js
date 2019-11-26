import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({title}) => (
    <li>
        <Link href={`/post?title=${title}`}><a>React post</a></Link>
    </li>
);

export default () => (
    <Layout title="Blog">
        <ul>
            <PostLink title="react"/>
        </ul>

    </Layout>
);