import "./SplashStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import me from "../assets/me.png"
const SplashScreen = () => {
    return (
        <div className="splashscreen">
            <div className="img-screen">

                <img src={me} alt="about_me"></img>
                <h1>Saloni Kumari</h1>
                <p>Front-End Developer</p>
                <div>
                    <Link to="/home" className="btn">Hire Me</Link>
                </div>
            </div>

        </div>
    )
}

export default SplashScreen