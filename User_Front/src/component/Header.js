import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="hero_area">
        <header className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Cloths Web</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""></span>
            </button>

            <div
              className="collapse navbar-collapse innerpage_navbar"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li className="nav-item ">
                  <span className="nav-link" onClick={() => navigate("/")}>
                    Home <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/shop")}>
                    Shop
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/why-we")}>
                    Why Us
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/contact-us")}>
                    Contact Us
                  </span>
                </li>
              </ul>
              <div className="user_option">
                <span onClick={() => navigate("/auth/login")}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Login</span>
                </span>
                <a href="">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </a>
                <form className="form-inline ">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Header