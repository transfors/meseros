import React, { useState } from 'react';
import portada from '../imagenes/portada.png';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header>
      <img src={portada} className="portada w-100 vh-100" alt="portada restaurante" />
      <nav className="navbar bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Restaurant First</a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Restaurant First</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mesas
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Mesa 1</a></li>
                <li><a className="dropdown-item" href="#">Mesa 2</a></li>
                <li><a className="dropdown-item" href="#">Mesa 3</a></li>
                <li><a className="dropdown-item" href="#">Mesa 4</a></li>                        
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menú
              </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menú 1</a></li>
              <li><a className="dropdown-item" href="#">Menú 2</a></li>
              <li><a className="dropdown-item" href="#">Menú 3</a></li>
              <li><a className="dropdown-item" href="#">Menú 4</a></li>                        
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        </div>
        </div>
      </nav>
    </header>
   
    <footer className="fixed-botton bg-dark pb-3 text-light text-center pt-3">         
        <p>(c) 2024 Meseros.com - Todos los derechos reservados.</p>             
    </footer>
    </>
  );
};

export default Header;
