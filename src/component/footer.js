import React from "react";

const Footer = () => {
  return (
    <>
      <section className="info_section  layout_padding2-top">
        <div className="social_container">
          <div className="social_box">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="# ">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="info_container ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <h6>ABOUT US</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <h6>NEED HELP</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <h6>CONTACT US</h6>
                <div className="info_link-box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Ahmedabad, India </span>
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
              <a href="#"> | Cloths Web</a>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
