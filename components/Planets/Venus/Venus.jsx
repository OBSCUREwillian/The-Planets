import VenusCore from "./VenusCore.jsx";

const Venus = ({option}) => {
    return(<>
        <div className="container-planet">
            <div className="planet">
                {(() => {
                    if(option === 2){ return <VenusCore/> }
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
                height: 400px;
                background-color: #FECF68;
                overflow: hidden;
                border-radius: 50%;
                background-image: url(img/planets/venus/venus.png);
                background-repeat: repeat-x;
                background-size: 270%;
                animation: moves 45s linear infinite;
                position: relative;
                border: none;
            }
            

            @keyframes moves {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 3240px 0;
                }
            }
        `}</style>
    </>)

    
}

export default Venus;