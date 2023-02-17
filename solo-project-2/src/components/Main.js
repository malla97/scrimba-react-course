import React from "react"

export default function Main(props) {
    return ( 
        <div>
            <div className="main">
                <img src={props.img} className="section--img"/>
                <div className="section">
                    <p className="section--country">{props.country}</p>
                    <p className="section--destination">{props.destination}</p>
                    <p className="section--time">{props.when}</p>
                    <p className="section--info">{props.info}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}