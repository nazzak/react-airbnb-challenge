import React from 'react'
import "./Card.css"

function Card(props) { //props: src, title, price, description
    return (
        <div className="card">
            <img src={props.src} alt=""/>
            {/* Create info */}
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h3>{props.price}</h3>
        </div>
    )
}

export default Card
