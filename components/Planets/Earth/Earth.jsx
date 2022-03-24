import EarthCore from "./EarthCore.jsx";

const Earth = ({option}) => {

    return(<>
        <section className="container-planet">
            <div className="planet">
                <div id="background-planet">
                    <img src="img/planets/earth/clouds.png" className="clouds"></img>

                    {(() => {
                        if(option === 2){ return <EarthCore/> }
                    })()}
                </div>

            </div>
        </section>

        <style jsx>{`
            section.container-planet{
                display: flex;
                justify-content: center;
                grid-column: 1/9;
            }

            .planet{
                display: flex;
                margin-top: 30px;
                width: 220px;
                height: 220px;
                background-color: #4D52EA;
                overflow: hidden;
                border-radius: 50%;
                position: relative;
                animation-duration: 20s;
            }

            #background-planet{
                width: 800px;
                background-size: 400px;
                animation: movesMobile 12s linear infinite;
                position: relative;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: url(img/planets/earth/continents.png);
                background-repeat: repeat-x;
            }

            .clouds{
                position: relative;
                left: -12px;
                width: 74%;
                animation: cloudsMoviment 1.9s ease-in infinite;
            }




            /* MEDIA QUERY */
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){
                .planet{
                    width:  280px;
                    height: 280px;
                }

                #background-planet{
                    width: 1000px;
                    background-size: 500px;
                    animation: movesTablet 12s linear infinite;
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

                #background-planet{
                    width: 100%;
                    background-size: auto;
                    animation: moves 12s linear infinite;
                }
            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                .planet{
                    width:  400px;
                    height: 400px;
                }

                #background-planet{
                    width: 100%;
                    background-size: auto;
                    animation: moves 12s linear infinite;
                }
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

            @keyframes movesMobile {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 400px 0px;
                }
            }

            @keyframes movesTablet {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 500px 0px;
                }
            }

            @keyframes moves {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 791px 0px;
                }
            }

            
        `}</style>
    </>);
}

export default Earth;