import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/auth/actions";
import { useNavigate } from "react-router";
import AgencyImage from "../assets/images/agency-img.jpg";

const initialState = {
  uniqueId: "",
  password: "",
};

const Login = () => {
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
    dispatch(loginUser({ data: state }));
  };
  return (
    <>
      <section className="contact_section layout_padding">
        <div className="container px-0">
          <div className="heading_container ">
            <h2 className="">Login</h2>
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
                  <span>Username or Email *</span>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    name="uniqueId"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <span>Password *</span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="d-flex ">
                  <button>Login</button>
                  <button>Cancel</button>
                </div>
                <p style={{ margin: "20px" }}>
                  Don't have an account?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/auth/register")}
                  >
                    Register Here
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

export default Login;
