import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <ul className="right">
                    <li> <a href="/"> User</a></li>
                    <li> <a href="/search"> Search Character</a></li>
                    <li> <a href="/characters"> All Characters</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar