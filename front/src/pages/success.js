import React from "react";
import Navbar from "../components/navbar";
import { Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import check from "../assets/icons/check.png";
import "../assets/css/success.css";
import Footer from "../components/footer";
function Success() {
  return (
    <>
      <div className="success-container">
        <div className="success-page-bg">
          <div className="navbar-element">
            <Navbar />
          </div>{" "}
          <div className="success-content">
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
                  width: "50%",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <img
                  src={check}
                  alt="check"
                  style={{ width: "150px", height: "auto" }}
                />
                <h2>Thank you! We have received your generous donation</h2>
                <h3>
                  To view your transaction information, click <Link>here</Link>
                </h3>
                <Button type="primary">
                  <Link to="/">Go to Home</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
