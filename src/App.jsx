import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particles from './particles';
import Animate from 'react-smooth';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="App">
            <Animate to="1" from="0" attributeName="opacity">
                <Particles id="tsparticles" options={particles}  init={particlesInit} loaded={particlesLoaded}/>
                <div className="App-header">
                    
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        Edit <code>src/particles.json</code> to customize Particles, then save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <a
                        className="App-link"
                        href="https://particles.js.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See Particles samples
                    </a>
                </div>
            </Animate>
        </div>
    );
}

export default App;
