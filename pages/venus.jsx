import React, { useState } from "react";

// components
import PrincipalContent from "../components/PrincipalContent.jsx"
import VenusPlanet from "../components/Planets/Venus/VenusPlanet.jsx";

export default function Venus(){

    const planet = {
        name: 'Vênus',

        overview: '1 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        internalStructure: '2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        surfaceGeology: '3 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe eum iusto, blanditiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur adipis landitiis quia eius autem facere quasi! 2 Lm dolor sit amet, consectetur a 2 Lm dolor sit amet, consectetur adipis quas ratione nihil saepe',

        characteristics: {
            rotationTime: '243 dias',
            revolutionTime: '225 dias',
            radius: '6.051 km',
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
            <VenusPlanet
                option={option}
            />
        </PrincipalContent>
    </>);
}
