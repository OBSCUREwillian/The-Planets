import React, { useState } from "react";

// components
import AboutThePlanet from "../components/AboutThePlanet.jsx";
import Characteristics from "../components/Characteristics.jsx";
import Venus from "../components/Planets/Venus/Venus.jsx";

export default function VenusPlanet(){

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

        <Venus
            option={option}
        />
    
        <AboutThePlanet
            {...planet}
            setOption = {setOption}
            option = {option}
        />

        <Characteristics
            {...planet.characteristics}
        />

    </>);
}
