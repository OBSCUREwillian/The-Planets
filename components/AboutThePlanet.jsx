import React, { useState } from "react";

const AboutThePlanet = ({overview, internalStructure, surfaceGeology, planet, setOption, option}) => {

    // const [option, setOption] = useState(1);
    
    function changeOption(optionSelected){
        setOption(optionSelected);
    }

    return(<>
        
        <div className="container">
            <h1>{planet}</h1>

            {(() => {
                switch (option) {
                    case 1:
                        return <p>{overview}</p>
                    break;

                    case 2:
                        return <p>{internalStructure}</p>
                    break;

                    case 3:
                        return <p>{surfaceGeology}</p>
                    break;

                    default:
                        break;
                }
            })()}

            <span className="fonte">Fonte: </span>

            <div className="buttons-container">

                <button className={option === 1 ? "isActive" : "notActive"} onClick={ ()=> changeOption(1) }>
                    <span>01</span> VISÃO GERAL
                </button>

                <button className={option === 2 ? "isActive" : "notActive"} onClick={ ()=>changeOption(2) }>
                    <span>02</span> ESTRUTURA INTERNA
                </button>

                <button className={option === 3 ? "isActive" : "notActive"} onClick={ ()=>changeOption(3) }>
                    <span>03</span> GEOLOGIA DA SUPERFÍCIE
                </button>

            </div>
        </div>

        <style jsx>{`

            .container{
                grid-column: 9/13;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            h1{
                font-family: 'Antonio', sans-serif;
                text-transform: uppercase;
                font-size: 3vw;
                margin: 0;
            }

            p{
                line-height: 1.5;
                font-weight: 300;
                color: rgb(255, 255, 255, 0.5);
            }

            .buttons-container{
                margin-top: 35px;
                display: flex;
                flex-direction: column;
            }

            .buttons-container button{
                margin-bottom: 17px;
                border: 1px solid rgb(255, 255, 255, 0.15);
                height: 43px;
                color: white;
                text-align: left;
                font-weight: 600;
                cursor: pointer;
                letter-spacing: 2px;
            }

            .buttons-container button span{
                padding-left: 20px;
                padding-right: 20px;
                color: rgb(255, 255, 255, 0.3);

            }


            .isActive{
                background: #6D2ED5;
            }
            .notActive{
                background: transparent;
            }

            .fonte{

            }



        `}</style>
        
    </>)

}

export default AboutThePlanet;