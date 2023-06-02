import React from "react";
// import { Button } from "../components/Button";
import "./Footer.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Takes the World's Best Quality Medical Treatments</p>
        <p className="footer-subscription-text">With Our Specialists</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button className="sub">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonial</Link>
            <Link to="/sign-up">Contact Us</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonial</Link>
            <Link to="/sign-up">Contact Us</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonial</Link>
            <Link to="/sign-up">Contact Us</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
          {/* <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonial</Link>
            <Link to="/sign-up">Contact Us</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div> */}
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo"></Link>
          </div>
        </div>
        <small className="website-rights">MEDICUE vc 2023</small>
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          ><i></i></Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          ></Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
