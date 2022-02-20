import EarthCore from "./EarthCore.jsx";

const Earth = ({option}) => {

    return(<>
        <div className="container-planet">
            <div className="planet">
                <img src="img/planets/earth/clouds.png" className="clouds"></img>

                {(() => {
                    if(option === 2){ return <EarthCore/> }
                })()}

            </div>
        </div>

        <style jsx>{`
            div.container-planet{
                display: flex;
                justify-content: center;
                grid-column: 1/9;
            }

            .planet{
                margin-top: 30px;
                width: 400px;
                height:400px;
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