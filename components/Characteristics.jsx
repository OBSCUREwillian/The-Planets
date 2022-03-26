const Characteristics = ({rotationTime, revolutionTime, radius, averageTemp}) => {

    return (<>

        <section className='container'>

            <div>
                <span>TEMPO DE ROTAÇÃO</span>
                <span>{rotationTime}</span>
            </div>

            <div>
                <span>PERÍODO DE TRANSLAÇÃO</span>
                <span>{revolutionTime}</span>
            </div>

            <div>
                <span>RAIO</span>
                <span>{radius}</span>
            </div>

            <div>
                <span>TEMPERATURA MÉDIA</span>
                <span>{averageTemp}</span>
            </div>

        </section>

        <style jsx>{`
            .container{
                margin-top: 50px;
            }
            
            .container div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                border: 1px solid rgb(255, 255, 255, 0.15);
                height: 100px;
                padding-left: 20px;
            }

            .container div span{
                text-transform: uppercase;
                font-size: 11px;
                letter-spacing: 2px;
                font-weight: 700;
                color: rgb(255, 255, 255, 0.3);
            }

            .container div span:nth-child(2){
                font-size: 25px;
                font-family: 'Antonio', sans-serif;
                font-weight: 700;
                color: white;
                letter-spacing: 0;
                padding-top: 7px;
            }
            



            /* MEDIA QUERY */

            /* Mobile devices */
            @media (max-width: 480px){
                .container{
                    height: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            }
            
            /* ipads and tablets*/
            @media (min-width: 481px) and (max-width: 768px){
                .container{
                    margin-top: 50px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px
                }
            }
            
            /* Small screen and laptops */
            @media (min-width: 769px){
                .container{
                    display: flex;
                    grid-column: 1/13;
                    justify-content: space-between;
                    margin-top: 50px;
                }

                .container div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 20px;
                    width: 23%;
                    border: 1px solid rgb(255, 255, 255, 0.15);
                    height: 100px;
                }

                .container div span:nth-child(2){
                    font-size: 36px;
                }
            }

            /* Large screen and desktops */
            @media (min-width: 1025px){
                
            }

            /*Very large screen and TVs */
            
            /*@media (min-width: 1201px){
                
            }*/
            
        `}</style>
    </>)
}

export default Characteristics;