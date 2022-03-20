import EarthCore from "./EarthCore.jsx";

const Earth = ({option}) => {

    return(<>
        <section className="container-planet">
            <div className="planet">
                <img src="img/planets/earth/clouds.png" className="clouds"></img>

                {(() => {
                    if(option === 2){ return <EarthCore/> }
                })()}

            </div>
        </section>

        <style jsx>{`
            section.container-planet{
                display: flex;
                justify-content: center;
                align-items: center;
                grid-column: 1/9;
            }

            .planet{
                margin-top: 30px;
                width: 220px;
                height: 220px;
                background-color: #4D52EA;
                overflow: hidden;
                border-radius: 50%;
                background-image: url(img/planets/earth/continents.png);
                background-repeat: repeat-x;
                background-size: 170%;
                animation: moves 12s linear infinite;
                position: relative;
            }

            .clouds{
                width: 120%;
                position: relative;
                animation: cloudsMoviment 1.9s ease-in infinite;
            }




            /* MEDIA QUERY */
            /* Mobile devices */
            @media (min-width: 320px) and (max-width: 480px){
                .planet{
                    animation-duration: 20s;
                }
            }
            
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){
                .planet{
                    width:  280px;
                    height: 280px;
                }
            }
            
            /* Small screen and laptops */
            @media (min-width: 769px) and (max-width: 1024px){
                section.container-planet{
                    align-items: center;
                }

                .planet{
                    width:  380px;
                    height: 380px;
                }
            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                .planet{
                    width:  400px;
                    height: 400px;
                }
            }

            /*Very large screen and TVs */
            @media (min-width: 1201px){

            }
            
            @keyframes cloudsMoviment{

                0%{
                    top: 0;
                }

                50%{
                    top: 1%;
                }

                100%{
                    top: 0;
                }

            }


            @keyframes moves {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 680px 0;
                }
            }
        `}</style>
    </>);
}

export default Earth;