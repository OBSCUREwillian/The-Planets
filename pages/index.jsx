import React, { useState } from "react";


// components
import AboutThePlanet from "../components/AboutThePlanet.jsx";
import Characteristics from "../components/Characteristics.jsx";
import Mercury from "../components/Planets/Mercury/Mercury.jsx";

export default function Mercurio(){
    
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

        <Mercury
            option = {option}
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
