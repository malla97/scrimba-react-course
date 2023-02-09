import React from "react"

function InfoTxt() {
    return <p className="infoText">I have interests in software developent, web development (front and back) and also databases. I also like cats.</p>
}

export default function Interests() {
    return (
        <div>
            <h2 className="interestsHeader">Interests</h2>
            <InfoTxt />
        </div>
    )
}