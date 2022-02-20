import React, { useState } from "react";

// components
import AboutThePlanet from "../components/AboutThePlanet.jsx";
import Characteristics from "../components/Characteristics.jsx";
import Earth from "../components/Planets/Earth/Earth.jsx";

export default function Terra(){

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

    const {name, overview, internalStructure, surfaceGeology, characteristics:{rotationTime, revolutionTime, radius, averageTemp}} = planet
    

    const [option, setOption] = useState(1);

    return (<>
    
        <Earth
            option = {option}
        />

        <AboutThePlanet
            planet = {name}
            overview = {overview}
            internalStructure = {internalStructure}
            surfaceGeology = {surfaceGeology}
            setOption = {setOption}
            option = {option}
        />

        <Characteristics
            rotationTime={rotationTime}
            revolutionTime={revolutionTime}
            radius={radius}
            averageTemp={averageTemp}
        />

    </>);
}
