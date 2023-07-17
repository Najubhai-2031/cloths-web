import React from 'react'

const Testimonial = () => {
  return (
    <>
    <div className="hero_area">
    <header className="header_section">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>
            Giftos
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""></span>
        </button>

        <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item ">
              <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop.html">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="why.html">
                Why Us
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="testimonial.html">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
          <div className="user_option">
            <a href="">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>
                Login
              </span>
            </a>
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
  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
    </div>
    <div className="container px-0">
      <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Morijorch
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Rochak
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Brad Johns
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="info_section  layout_padding2-top">
    <div className="social_container">
      <div className="social_box">
        <a href="">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div className="info_container ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h6>
              ABOUT US
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_form ">
              <h5>
                Newsletter
              </h5>
              <form action="#">
                <input type="email" placeholder="Enter your email"/>
                <button>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              NEED HELP
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              CONTACT US
            </h6>
            <div className="info_link-box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span> Gb road 123 london Uk </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>+01 12345678901</span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span> demo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className=" footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </footer>
  </section>
    </>
  )
}

export default Testimonial