import EarthCore from "./EarthCore.jsx";

const EarthPlanet = ({option}) => {

    return(<>
        <section className="container-planet">
            <div className="planet">
                <div id="background-planet">
                    <img src="img/planets/earth/clouds.png" className="clouds"></img>

                    {option === 2 ? <EarthCore/> : ''}

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
            }

            #background-planet{
                width: 1380px;
                background-size: 690px 210px;
                animation: movesMobile 20s linear infinite;
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
                    width: 1758px;
                    background-size: 879px 270px;
                    animation: movesTablet 20s linear infinite;
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
                    width: 2386px;
                    background-size: 1193px 370px;
                    animation: moves 20s linear infinite;
                }
            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                .planet{
                    width:  400px;
                    height: 400px;
                }

                #background-planet{
                    width: 2512px;
                    background-size: 1256px 390px;
                    animation: movesLarge 20s linear infinite;
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
                    background-position: 0 center;
                }

                100% {
                    background-position: 690px center;
                }
            }

            @keyframes movesTablet {
                0% {
                    background-position: 0 center;
                }

                100% {
                    background-position: 879px center;
                }
            }

            @keyframes moves {
                0% {
                    background-position: 0 center;
                }

                100% {
                    background-position: 1193px center;
                }
            }

            @keyframes movesLarge {
                0% {
                    background-position: 0 center;
                }

                100% {
                    background-position: 1256px center;
                }
            }

            
        `}</style>
    </>);
}

export default EarthPlanet;