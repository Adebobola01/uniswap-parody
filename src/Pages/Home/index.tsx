import React from "react";
import "./Home.scss";
import Hero from "../../Components/Hero"
import {BigCard, SmallCard} from "../../Components/Card";
import Footer from "../../Components/Footer";

const Home = (props: any) => {



    return (
        <div className="home">
            <Hero />
            <section className="home-body">
                <div className="home-bigcards">
                    <BigCard />
                    <BigCard/>
                </div>
                <div className="home-smallcards">
                    <SmallCard />
                    <SmallCard />
                    <SmallCard/>
                </div>
                <div className="home-powered">
                    <div className="home-powered__texts">
                        <p>Powered by the Uniswap Protocol</p>
                        <span>The leading decentralized crypto trading protocol, governed by a global community.</span>
                    </div>
                    <a>Learn more</a>
                </div>
            </section>
            <Footer/>
        </div>
    )
}


export default Home;