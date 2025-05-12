import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import check from "../assets/icons/caution.png";
import "../assets/css/cancel.css";
import Motion from "../components/motion";

function Cancel() {
  return (
    <>
      <Motion>
        {" "}
        <div className="cancel-container">
          <div className="cancel-page-bg">
            <div className="navbar-element">
              <Navbar />
            </div>{" "}
            <div className="cancel-content">
              <Card
                style={{
                  margin: "auto",
                  width: "50%",
                  backgroundColor: "#d7cbf6d6",
                }}
              >
                <div
                  style={{
                    margin: "20px auto",

                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <img
                    src={check}
                    alt="check"
                    style={{ width: "150px", height: "auto" }}
                  />
                  <h2>Sorry, It seems your transaction did not go through</h2>
                  <h3>
                    No worries, you can always try again. Every donation makes a
                    difference
                  </h3>
                  <Button type="primary">
                    <Link to="/give">Try again</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </Motion>
    </>
  );
}

export default Cancel;
