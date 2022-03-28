import React, { useState } from "react";

// components
import PrincipalContent from "../components/PrincipalContent.jsx";
import EarthPlanet from "../components/Planets/Earth/EarthPlanet.jsx";

export default function Earth(){

    const planet = {
        name: 'Terra',

        overview: '1 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        internalStructure: '2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        surfaceGeology: '3 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        characteristics: {
            rotationTime: '0.99 dias',
            revolutionTime: '365.26 dias',
            radius: '6.371 km',
            averageTemp: '16°C'
        }
    }


    const [option, setOption] = useState(1);
    
    return (<>
        <PrincipalContent
            planet = {planet}
            setOption = {setOption}
            option = {option}
        >
            <EarthPlanet
                option = {option}
            />
        </PrincipalContent>
    </>);
}
