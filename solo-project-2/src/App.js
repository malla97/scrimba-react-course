import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

export default function App() {
    const sections = data.map(item => {
        return (
            <Main 
                key={item.id}
                country={item.country}
                destination={item.location}
                when={item.when}
                img={item.img}
                info={item.info}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section className="section-list">
                {sections}
            </section>
        </div>
    )
}