import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"></img>
            </div>
            <div className="content">
                <p>HI I'M A FRONT-END DEVELOPER</p>
                <h1>REACT DEVELOPER</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}

export default Heroimg