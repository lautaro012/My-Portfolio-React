import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particles from '../../particles';
import Typed from 'react-typed';
import Animate from 'react-smooth';
import './Home.css'

export default function Home () {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <section className='home-conteiner' id='Home'>
            <Animate to="1" from="0" attributeName="opacity">
                <Particles style={{position:'absolute'}}  id="tsparticles" options={particles}  init={particlesInit} loaded={particlesLoaded}/>
                <div>
                    <div className='string-conteiner'>
                        <h1> ROBLES LAUTARO EZEQUIEL </h1>
                        <strong>
                            <Typed
                            strings={[
                            "Front End Developer",
                            "Back End Developer",
                            "Technical Engineer"
                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                            />
                        </strong>
                    </div>
                </div>
            </Animate>
         </section>
    )
}