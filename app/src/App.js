import React, { useRef, useEffect } from 'react'
import flvjs from "flv.js"
import "./App.css"

const App = () => {

    const videoElement = useRef(null)

    useEffect(() => {
        const flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://tv.yinyan.fr'
        });
        flvPlayer.attachMediaElement(videoElement.current);
        flvPlayer.load();
        flvPlayer.play();
    }, [])

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Live
                        </h1>
                        <h2 className="subtitle">
                            Local student broadcasts his garden via a 3d printed remote control car
                        </h2>
                    </div>
                </div>
            </section>

            <div className="video-wrapper">
                <video controls ref={videoElement}></video>
            </div>
        </div>
    )
}

export default App
