import Link from 'next/link';

export default ({ children, title }) => (
    <div className="root">
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </header>

            <h1>{title}</h1>
            {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        
        <style jsx>
        {`
        .root{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
        header{
            width:100%;
            display: flex;
            justify-content:space-around;
            padding:1em;
            font-size:1.2rem;
            background:#000;
        }
        header a{
            color:#fff;
            text-decoration: none;
        }
        header a:hover{
            font-weight: bold;
            color:lightgrey
        }
        footer{
            padding:1em;
        }
        `}
        </style>

        <style global jsx>
        {`
        body{
            margin:0;
            font-size: 110%;
            background:#f0f0f0;
        }
        `}
        </style>
    </div>
)