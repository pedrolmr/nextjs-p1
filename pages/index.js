import Link from 'next/link';
const index = () => (
    <div>
        <h1>Welcome</h1>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <p>this is the homepage</p>
    </div>
);
export default index;