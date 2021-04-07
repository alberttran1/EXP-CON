import React, { useState } from 'react'

export const Hamburger = () => {
    const [current, setCurrent] = useState(0)

    const toggleBurger = () => {
        setCurrent((current + 1) % 2)
        console.log(current)
    };


    return (
        <div className={current === 0 ? 'hamburger' : 'hamburger on'}>
            <div className='hamburger-icon' onClick={toggleBurger}>
                <div className="hamburger-icon-bar"/>
                <div className="hamburger-icon-bar"/>
                <div className="hamburger-icon-bar"/>
            </div>
            <div className="hamburger-icon-text">EXP|CON</div>
            <div className={current === 0 ? 'hamburger-bg' : 'hamburger-bg on'}/>
            <div className={current === 0 ? 'hamburger-circ' : 'hamburger-circ on'}/>
            <div className={current === 0 ? 'hamburger-text-holder' : 'hamburger-text-holder on'}>
                <div className='hamburger-text'>WHAT IS IT</div>
                <div className='hamburger-text'>PERKS</div>
                <div className='hamburger-text'>PRICING</div>
            </div>
        </div>
    )
}