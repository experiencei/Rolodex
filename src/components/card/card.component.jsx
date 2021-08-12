import React from "react";
import './card.component.style.css';

export const Card = props => {
    return <div className="card-container">
    <img alt="Monster" src={`https://robohash.org/${props.monste.id}?set=set2&size=180x180`}/>
    <h2>{props.monste.name}</h2>
    <p>{props.monste.email}</p>
    </div>
}
