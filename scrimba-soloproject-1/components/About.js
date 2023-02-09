import React from "react"

function AboutTxt() {
    return <p className="abtText">I am a software engineering student at Tampere University. Currently I am doing my masters program after graduating with bachelors in december 2022. I have skills in various technologies. This is project I'm doing for the free course to learn react at Scrimba</p>
}

export default function About() {
    return (
        <div>
            <h2 className="aboutHeader">About</h2>
            <AboutTxt />
        </div>
    )
}