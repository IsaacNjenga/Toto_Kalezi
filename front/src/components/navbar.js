import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faFacebookF,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/navbar.css";
import logo from "../assets/images/toto_kalezi_logo.png";

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
    console.log("clicked");
    setMenuOpen(!menuOpen);
  };

  const toDonate = () => {
    navigate("/give");
  };

  const toFacebook = () => {
    window.open("https://web.facebook.com/totokalezifoundation/?_rdc=1&_rdr#");
  };

  const toYoutube = () => {
    window.open("https://www.youtube.com/@elder-evmiriamwairimu-aris6453");
  };

  const toTwitter = () => {
    window.open("https://x.com/totokalezi?s=11");
  };

  // const toInsta = () => {};

  const toHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="additional-info">
          <div className="info-text">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />{" "}
              <a
                href="mailto:
                totokalezifoundation20@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                totokalezifoundation20@gmail.com
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />{" "}
              <strong>Any questions?</strong> Reach out +254-768-969772
            </p>{" "}
          </div>
          <div className="additional-info-icons">
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              className="twitter-icon"
              onClick={toTwitter}
            />{" "}
            <FontAwesomeIcon
              icon={faYoutube}
              className="youtube-icon"
              onClick={toYoutube}
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="facebook-icon"
              onClick={toFacebook}
            />
            {/* <FontAwesomeIcon
              icon={faInstagram}
              className="insta-icon"
              onClick={toInsta}
            /> */}
          </div>
        </div>
        <nav>
          <div className="main-nav">
            <div className="top-row">
              {" "}
              <div className="logo">
                <img
                  src={logo}
                  alt="logo"
                  className="logo-image"
                  onClick={toHome}
                />
              </div>{" "}
              <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>{" "}
            <div className={`links ${menuOpen ? "active" : ""}`}>
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
                  {/* <li>
                    {" "}
                    <Link to="/causes" className="nav-link">
                      Causes
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div>
              <div className="contact-info">
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
