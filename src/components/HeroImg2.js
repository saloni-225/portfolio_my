import "./HeroImg2.css";

import React, { Component } from 'react';

class HeroImg2 extends Component {
    render() {
        return (
            <div className="hero-img2" >
                <div className="heading2">
                    <h1>{this.props.head}</h1>
                    <p>{this.props.tit}</p>
                </div>
            </div>
        );
    }

}
export default HeroImg2