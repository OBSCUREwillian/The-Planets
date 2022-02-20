import Link from 'next/link';

const Navbar = () => {

    return (<>
        
        <ul>
            <li>
                <Link href="/">Mercúrio</Link>
            </li>
            <li>
                <Link href="/venus">Vênus</Link>
            </li>
            <li>
                <Link href="/terra">Terra</Link>
            </li>
            <li>
                <Link href="/marte"> Marte </Link>
            </li>
            <li>
                Júpiter
            </li>
            <li>
                Saturno
            </li>
            <li>
                Urano
            </li>
            <li>
                Netuno
            </li>
        </ul>

        <style jsx>{`
            ul{
                width: 800px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.8em;
                font-weight: 700;
                letter-spacing: 1.2px;
                color: rgb(255, 255, 255, 0.6)
            }
            ul li{
                text-transform: uppercase;
            }
        `}</style>
    </>)
}

export default Navbar;