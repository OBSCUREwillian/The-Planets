import Link from 'next/link';
import { useRouter } from "next/router";

const HorizontalNav = () => {

    const router = useRouter();

    return(<>
        <ul>
            <li >
                <Link href="/">
                    <span 
                        className={router.pathname == "/" ? "active" : ""}
                    >
                        Mercúrio
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/venus">
                    <span
                        className={router.pathname == "/venus" ? "active" : ""}
                    >
                        Vênus
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/terra">
                    <span
                        className={router.pathname == "/terra" ? "active" : ""}
                    >
                        Terra
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/marte">
                    <span
                        className={router.pathname == "/marte" ? "active" : ""}
                    >
                        Marte
                    </span>
                </Link>
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
                display: flex;
                justify-content: space-between;
                font-weight: 700;
                letter-spacing: 1.2px;
                color: rgb(255, 255, 255, 0.6);
                font-size: 14px;
            }

            ul li{
                text-transform: uppercase;
            }

            ul li span{
                cursor: pointer;
            }
            
            ul li span:hover{
                color: white;
            }

            .active{
                color: white;
            }

            /* Small screen and laptops */
            @media (min-width: 769px){
                ul{
                    font-size: 12px;
                }
            }
            
        `}</style>
    
    </>)
}

export default HorizontalNav;