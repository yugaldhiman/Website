import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <h1 id='logoName'>Rajan & co.</h1>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About-Us</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </header>

            <Outlet />

        </>
    )
}

export default Header




