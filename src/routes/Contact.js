import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg1 from '../components/HeroImg1';
import Form from '../components/Form';
const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg1 heading="Contact Me" text="Let's have a chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact