import React, { useState } from "react";
import { register } from "../store/auth/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AgencyImage from "../assets/images/agency-img.jpg";

const initialState = {
  name: "",
  email: "",
  phone: "",
  pass: "",
  dob: "",
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ data: state }));
    console.log("state", state);
  };
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
                    src={AgencyImage}
                    width="600"
                    height="300"
                    style={{ border: 0, width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 px-0">
              <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                <span>Name *</span>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                <span>Email *</span>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                <span>Phone Number *</span>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                <span>Password *</span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="pass"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div style={{display:"flex"}}>
                  <div>
                    <span style={{marginRight:'10px'}}>Gender *</span>
                  </div>
                  <div>
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={(e) => handleChange(e)}
                      style={{height:'20px'}}
                    />
                  </div>
                  <div>
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={(e) => handleChange(e)}
                      style={{height:'20px'}}
                    />
                  </div>
                </div>
                <div>
                <span>Date Of Birth *</span>
                  <input
                    type="date"
                    name="dob"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="d-flex ">
                  <button>Register</button>
                  <button>Cancel</button>
                </div>
                <p style={{ margin: "20px" }}>
                  Already have an account?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/auth/login")}
                  >
                    Login Here
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
