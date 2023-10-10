import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>BodhGaya,Bihar</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            9693689814</h4>
                    </div>
                    <div className="mail">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            salonikri225@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Myself</h4>
                    <p>My name is Saloni Kumari, and I am a B.Tech student in the CSE-AIML branch at Techno India University. I have a strong foundation in DBMS and a keen interest in AIML. Additionally, I possess frontend development skills like HTML, CSS, JavaScript and Framework like Bootstrap,jQuery and React</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/saloni-kumari-1255111bb/">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://github.com/saloni-225">
                            <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer