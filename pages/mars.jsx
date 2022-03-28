import React, { useState } from "react";

// components
import PrincipalContent from "../components/PrincipalContent.jsx"
import MarsPlanet from "../components/Planets/Mars/MarsPlanet.jsx";

export default function Marte(){

    const planet = {
        name: 'Marte',

        overview: '1 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        internalStructure: '2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        surfaceGeology: '3 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        characteristics: {
            rotationTime: '1 dia',
            revolutionTime: '687 dias',
            radius: '3.389 km',
            averageTemp: '450°C'
        }
    }


    const [option, setOption] = useState(1);

    return (<>

        <PrincipalContent
            planet = {planet}
            setOption = {setOption}
            option = {option}
        >
            <MarsPlanet
                option={option}
            />
        </PrincipalContent>

    </>);
}
