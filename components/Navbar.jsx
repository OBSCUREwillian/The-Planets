import Link from 'next/link';
import { useRouter } from "next/router";


const Navbar = ({open, changeOpen}) => {
    const router = useRouter();

    return (<>
        
        <ul>
            <li>
                <div id="close-icon">
                    
                </div>
            </li>
            <li >
                <Link href="/">
                    <span 
                        onClick={()=>changeOpen()}
                        className={router.pathname == "/" ? "active" : ""}
                    >
                        Mercúrio
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/venus">
                    <span 
                        onClick={()=>changeOpen()}
                        className={router.pathname == "/venus" ? "active" : ""}
                    >
                        Vênus
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/earth">
                    <span 
                        onClick={()=>changeOpen()}
                        className={router.pathname == "/earth" ? "active" : ""}
                    >
                        Terra
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/mars">
                    <span 
                        onClick={()=>changeOpen()}
                        className={router.pathname == "/mars" ? "active" : ""}
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
            :global(body){
                overflow: ${open? 'hidden' : ''}
            }
            
            ul{
                padding-left: 20px;
                top: 0;
                background-color: rgb(13, 13, 68);
                height: 100vh;
                width: 50vw;
                position: absolute;
                z-index: 1;
                left: 0;
                font-size: 0.8em;
                font-weight: 700;
                letter-spacing: 1.2px;
                color: rgb(255, 255, 255, 0.6);
                transform: ${open ? 'translateX(0)' : 'translateX(-100%)'};
                transition: transform 0.3s ease-in-out;
            }
            
            #close-icon{
                height: 68px;
                width: 100%;
            }

            ul li{
                text-transform: uppercase;
                padding-bottom: 20px;
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

        `}</style>
    </>)
}

export default Navbar;