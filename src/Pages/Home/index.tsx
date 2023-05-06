import React from "react";
import "./Home.scss";
import Hero from "../../Components/Hero"
import {BigCard, SmallCard} from "../../Components/Card";

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
                    <SmallCard/>
                </div>
            </section>
        </div>
    )
}


export default Home;