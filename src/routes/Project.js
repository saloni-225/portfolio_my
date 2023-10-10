import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg1 from '../components/HeroImg1';
import Work from '../components/Work';
const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg1 heading="PROJECTS" text="Some of my works" />
            <Work />
            <Footer />
        </div>
    )
}

export default Project