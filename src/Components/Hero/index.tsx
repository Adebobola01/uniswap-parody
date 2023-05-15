import React from "react";
import Swap from "../Swap";
import "./Hero.scss";
import HeroBtn from "../Buttons/heroBtn";

const Hero = (props: any) => {
    
    return (
        <section className="hero" >
            <div className="hero-background">
            </div>
            <div className="hero-top">
            </div>
            <div className="hero__texts" >
                <a href="swap">
                    <Swap style={{ top: "45%" }} hero={true} />
                </a>
                <div className="hero__texts--h1-container">
                    <h1>Trade Crypto and NFTs with confidence</h1>
                </div>
                <div className="hero__texts--body-container">
                    <p>Buy, sell, and explore tokens and NFTs</p>
                    <HeroBtn />
                    <span className="hero-more">
                        <p>Learn more</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(93, 103, 133)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero;