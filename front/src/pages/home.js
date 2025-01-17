import React from "react";
import Navbar from "../components/navbar";
//import logo from "../assets/images/toto_kalezi_logo.png";
import Footer from "../components/footer";
import "../assets/css/home.css";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="home-content">
            <div className="home-header">
              <h1>To Destiny With Hope</h1>
            </div>
          </div>
        </div>
        <div>image will be here</div>
        <div>icons and cards</div>
        <p>A helping hand to those who need it</p>
        <div>
          <h1>Each donation is an essential help for everyone's life</h1>
          <div>a card here</div>
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
