import React from "react";
import Navbar from "../components/navbar";
import image from "../assets/images/footer-bg.jpeg";
import Footer from "../components/footer";
import "../assets/css/home.css";

import foodIcon from "../assets/icons/food.png";
import clothingIcon from "../assets/icons/hanger.png";
import homeIcon from "../assets/icons/home.png";
import medicalIcon from "../assets/icons/medical.png";

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
      image: image,
      title: "New Sustainability",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tellus sem, pretium gravida erat mattis id. Integer bibendum ante nec nulla pulvinar, eget posuere orci tincidunt.",
    },
    {
      id: 2,
      image: image,
      title: "Free Volunteering",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tellus sem, pretium gravida erat mattis id. Integer bibendum ante nec nulla pulvinar, eget posuere orci tincidunt.",
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
              </div>
            </div>
          </div>
        </div>
        <div>
          image with small form to donate here. mention some mission/ completed
          goals
        </div>
        <div> images of team, founder,ceo,....</div>Essential contributions
        <div>
          <h2>Choose the perfect help plan for you</h2>
        </div>
        <div>
          {" "}
          image to the left
          <p>Each drop creates the sea</p>
          <div>A concrete help for the causes</div>
        </div>
        <div> missions and such</div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
