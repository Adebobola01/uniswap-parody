import React, { useState, useRef, useEffect } from "react";
import {useOutletContext} from "react-router-dom"
import "./Home.scss";
import Hero from "../../Components/Hero"
import {BigCard, SmallCard} from "../../Components/Card";
import Footer from "../../Components/Footer";
import cardImg1 from "../../assets/images/card1.png";
import cardImg2 from "../../assets/images/card2.png";
import cardImg3 from "../../assets/images/card3.png";


const Home = (props: any) => {
    const domRef: any = useRef();
    const [navBarHandler] = useOutletContext<any>();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                console.log("intersecting")
                if (e.isIntersecting) {                   
                   return navBarHandler(true);
                }
                return navBarHandler(false)
            })
        });
        observer.observe(domRef.current);
        // return () => {observer.unobserve(domRef.current)};
    }, [])

    return (
        <div className="home">
            <Hero />
            <section ref={domRef} className="home-body">
                <div className="home-bigcards">
                    <BigCard header="Swap tokens" body="Buy, sell, and explore tokens on Ethereum, Polygon, Optimism, and more." link="" linkText="Trade Tokens" />
                    <BigCard header="Trade NFTs" body="Buy and sell NFTs across marketplaces to find more listings at better prices." link="" linkText="Explore NFTs" card2={true} />
                </div>
                <div className="home-smallcards">
                    <SmallCard title="Buy crypto" text="Buy crypto with your credit card or bank account at the best rates." linkTitle="Buy now" image={ cardImg1} />
                    <SmallCard title="Earn" text="Provide liquidity to pools on Uniswap and earn fees on swaps." linkTitle="Buy now" image={ cardImg2} />
                    <SmallCard title="Build dApps" text="Build apps and tools on the largest DeFi protocol on Ethereum." linkTitle="Developer docs" image={ cardImg3} />

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