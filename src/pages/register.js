import React from "react";

const Register = () => {
  return (
    <>
      <section className="contact_section layout_padding">
        <div className="container px-0">
          <div className="heading_container ">
            <h2 className="">Register</h2>
          </div>
        </div>
        <div className="container container-bg">
          <div className="row">
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map-responsive">
                  <img
                    src="images/agency-img.jpg"
                    width="600"
                    height="300"
                    style={{ border: 0, width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 px-0">
              <form action="#">
                <div>
                  <input type="text" placeholder="Name *" />
                </div>
                <div>
                  <input type="email" placeholder="Email *" />
                </div>
                <div>
                  <input type="text" placeholder="Phone *" />
                </div>
                <div>
                  <input type="text" placeholder="Password *" />
                </div>
                <div>
                  <input type="text" placeholder="Confirm Password *" />
                </div>
                <div className="d-flex ">
                  <button>Register</button>
                  <button>Cancel</button>
                </div>
                <p style={{margin:'10px'}}>Already have an account? <a href="#"><span style={{textDecoration:'underline', color:'blue', cursor:'pointer'}}>Login Here</span></a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;