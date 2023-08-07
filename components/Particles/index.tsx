'use client'
import React, { useCallback } from 'react'

import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from 'tsparticles';


function ParticlesTS() {
    const particlesInit = useCallback(async (engine: Engine) => {   
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine)
        
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        
    }, []);
    const themeLocal = localStorage.getItem('theme');
    console.log(themeLocal)

    return (
        <div>

            <Particles
                options={{
                    fpsLimit: 60,
                    background: {
                        opacity: 0
                    },
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            
                            resize: true
                        },
                        modes: {
                            push: { quantity: 0.2 },
                        }
                    },

                    particles: {
                        color: { value:`${themeLocal == 'dark' ? "#D94A6D" :  "#DE7F26"}`  },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: "out",
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000
                            },
                            value: 20
                        },
                        shadow: {
                            blur: 8,
                            color: {
                                value: {
                                    r: 227,
                                    g: 119,
                                    b: 25,
                                }

                            },
                            enable: true
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                speed: 0.05,
                                sync: true,
                                startValue: "max",
                                count: 1,
                                destroy: "min"
                            },
                            value: {
                                min: 0,
                                max: 0.8
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: .01, max: 5 }
                        }

                    }
                }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded} />
        </div>
    ) 
}

export default ParticlesTS