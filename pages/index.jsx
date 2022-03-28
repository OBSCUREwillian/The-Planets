import React, { useState } from "react";


// components
import PrincipalContent from "../components/PrincipalContent.jsx"
import MercuryPlanet from "../components/Planets/Mercury/MercuryPlanet.jsx";

export default function Mercury(){
    
    const planet = {
        name: 'Mercúrio',

        overview: '1 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        internalStructure: '2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        surfaceGeology: '3 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        characteristics: {
            rotationTime: '59 dias',
            revolutionTime: '88 dias',
            radius: '2.439 km',
            averageTemp: '179°C'
        }
    }


    const [option, setOption] = useState(1);

    return(<>

        <PrincipalContent
            planet = {planet}
            setOption = {setOption}
            option = {option}
        >
            <MercuryPlanet
                option = {option}
            />
        </PrincipalContent>
    </>);
}
