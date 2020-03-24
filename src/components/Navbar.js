import React from 'react'

const Navbar = () => {
    return (
        // <nav class='container' bg-primary >
        //     <div class="row" >
        //         <a class='col-md' href="/"> User</a>
        //         <a class='col-md' href="/search"> Search Character</a>
        //         <a class='col-md' href="/characters"> All Characters</a>
        //     </div>
        // </nav>
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
    )
}

export default Navbar