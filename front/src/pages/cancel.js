import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import check from "../assets/icons/caution.png";
import Motion from "../components/motion";
import { useUser } from "../contexts/UserContext";

const primary = "#854a9a";
const primaryGlow = "rgba(133,74,154,0.45)";
const warnColor = "#e67e22";
const warnGlow = "rgba(230,126,34,0.35)";

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
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
  @keyframes warnPulse {
    0%, 100% { box-shadow: 0 0 0 0 ${warnGlow}; }
    50%       { box-shadow: 0 0 0 14px rgba(230,126,34,0); }
  }

  .cancel-retry-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px ${primaryGlow} !important;
  }
  .cancel-home-link:hover {
    color: rgba(255,255,255,0.7) !important;
    border-color: rgba(255,255,255,0.2) !important;
    background: rgba(255,255,255,0.06) !important;
  }
`;

function Cancel() {
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
              top: "18%",
              left: "12%",
              width: 320,
              height: 320,
              background: primaryGlow,
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.18,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "18%",
              right: "10%",
              width: 260,
              height: 260,
              background: warnGlow,
              borderRadius: "50%",
              filter: "blur(90px)",
              opacity: 0.22,
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
              border: `1px solid rgba(133, 74, 154, 0.8)`,
              borderRadius: 24,
              padding: isMobile ? "40px 28px" : "60px 72px",
              maxWidth: 520,
              width: "100%",
              textAlign: "center",
              boxShadow: `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(133,74,154,0.08)`,
            }}
          >
            {/* Inner top warning line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "20%",
                right: "20%",
                height: 3,
                background: `linear-gradient(90deg, transparent, ${warnColor}, transparent)`,
                borderRadius: "0 0 4px 4px",
              }}
            />

            {/* Icon with shake + pulse */}
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
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "rgba(230,126,34,0.1)",
                  border: `1px solid rgba(230,126,34,0.3)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation:
                    "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both, warnPulse 2.5s 0.8s ease-in-out infinite",
                }}
              >
                <img
                  src={check}
                  alt="caution"
                  style={{
                    width: 52,
                    height: 52,
                    objectFit: "contain",
                    animation: "shake 0.5s 0.7s ease both",
                  }}
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
                Transaction Unsuccessful
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
                It seems your transaction did not go through.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.3)",
                  margin: "0 0 32px",
                }}
              >
                No worries — you can always try again. Every donation makes a
                difference.
              </p>

              {/* Warning note */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 10,
                  background: "rgba(230,126,34,0.08)",
                  border: "1px solid rgba(230,126,34,0.2)",
                  marginBottom: 28,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.83rem",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  If you were charged but the donation wasn't recorded, please
                  contact us at{" "}
                  <a
                    href="mailto:totokalezifoundation20@gmail.com"
                    style={{ color: warnColor, textDecoration: "none" }}
                  >
                    totokalezifoundation20@gmail.com
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <Link
                  to="/"
                  className="cancel-home-link"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "10px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.22s ease",
                  }}
                >
                  <HomeOutlined /> Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}

export default Cancel;
