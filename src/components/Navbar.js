import React from 'react'

const Navbar = () => {
    return (
        <div>
            <h1> You are logged in as Tony !</h1>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link " href="/">User</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/search">Search Characters</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/characters">All Characters</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar