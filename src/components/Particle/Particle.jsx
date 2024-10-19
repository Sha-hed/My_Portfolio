import Particles from "@tsparticles/react";
import ParticleConfig from "../ParticleConfig/ParticleConfig";
const Particle = () => {
    return (
        <div>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
};

export default Particle;