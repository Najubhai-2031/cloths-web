import React from "react";

const Shop = () => {
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Giftos</span>
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
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="why.html">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonial.html">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Login</span>
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
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Ring</h6>
                    <h6>
                      Price
                      <span>$200</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Watch</h6>
                    <h6>
                      Price
                      <span>$300</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Teddy Bear</h6>
                    <h6>
                      Price
                      <span>$110</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Flower Bouquet</h6>
                    <h6>
                      Price
                      <span>$45</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p5.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Teddy Bear</h6>
                    <h6>
                      Price
                      <span>$95</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p6.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Flower Bouquet</h6>
                    <h6>
                      Price
                      <span>$70</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p7.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Watch</h6>
                    <h6>
                      Price
                      <span>$400</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a href="">
                  <div className="img-box">
                    <img src="images/p8.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Ring</h6>
                    <h6>
                      Price
                      <span>$450</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All Products</a>
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
                <h6>ABOUT US</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_form ">
                  <h5>Newsletter</h5>
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>NEED HELP</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>CONTACT US</h6>
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
  );
};

export default Shop;
