import VenusCore from "./VenusCore.jsx";

const Venus = ({option}) => {
    return(<>
        <section className="container-planet">
            <div className="planet">
                {(() => {
                    if(option === 2){ return <VenusCore/> }
                })()}

            </div>
        </section>

        <style jsx>{`
            section.container-planet{
                display: flex;
                justify-content: center;
                grid-column: 1/9;
            }

            .planet{
                margin-top: 30px;
                width:  220px;
                height: 220px;
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
            
            /* MEDIA QUERY */
            /* Mobile devices */
            @media (min-width: 320px) and (max-width: 480px){
                
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