import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
import "../styles/login.css"
const RegisterPage = (props) => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const registerUser = (props) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("https://lotus-team.onrender.com/user/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        makeToast("success", response.data.message);
        props.history.push("/login");
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };

  return (
    <div>
    <section
      class="h-100 gradient-form"
      style={{ "background-color": "#eee" }}
    >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">We are more than just a company</h4>
                    <p class="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 class="mt-1 mb-3 pb-1">We are The Lotus Team</h4>
                    </div>

                    
                      <h5 class="mt-1 mb-3 pb-1 ml-5">Register with Lotus Team</h5>
                      <div className="form-outline mb-4">
          <label htmlFor="name" class="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            ref={nameRef}
            class="form-control"
          />
        </div>
        <div className="form-outline mb-4">
        <label htmlFor="email" class="form-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@example.com"
          ref={emailRef}
          class="form-control"
        />
      </div>
      <div className="form-outline mb-4">
        <label htmlFor="password" class="form-label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          ref={passwordRef}
          class="form-control"
        />
      </div>
                      

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-primary btn-block  gradient-custom-2 mb-3"
                          onClick={registerUser}
                        >
                        Create Account
                        </button>
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Already have an Account</p><a href="/signin">
                        <button
                          type="button"
                          class="btn btn-outline-primary  ml-2">  Login
                         
                        </button></a>
                      </div>
                    
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>);
};

export default RegisterPage;
