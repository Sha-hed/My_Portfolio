import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import App from "../App";
const Main = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <div>
            {init && <Particles id="tsparticles" url="particles.json" particlesLoaded={particlesLoaded} />}
            <App></App>
        </div>
    );
};

export default Main;