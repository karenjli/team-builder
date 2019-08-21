import React from "react";

export default function Card (props) {
    console.log(props);
    return (
        <div className="card">
            {props.member.map (card => {
                return (
                    <div className="cardInfo" key={card.id}>
                         <h2>{card.name}</h2>
                         <p>{card.email}</p>
                         <p>{card.role}</p>
                    </div>
            )})}
           
        </div>
    );
}