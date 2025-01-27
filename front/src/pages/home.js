import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/home.css";
import { infoCard, team, callToAction } from "../assets/data/data";
import donation from "../assets/icons/donation.png";

import supportUs from "../assets/images/gallery_images/42.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import volunteerImage from "../assets/images/gallery_images/38.jpeg";

import carouselImage1 from "../assets/images/gallery_images/29.jpeg";
import carouselImage2 from "../assets/images/gallery_images/34.jpeg";
import carouselImage4 from "../assets/images/gallery_images/3.jpeg";
import carouselImage3 from "../assets/images/gallery_images/32.jpeg";
import carouselImage5 from "../assets/images/gallery_images/22.jpeg";
import carouselImage6 from "../assets/images/gallery_images/5.jpeg";
import carouselImage7 from "../assets/images/gallery_images/36.jpeg";
import carouselImage8 from "../assets/images/gallery_images/12.jpeg";
import carouselImage9 from "../assets/images/gallery_images/8.jpeg";
import carouselImage10 from "../assets/images/gallery_images/28.jpeg";
import carouselImage11 from "../assets/images/gallery_images/30.jpeg";
import carouselImage12 from "../assets/images/gallery_images/13.jpeg";
import carouselImage13 from "../assets/images/gallery_images/25.jpeg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="home-content">
            <div className="home-header">
              <h1 className="header-title">Toto Kalezi</h1>
              <h2 className="header-subtitle">
                ~ To Destiny With Hope Foundation ~
              </h2>
            </div>
          </div>
        </div>
        <p className="hero-subtitle">
          Your contribution goes towards the following
        </p>
        <div className="info-container">
          {infoCard.map((i) => (
            <div key={i.id} className="info-card">
              <img src={i.icon} alt={i.title} className="info-card-icon" />
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
        <p className="hero-subtitle">A helping hand to those who need it</p>
        <div className="call-to-action">
          <h1>Each donation is an essential help for everyone's life</h1>
          <div className="call-to-action-container">
            <div className="dfsh">
              {" "}
              {callToAction.map((c) => (
                <div key={c.id} className="call-to-action-card">
                  <img
                    src={c.image}
                    alt="img"
                    className="call-to-action-image"
                  />

                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <button>DONATE NOW</button>
                </div>
              ))}
            </div>{" "}
            <div className="call-to-action-donation">
              <img
                src={volunteerImage}
                alt="ajh"
                className="call-to-action-donation-image"
              />
              <div className="call-to-action-text">
                Become a <span className="volunteer-highlight">VOLUNTEER</span>{" "}
                today!
                <br />
                <button
                  className="call-to-action-btn"
                  onClick={() => navigate("/contact")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="donation-container">
          <img src={supportUs} alt="form-image" className="form-image" />
          <div className="donation-form">
            <h2 className="form-title">Support Us</h2>
            <p className="form-description">
              Every contribution is a step forward in changing the lives of
              those in need and inspiring future generations.
            </p>
            {/* <input
              type="text"
              className="donation-input"
            /> */}
            <div className="donation-buttons">
              <button
                className="preset-button"
                title="$10.00 "
                onClick={() => {
                  navigate("/give", { state: { amount: 10 } });
                }}
              >
                $10.00
              </button>
              <button
                className="preset-button"
                title="$20.00"
                onClick={() => {
                  navigate("/give", { state: { amount: 20 } });
                }}
              >
                $20.00
              </button>
              <button
                className="preset-button"
                title="$50.00"
                onClick={() => {
                  navigate("/give", { state: { amount: 50 } });
                }}
              >
                $50.00
              </button>
              <button
                className="preset-button"
                title="$100.00"
                onClick={() => {
                  navigate("/give", { state: { amount: 100 } });
                }}
              >
                $100.00
              </button>
              <button
                className="preset-button"
                title="$150.00"
                onClick={() => {
                  navigate("/give", { state: { amount: 150 } });
                }}
              >
                $150.00
              </button>
              {/* <button className="preset-button custom-button">Custom</button> */}
            </div>
            {/* <button className="donate-now-button">DONATE</button> */}
          </div>
        </div>
        <p className="hero-subtitle">Our amazing team here to walk with you</p>
        <div className="team-container">
          {team.map((t) => (
            <div key={t.id} className="team-card">
              <img src={t.image} alt={t.title} className="team-card-image" />
              <h2>{t.name}</h2>
              <h3>{t.title}</h3>
              <h4>{t.location}</h4>
            </div>
          ))}
        </div>
        <p className="hero-subtitle">Essential contributions</p>
        <div className="image-carousel-container">
          <div className="image-carousel-div">
            {[
              carouselImage1,
              carouselImage2,
              carouselImage3,
              carouselImage4,
              carouselImage5,
              carouselImage6,
              carouselImage7,
              carouselImage8,
              carouselImage9,
              carouselImage10,
              carouselImage11,
              carouselImage12,
              carouselImage13,
            ].map((imgSrc, index) => (
              <img
                key={`carousel-img-${index}`}
                src={imgSrc}
                alt={`carousel-img-${index}`}
                className="image-carousel"
              />
            ))}
            {[
              carouselImage1,
              carouselImage2,
              carouselImage3,
              carouselImage4,
              carouselImage5,
              carouselImage6,
              carouselImage7,
              carouselImage8,
              carouselImage9,
              carouselImage10,
              carouselImage11,
              carouselImage12,
              carouselImage13,
            ].map((imgSrc, index) => (
              <img
                key={`carousel-img-${index}`}
                src={imgSrc}
                alt={`carousel-img-${index}`}
                className="image-carousel"
              />
            ))}
          </div>
        </div>

        <div className="hero-container">
          <p className="hero-subtitle">
            Every small act creates a ripple of change
          </p>
          <div className="final-content-container">
            <img
              src={supportUs}
              alt="Background"
              className="background-content-image"
            />
            <div className="content">
              <div className="left-content">
                <h2>Be The Difference!</h2>
                <p>
                  Together, we can transform lives. Your support enables us to
                  provide education, healthcare, and emergency aid to those in
                  need. Let’s make every moment count.
                </p>
                <div className="icon-container">
                  <FontAwesomeIcon icon={faCcVisa} className="content-icon" />
                  <FontAwesomeIcon icon={faCcAmex} className="content-icon" />
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="content-icon"
                  />
                </div>
              </div>
              <div className="right-content">
                <div>
                  {" "}
                  <img
                    src={donation}
                    alt="National Crisis"
                    className="right-content-image"
                  />
                </div>
                <div>
                  {" "}
                  <h4>National Crisis</h4>
                  <p>
                    Join our mission to provide food, shelter, and hope during
                    times of crisis. Every donation fuels our ability to respond
                    swiftly and effectively.
                  </p>
                  <Link to="/give" className="donate-link">
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
