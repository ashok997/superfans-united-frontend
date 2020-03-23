import React from 'react'

const Navbar = () => {
    return (
        <nav class='container-fluid' >
            <div class="row" >
                <a class='col-md' href="/"> User</a>
                <a class='col-md' href="/search"> Search Character</a>
                <a class='col-md' href="/characters"> All Characters</a>
            </div>
        </nav>
    )
}

export default Navbar