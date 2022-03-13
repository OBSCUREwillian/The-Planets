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
                width:  220px;
                height: 220px;
                background-color: red;
                overflow: hidden;
                border-radius: 50%;
                background-image: url(img/planets/mars/mars.png);
                background-repeat: repeat-x;
                background-size: 280%;
                animation: moves 100s linear infinite;
                position: relative;
            }




            /* MEDIA QUERY */

            /* Mobile devices */
            @media (min-width: 320px) and (max-width: 480px){
                
            }
            
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){

            }
            
            /* Small screen and laptops */
            @media (min-width: 769px) and (max-width: 1024px){

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