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

import ceoImage from "../assets/images/ceo.jpg";
import managerImage from "../assets/images/manager.jpg";
import staffImage from "../assets/images/staff.jpg";
import staffImage2 from "../assets/images/staff2.jpg";
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

function Home() {
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
    { id: 1, image: ceoImage, title: "Founder & CEO", name: "Jane Doe" },
    { id: 2, image: managerImage, title: "Manager", name: "John Doe" },
    { id: 3, image: staffImage, title: "Chief of Staff", name: "Jane Doe" },
    { id: 4, image: staffImage2, title: "Staff", name: "Jane Doe" },
  ];

  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="home-content">
            <div className="home-header"></div>
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
                <button className="call-to-action-btn">Sign Up</button>
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
              <button className="preset-button" title="$10.00 ">
                $10.00
              </button>
              <button className="preset-button" title="$20.00 ">
                $20.00
              </button>
              <button className="preset-button" title="$50.00">
                $50.00
              </button>
              <button className="preset-button" title="$100.00">
                $100.00
              </button>
              <button className="preset-button" title="$150.00">
                $150.00
              </button>
              {/* <button className="preset-button custom-button">Custom</button> */}
            </div>
            {/* <button className="donate-now-button">DONATE</button> */}
          </div>
        </div>
        <p className="hero-subtitle">Our amazing team here to walk with you</p>
        <div className="team-container">
          {" "}
          {team.map((t) => (
            <div key={t.id} className="team-card">
              <img src={t.image} alt={t.title} className="team-card-image" />
              <h2>{t.title}</h2>
              <h3>{t.name}</h3>
            </div>
          ))}
        </div>
        <p className="hero-subtitle">Essential contributions</p>
        <div className="image-carousel-container">
          <div className="image-carousel-div">
            <img src={image} alt="img" className="image-carousel" />
            <img src={sustainability} alt="img" className="image-carousel" />
            <img src={free_volunteering} alt="img" className="image-carousel" />
            <img src={supportUs} alt="img" className="image-carousel" />
            <img src={image} alt="img" className="image-carousel" />
            <img src={sustainability} alt="img" className="image-carousel" />
            <img src={free_volunteering} alt="img" className="image-carousel" />
            <img src={supportUs} alt="img" className="image-carousel" />{" "}
            <img src={image} alt="img" className="image-carousel" />
            <img src={sustainability} alt="img" className="image-carousel" />
            <img src={free_volunteering} alt="img" className="image-carousel" />
            <img src={supportUs} alt="img" className="image-carousel" />
            <img src={image} alt="img" className="image-carousel" />
            <img src={sustainability} alt="img" className="image-carousel" />
            <img src={free_volunteering} alt="img" className="image-carousel" />
            <img src={supportUs} alt="img" className="image-carousel" />
          </div>
        </div>
        <div className="hero-container">
          <p className="hero-subtitle">Each drop creates the sea</p>
          <div className="final-content-container">
            <img
              src={supportUs}
              alt="Background"
              className="background-content-image"
            />
            <div className="content">
              <div className="left-content">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque lacinia, nibh non feugiat venenatis, risus elit
                  volutpat nisi, vel fermentum odio turpis vel purus.
                  Suspendisse potenti.
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
                    Join us in making a difference. Every contribution helps us
                    tackle urgent crises and bring relief to those in need.
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
