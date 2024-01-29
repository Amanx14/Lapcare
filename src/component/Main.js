import React from 'react'
import hero from '../images/13.jpg'
import Products from './Products'

function Main() {
    return (
        <main>
            <div className="hero">
                <img src={hero} alt="" />
            </div>
            <div className="my-prod">
                <Products />
            </div>
        </main>
    )
}

export default Main
