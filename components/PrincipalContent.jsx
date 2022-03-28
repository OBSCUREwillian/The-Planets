import AboutThePlanet from "../components/AboutThePlanet.jsx";
import Characteristics from "../components/Characteristics.jsx";

const PrincipalContent = ({children, setOption, option, planet}) => {

    return(<>
        {children}

        <AboutThePlanet
            {...planet}
            setOption = {setOption}
            option = {option}
        />

        <Characteristics
            {...planet.characteristics}
        />
    </>)
}

export default PrincipalContent;