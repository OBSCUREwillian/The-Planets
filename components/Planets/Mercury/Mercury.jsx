import MercuryCore from "./MercuryCore.jsx";

const Mercury = ({option}) => {
    return(<>
        <div className="container-planet">
            <div className="planet">
                {(() => {
                    if(option === 2){ return <MercuryCore/> }
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
                background-color: #7D4B2B;
                overflow: hidden;
                border-radius: 50%;
                background-image: url(img/planets/mercury/mercury.png);
                background-repeat: repeat-x;
                background-size: 280%;
                animation: moves 150s linear infinite;
                position: relative;
            }
            

            @keyframes moves {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 10000px 0;
                }
            }
        `}</style>
    </>)

    
}

export default Mercury;