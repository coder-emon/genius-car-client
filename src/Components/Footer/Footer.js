import React from "react";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      <footer className="footer py-20 flex justify-between text-white text-xl w-4/5 mx-auto">
        <div>
          <img src={logo} alt="" className="h-16" />
          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br /> trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Design
          </a>
          <a href="/" className="link link-hover">
            Marketing
          </a>
          <a href="/" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <a href="/" className="link link-hover">
            Jobs
          </a>
          <a href="/" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="//" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
