import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "../config/particleConfig.js";

const ParticlesBackground = () => {
    return (
        <Particles options={ParticlesConfig}/>
    );
}

export default ParticlesBackground;
