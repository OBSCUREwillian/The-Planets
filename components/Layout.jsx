import Head from "next/head";
import React, { useState } from "react";

// components
import ParticlesBackground from "./ParticlesBackground.jsx";
import Hamburguer from "./Hamburguer.jsx";
import HorizontalNav from "./HorizontalNav.jsx";

const Layout = ({children}) => {

    const [open, setOpen] = useState(false);

    function changeOpen(){
        setOpen(!open);
    }

    return(<>

        <ParticlesBackground/>

        <Head>
            <title>Os planetas</title>
            <meta
                name="description"
                content="Generated by create next app"
            />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <div 
            className={open ? '' : 'display-none'} 
            id="overlay"
            onClick={()=>changeOpen()}
        ></div>

        <header>
            <div id="container-hamburguer">
                <Hamburguer
                    open={open}
                    changeOpen={changeOpen}
                />
            </div>

            
            <div id="logo">
                OS PLANETAS
            </div>


            <div id="container-horizontal-nav">
                <HorizontalNav/>
            </div>
        </header>


        <main>
            <div>
                {children}
            </div>
        </main>

        <footer>
        </footer>



        <style jsx>{`

            header{
                position: relative;
                display: flex;
                align-items: center;
                padding: 20px 80px 20px 20px;
                border-bottom: 1px solid;
                border-color: rgb(255,255,255, 0.2);
            }

            #logo{
                font-family: 'Antonio', sans-serif;
                font-weight: 600;
                font-size: 20px;
                white-space: nowrap;
                padding-right: 45px;
            }

            #container-horizontal-nav{
                position: relative;
                width: 100%;
                max-width: 600px;
                margin-left: auto;
            }

            #overlay{
                width: 100vw;
                height: 100vh;
                background-color: rgb(0,0,0,0.5);
                position: absolute;
                z-index: 1;
            }

            #container-hamburguer{
                padding-right: 30px;
            }


            

            main{
                display: flex;
                justify-content: center;
                margin-top: 50px;
            }
            main div{
                padding-left: 40px; 
                padding-right: 40px; 
                /* border: 1px solid red; */
            }


            /* MEDIA QUERY */
            
            /* Mobile devices */
            @media (min-width: 320px) and (max-width: 480px){
                
            }
            
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){
                header{
                    padding-left:  30px ;
                    padding-right: 30px ;
                }

                #logo{
                    font-size: 30px;
                }
            }

            @media (max-width: 768px){
                #container-horizontal-nav{
                    display: none;
                }
            }

            /* Small screen and laptops */
            @media (min-width: 769px){
                header{
                    padding-left:  40px ;
                    padding-right: 40px ;
                }

                #logo{
                    font-size: 35px;
                }

                #overlay, #container-hamburguer{
                    display: none;
                }

                
                main{
                    align-items: center;
                    margin-top: 100px;
                }
                main div{
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    max-width: 750px;
                }
            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                main div{
                    max-width: 1000px;
                }
            }

            /*Very large screen and TVs */
            @media (min-width: 1201px){

            }


        `}</style>
    </>)
}

export default Layout;