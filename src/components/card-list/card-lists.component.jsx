import React from "react";
import "./card-lists.style.css";
 import { Card } from "../card/card.component";
export const Cardlist = props => {
      return <div className="card-list">
    {props.monster.map(monste => (
       <Card key={monste.id} monste={monste} />
     ))}
    </div>
   };