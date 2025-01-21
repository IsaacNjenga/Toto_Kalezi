import React from "react";
import Navbar from "../components/navbar";
import image from "../assets/images/footer-bg.jpeg";
import Footer from "../components/footer";
import "../assets/css/home.css";

import foodIcon from "../assets/icons/food.png";
import clothingIcon from "../assets/icons/hanger.png";
import homeIcon from "../assets/icons/home.png";
import medicalIcon from "../assets/icons/medical.png";
import donation from "../assets/icons/donation.png";

import supportUs from "../assets/images/support_us.jpeg";
import sustainability from "../assets/images/sustainability.jpeg";
import free_volunteering from "../assets/images/free_volunteering.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Miriam from "../assets/images/Miriam_Wairimu_K.jpeg";
import Brenda from "../assets/images/Brenda_Ngare.jpeg";
import Florence from "../assets/images/Florence_Ballenger.jpeg";
import Sharon from "../assets/images/Sharon_Wilhelm.jpeg";
import Susan from "../assets/images/Susan_Chege.jpeg";
import Washington from "../assets/images/Susan_Washington.png";

function Home() {
  const navigate = useNavigate();

  const infoCard = [
    {
      id: 1,
      title: "Nourishing Meals",
      text: "Help provide healthy food options for those in need. Your donations can ensure that families have access to nutritious meals, promoting better health and well-being.",
      icon: foodIcon,
    },
    {
      id: 2,
      title: "Vital Medications",
      text: "Contribute to the health of individuals who cannot afford essential medications. Your support can make a difference in their lives by ensuring they receive the treatments they need.",
      icon: medicalIcon,
    },
    {
      id: 3,
      title: "Warm Clothing",
      text: "Donate to provide warm and appropriate clothing for those facing harsh conditions. Your generosity can help individuals stay safe and comfortable during difficult times.",
      icon: clothingIcon,
    },
    {
      id: 4,
      title: "Safe Housing",
      text: "Support initiatives that provide safe and stable housing for families in need. Your contributions can help create a secure environment where individuals can thrive.",
      icon: homeIcon,
    },
  ];

  const callToAction = [
    {
      id: 1,
      image: sustainability,
      title: "New Sustainability",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tellus sem, pretium gravida erat mattis id. Integer bibendum ante nec nulla pulvinar, eget posuere orci tincidunt.",
    },
    {
      id: 2,
      image: free_volunteering,
      title: "Free Volunteering",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tellus sem, pretium gravida erat mattis id. Integer bibendum ante nec nulla pulvinar, eget posuere orci tincidunt.",
    },
  ];

  const team = [
    {
      id: 1,
      image: Miriam,
      title: "Director",
      name: "Miriam Wairimu K",
      location: "Kenya",
    },
    {
      id: 2,
      image: Brenda,
      title: "Manager",
      name: "Brenda Ngare",
      location: "USA",
    },
    {
      id: 3,
      image: Florence,
      title: "Manager",
      name: "Florence Ballenger",
      location: "USA",
    },
    {
      id: 4,
      image: Washington,
      title: "Supporting Staff",
      name: "Susan Washington",
      location: "Germany",
    },
    {
      id: 5,
      image: Susan,
      title: "Supporting Staff",
      name: "Susan Chege",
      location: "USA",
    },
    {
      id: 6,
      image: Sharon,
      title: "Supporting Staff",
      name: "Sharon Wilhelm",
      location: "USA",
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="home-content">
            <div className="home-header">
              <h1 className="header-title">Toto Kalezi Foundation</h1>
              <h2 className="header-subtitle">~ To Destiny With Hope ~</h2>
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
                src={image}
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
            {[image, sustainability, free_volunteering, supportUs].map(
              (imgSrc, index) => (
                <img
                  key={`carousel-img-${index}`}
                  src={imgSrc}
                  alt={`carousel-img-${index}`}
                  className="image-carousel"
                />
              )
            )}
            {[image, sustainability, free_volunteering, supportUs].map(
              (imgSrc, index) => (
                <img
                  key={`carousel-duplicate-${index}`}
                  src={imgSrc}
                  alt={`carousel-duplicate-${index}`}
                  className="image-carousel"
                />
              )
            )}
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
