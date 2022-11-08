import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="container m-5 bg-color1">
      <div className="row align-items-center ">
        <div className="col-xl align-self-center d-flex flex-column justify-content-center p-5">
          <Image src={logo} className="img-fluid" />
        </div>
        <div className="col-lg">
          <form className="bg-color3 rounded-5 d-flex flex-column justify-content-center align-items-center p-3 m-2">
            <label className="color1">Already have an account?</label>
            <button
              type="submit"
              className="btn btn-danger rounded-pill m-3 p-3 text-uppercase w-25"
            >
              Login
            </button>
          </form>
          <form className="bg-color3 rounded-5 d-flex flex-column justify-content-center align-items-center p-5">
            <div className="form-group m-3 w-100">
              <input
                type="tel"
                className="form-control rounded-pill p-3 text-center"
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group m-3 w-100">
              <input
                type="text"
                className="form-control rounded-pill p-3 text-center"
                placeholder="Username"
              />
            </div>
            <div className="form-group m-3 w-100 d-flex">
              <input
                type="password"
                className="form-control rounded-pill p-3 text-center"
                placeholder="Password"
              />
              <input
                type="password"
                className="form-control rounded-pill p-3 text-center"
                placeholder="Confirm Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger rounded-pill m-3 p-3 text-uppercase w-25"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
