import MarsCore from "./MarsCore.jsx";

const Mars = ({option}) => {

    return(<>
        <div className="container-planet">
            <div className="planet">

                {(() => {
                    if(option === 2){ return <MarsCore/> }
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
                background-color: red;
                overflow: hidden;
                border-radius: 50%;
                background-image: url(img/planets/mars/mars.png);
                background-repeat: repeat-x;
                background-size: 280%;
                animation: moves 100s linear infinite;
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
    </>);
}

export default Mars;