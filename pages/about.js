import Link from 'next/link';
const about = () => (
    <div>
        <h1>About</h1>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <p>I'm a programmer</p>
    </div>
);
export default about;