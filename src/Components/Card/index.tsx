import React from "react";
import "./Card.scss";

export const BigCard = ({header, body, link, linkText, card2}: any) => {
    return (
        <div className={`card ${card2 ? "card2" : null}`}>
            <p className="card-header">{header}</p>
            <div className="card-body">
                <span>{body}</span>
                <a href={link}>{ linkText}</a>
            </div>
        </div>
    )
}

export const SmallCard = ({title, image, text, linkTitle, linkAddress}: any) => {
    return (
        <div className="small-card">
            <div className="small-card__header">
                <p>{ title}</p>
                <img src={image} alt="Earn"></img>
            </div>
            <div className="small-card__body">
                <span>{ text}</span>
                <a href={linkAddress}>{ linkTitle}</a>
            </div>
        </div>
    )
}