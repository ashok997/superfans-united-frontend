import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link " href="/">
            My Characters
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">
            Search Characters
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/characters">
            All Characters
          </a>
        </li>
      </ul>
      <center class="text-primary"> You are logged in as Tony</center>
    </div>
  );
};

export default Navbar;
