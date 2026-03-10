import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {  HomeOutlined } from "@ant-design/icons";
import check from "../assets/icons/check.png";
import Motion from "../components/motion";
import { useUser } from "../contexts/UserContext";

const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.12)";
const primaryMid = "rgba(133,74,154,0.25)";
const primaryGlow = "rgba(133,74,154,0.45)";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes popIn {
    0%   { opacity: 0; transform: scale(0.7); }
    70%  { transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ripple {
    0%   { transform: scale(0.95); opacity: 0.6; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  .success-home-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px ${primaryGlow} !important;
  }
  .success-tx-link:hover {
    color: ${primary} !important;
    border-color: ${primaryMid} !important;
    background: ${primaryDim} !important;
  }
`;

function Success() {
  const { isMobile } = useUser();

  return (
    <>
      <style>{globalStyles}</style>
      <Motion>
        <div
          style={{
            minHeight: "100vh",
            background: `linear-gradient(160deg, #0d0814 0%, #1a0a22 50%, #0d0814 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow orbs */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "15%",
              width: 350,
              height: 350,
              background: primaryGlow,
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              right: "12%",
              width: 250,
              height: 250,
              background: "rgba(100,200,120,0.2)",
              borderRadius: "50%",
              filter: "blur(80px)",
              opacity: 0.25,
              pointerEvents: "none",
            }}
          />

          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, transparent, ${primary}, #a066bc, transparent)`,
            }}
          />

          {/* Card */}
          <div
            style={{
              position: "relative",
              background: "rgba(20,10,28,0.82)",
              backdropFilter: "blur(24px)",
              border: `1px solid rgba(133, 74, 154, 0.83)`,
              borderRadius: 24,
              padding: isMobile ? "40px 28px" : "60px 72px",
              maxWidth: 520,
              width: "100%",
              textAlign: "center",
              boxShadow: `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(133,74,154,0.08)`,
            }}
          >
            {/* Inner top line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "20%",
                right: "20%",
                height: 3,
                background: `linear-gradient(90deg, transparent, #27ae60, transparent)`,
                borderRadius: "0 0 4px 4px",
              }}
            />

            {/* Ripple + icon */}
            <div
              style={{
                position: "relative",
                width: 110,
                height: 110,
                margin: "0 auto 32px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid rgba(39,174,96,0.4)",
                  animation: "ripple 2s ease-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 8,
                  borderRadius: "50%",
                  border: "2px solid rgba(39,174,96,0.2)",
                  animation: "ripple 2s 0.4s ease-out infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "rgba(39,174,96,0.12)",
                  border: "1px solid rgba(39,174,96,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
                }}
              >
                <img
                  src={check}
                  alt="success"
                  style={{ width: 52, height: 52, objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Text */}
            <div style={{ animation: "fadeUp 0.7s 0.3s both" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isMobile ? "1.7rem" : "2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                }}
              >
                Thank You for Your Generosity!
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  margin: "0 0 8px",
                }}
              >
                We have received your donation. Your contribution will directly
                impact the lives of children and vulnerable communities across
                Kenya.
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(133,74,154,0.15)",
                  margin: "0 0 28px",
                }}
              />

              {/* View transaction */}
              <Link
                to="#"
                className="success-tx-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(133,74,154,0.18)",
                  borderRadius: 20,
                  padding: "7px 18px",
                  textDecoration: "none",
                  marginBottom: 20,
                  transition: "all 0.22s ease",
                }}
              >
                View transaction details
              </Link>

              {/* Buttons */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <Button
                  type="primary"
                  size="large"
                  icon={<HomeOutlined />}
                  className="success-home-btn"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                    border: "none",
                    borderRadius: 10,
                    height: 50,
                    boxShadow: `0 4px 18px ${primaryGlow}`,
                    transition: "all 0.25s ease",
                  }}
                >
                  <Link
                    to="/"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Go to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}

export default Success;
