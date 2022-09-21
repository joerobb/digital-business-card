import React from "react"

export default function HeaderContent() {
    return (
        <header>
            <h1 className="header__title">Joseph Robb</h1>
            <h3 className="header__job">Front End Developer</h3>
            <h4 className="header__website">https://github.com/joerobb</h4>
            <div className="header__links">
                <btn className="header__emailBtn">Email</btn>
                <btn className="header__linkedinBtn">LinkedIn</btn>
            </div>
        </header>
    )
}