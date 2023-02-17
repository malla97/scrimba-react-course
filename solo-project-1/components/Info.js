import React from "react"

export default function Info() {
    return (
        <div className="div">
            <img className="info--image" src="https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg"/>
            <div className="div--texts">
                <h2 className="info--name">Malla Nyrhinen</h2>
                <p className="info--work">Software developer</p>
            </div>
            <div className="div--buttons">
                <button className="emailBtn"><i className="fa fa-paper-plane" aria-hidden="true"></i>Email</button>
                <button className="linkedInBtn"><i className="fa fa-linkedin" aria-hidden="true"></i>LinkedIn</button>
            </div>
        </div>
    )
}