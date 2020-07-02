import React, { Fragment, useState } from "react";
import { SERVER_URL } from "../../components/utils/config";
import { SINGUP_FAIL, SINGUP_SUCCESS } from "../../actions/types";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // for error
  const alert = useAlert();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setNameError("");
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPasswordError("");
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e) => {
	e.preventDefault();
	console.log('btn clicked')
    if (name === "") {
      setNameError("Please Enter your Name!");
    } else if (email === "") {
      setEmailError("Please Enter your Email!");
    } else if (password === "") {
      setPasswordError("PLease enter your passsword!");
    }  else {
      setLoading(true);

      let data = {
        name: name,
        email: email,
        password: password,
      };
      fetch(`${SERVER_URL}api/user/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   'X-Auth-Token': this.state.User.token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: SINGUP_SUCCESS,
            payload: json,
          });

          setLoading(false);
          alert.success("Signup successfully!");
        })
        .catch((error) => {
          dispatch({
            type: SINGUP_FAIL,
            payload: "Some server Error",
          });
          setLoading(false);
          alert.error("Email and password is Invalid!");
        });
    }
  };
  return (
    <Fragment>
      <div className="inner-wrapper">
        <div className="container-fluid no-padding">
          <div className="row no-gutters overflow-auto">
            <div className="col-md-6">
              <div className="main-banner">
                <img
                  src="assets/img/slider.jpg"
                  className="img-fluid full-width main-img"
                  alt="banner"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-2 user-page main-padding">
                <div className="login-sec">
                  <div className="login-box">
                    <form>
                      <h4 className="text-light-black fw-600">
                        Create your account
                      </h4>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="form-group">
                            <label className="text-light-white fs-14">
                              First name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={(e) => onChangeName(e)}
                              className="form-control form-control-submit"
                              placeholder="First Name"
                              required
                            />
                            <p style={{ color: "red", paddingLeft: "10px" }}>
                              {nameError}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="form-group">
                            <label className="text-light-white fs-14">
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-submit"
                              placeholder="Last Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="text-light-white fs-14">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => onChangeEmail(e)}
                              className="form-control form-control-submit"
                              placeholder="Email I'd"
                              required
                            />
                            <p style={{ color: "red", paddingLeft: "10px" }}>
                              {emailError}
                            </p>
                          </div>
                          <div className="form-group">
                            <label className="text-light-white fs-14">
                              Password (8 character minimum)
                            </label>
                            <input
                              type="password"
                              id="password-field"
                              name="password"
                              value={password}
                              onChange={(e) => onChangePassword(e)}
                              className="form-control form-control-submit"
                              defaultValue="password"
                              placeholder="Password"
                              required
                            />
                            <p style={{ color: "red", paddingLeft: "10px" }}>
                              {passwordError}
                            </p>

                            <div
                              data-name="#password-field"
                              className="fa fa-fw fa-eye field-icon toggle-password"
                            />
                          </div>
                          <div className="form-group checkbox-reset">
                            <label className="custom-checkbox mb-0">
                              <input type="checkbox" />
                              <span className="checkmark" /> Keep me signed in
                            </label>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn-second-2 btn-submit full-width"
                              onClick={(e) => onSubmit(e)}
                            >
                              Create your account
                            </button>
                          </div>
                          <div className="form-group text-center">
                            
                            <span>or</span>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn-second-2 btn-facebook full-width"
                            >
                              <img
                                src="assets/img/facebook-logo.svg"
                                alt="btn logo"
                              />
                              Continue with Facebook
                            </button>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn-second-2 btn-google full-width"
                            >
                              <img
                                src="assets/img/google-logo.png"
                                alt="btn logo"
                              />
                              Continue with Google
                            </button>
                          </div>
                          <div className="form-group text-center">
                            <p className="text-light-black mb-0">
                              Have an account? <a href="login">Sign in</a>
                            </p>
                          </div>
                          <span className="text-light-black fs-12 terms">
                            By creating your Ecom account, you agree to the
                            <a href="#"> Terms of Use </a> and
                            <a href="#"> Privacy Policy.</a>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
