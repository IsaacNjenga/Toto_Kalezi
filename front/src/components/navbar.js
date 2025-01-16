import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faFacebookF,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toDonate = () => {
    navigate("/give");
  };

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="additional-info">
          <div className="info-text">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />:
              info@donations.com
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} className="clock-icon" />:
              Mon-Sat: 8:00 a.m - 5:00 p.m
            </p>
          </div>
          <div className="additional-info-icons">
            <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
            <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
            <FontAwesomeIcon icon={faXTwitter} className="twitter-icon" />
            <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
          </div>
        </div>
        <nav>
          <div className="main-nav">
            <div className="top-row">
              {" "}
              <div className="logo">
                <img src={logo} alt="logo" className="logo-image" />
                <p className="logo-text">Toto Kalezi</p>
              </div>{" "}
              <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="nav-links">
              <ul>
                <li>
                  {" "}
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/give" className="nav-link">
                    Give
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/causes" className="nav-link">
                    Causes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="contact-info">
                <p>
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />{" "}
                  <strong>Any questions?</strong>
                  <br />
                  Phone +254-740-900061
                </p>{" "}
                <button onClick={toDonate} className="navbar-donate-btn">
                  DONATE
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
