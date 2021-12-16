import React from "react";

function Nav() {
  return (
    <header className="header">
      <nav className="navbar nav-pills">
        <div className="container-fluid">
          <a className="navbar-brand nav-link active" href="/">G Mateo's Portfolio</a>
          <ul className="nav justify-content-end nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href='#about'>About me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
