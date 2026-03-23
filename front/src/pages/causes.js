import React, { useEffect } from "react";
import { FloatButton, Row, Col } from "antd";
import {
  HeartOutlined,
  BookOutlined,
  MedicineBoxOutlined,
  HomeOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
  GiftOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Motion from "../components/motion";
import { useUser } from "../contexts/UserContext";

import img12 from "../assets/images/gallery_images/12.jpeg";
import img15 from "../assets/images/gallery_images/15.jpeg";
import img19 from "../assets/images/gallery_images/19.jpeg";
import img38 from "../assets/images/gallery_images/38.jpeg";
import img42 from "../assets/images/gallery_images/42.jpeg";
import img55 from "../assets/images/gallery_images/55.jpeg";
import useFetchWebsite from "../hooks/fetchWebsite";

// ── Tokens ──────────────────────────────────────────────────────
const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.1)";
const primaryMid = "rgba(133,74,154,0.22)";
const primaryGlow = "rgba(133,74,154,0.4)";
const dark = "#0a080e";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes heroFadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; } to { opacity:1; }
  }
  @keyframes scrollContinuous {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(-220px * 3)); }
  }

  .cause-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 16px 40px ${primaryGlow} !important;
    border-color: ${primaryMid} !important;
  }
  .cause-card:hover .cause-card-icon {
    background: ${primary} !important;
    color: #fff !important;
    border-color: ${primary} !important;
  }
  .stat-pill:hover {
    background: ${primaryDim} !important;
    border-color: ${primaryMid} !important;
    transform: translateY(-2px) !important;
  }
  .help-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 32px ${primaryGlow} !important;
    border-color: ${primaryMid} !important;
  }
  .strip-img:hover {
    transform: scale(1.06) !important;
    outline: 3px solid ${primary} !important;
  }
  .cta-donate:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px ${primaryGlow} !important;
  }
`;

// ── Reusable bits ────────────────────────────────────────────────
function SectionTag({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "'Outfit', sans-serif",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: primary,
        background: primaryDim,
        border: `1px solid ${primaryMid}`,
        borderRadius: 20,
        padding: "4px 14px",
        marginBottom: 14,
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children, light = false }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2rem",
        fontWeight: 700,
        color: light ? "#fff" : "#1a1a1a",
        margin: "0 0 6px",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </h2>
  );
}

function Divider({ centered = false }) {
  return (
    <div
      style={{
        width: 44,
        height: 3,
        background: `linear-gradient(90deg, ${primary}, #a066bc)`,
        borderRadius: 2,
        margin: centered ? "0 auto 20px" : "0 0 20px",
      }}
    />
  );
}

// ── Data ─────────────────────────────────────────────────────────
const causes = [
  {
    icon: <GiftOutlined />,
    title: "Nourishment",
    desc: "Providing nutritious meals to the hungry and impoverished, ensuring no child goes to bed on an empty stomach.",
    stat: "10,000+ meals",
  },
  {
    icon: <BookOutlined />,
    title: "Education",
    desc: "Empowering individuals with knowledge and vocational skills to permanently break the cycle of poverty.",
    stat: "1,000+ trained",
  },
  {
    icon: <MedicineBoxOutlined />,
    title: "Healthcare",
    desc: "Delivering access to quality medical care, mental health support, and health promotion programs.",
    stat: "300+ served",
  },
  {
    icon: <HomeOutlined />,
    title: "Shelter",
    desc: "Offering safe, secure, and dignified living environments for street children, the elderly, and the disabled.",
    stat: "500+ sheltered",
  },
  {
    icon: <TeamOutlined />,
    title: "Community",
    desc: "Strengthening local networks and supporting over 100 small businesses to stimulate sustainable growth.",
    stat: "200+ families",
  },
  {
    icon: <StarOutlined />,
    title: "Empowerment",
    desc: "Equipping vulnerable individuals with confidence, resources, and mentorship to take control of their lives.",
    stat: "100+ businesses",
  },
];

const helpWays = [
  {
    icon: <HeartOutlined />,
    title: "Donate",
    desc: "Every shilling you contribute directly funds meals, school supplies, medical care, and shelter for those in need.",
    cta: "Give Now",
    to: "/donate",
  },
  {
    icon: <TeamOutlined />,
    title: "Volunteer",
    desc: "Join our growing team of dedicated volunteers on the ground. Your time and skills are invaluable to our mission.",
    cta: "Sign Up",
    to: "/contact",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Spread the Word",
    desc: "Share our story with your network. Awareness is the first step towards meaningful change for our communities.",
    cta: "Learn More",
    to: "/about",
  },
];

const impactStats = [
  { value: "10,000+", label: "Meals distributed" },
  { value: "1,000+", label: "Lives educated" },
  { value: "500+", label: "Children sheltered" },
  { value: "100+", label: "Businesses supported" },
];

const stripImages = [img12, img38, img42, img15, img19, img55];

// ── Component ────────────────────────────────────────────────────
function Causes() {
  const { isMobile, isImageReady, setIsImageReady } = useUser();
  const { website, loading } = useFetchWebsite();

  const causesHero = website.find((w) => w.pageName === "Our Cause");

  // Use an effect to track when the specific hero URL is actually loaded
  useEffect(() => {
    if (causesHero?.heroImg) {
      const img = new Image();
      img.src = causesHero.heroImg;
      img.onload = () => setIsImageReady(true);
    }
    // eslint-disable-next-line
  }, [causesHero?.heroImg]);

  return (
    <>
      <style>{globalStyles}</style>
      <Motion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>

        <div style={{ background: "#f5f3f7", minHeight: "100vh" }}>
          {/* ── HERO ──────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              backgroundImage:
                loading || !causesHero
                  ? `url(${img55})`
                  : `url(${causesHero?.heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: 200,
              paddingBottom: 160,
              overflow: "hidden",
              opacity: isImageReady && !loading ? 1 : 0,
              transition: "all 0.6s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(160deg, rgba(10, 5, 15, 0.56) 0%, rgba(50, 15, 65, 0.48) 50%, rgba(10, 5, 15, 0.49) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 110,
                background: "linear-gradient(to bottom, transparent, #f5f3f7)",
              }}
            />
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

            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                animation: "heroFadeUp 0.9s ease both",
                padding: "0 24px",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isMobile ? "2.4rem" : "3.4rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 18px",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                  textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                }}
              >
                Why We Do What We Do
              </h1>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "0.95rem" : "1.08rem",
                  color: "rgba(255,255,255,0.62)",
                  maxWidth: 620,
                  margin: "0 auto 36px",
                  lineHeight: 1.85,
                }}
              >
                At Toto Kalezi Foundation, our mission is rooted in the belief
                that everyone deserves a chance to thrive — through relentless
                effort and unwavering hope.
              </p>

              {/* Impact stat pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 12,
                  animation: "heroFadeUp 0.9s 0.2s both",
                }}
              >
                {impactStats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="stat-pill"
                    style={{
                      padding: "10px 20px",
                      borderRadius: 30,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(6px)",
                      textAlign: "center",
                      transition: "all 0.22s ease",
                      cursor: "default",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(255, 255, 255, 0.7)",
                        marginTop: 3,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              padding: isMobile ? "24px 16px 64px" : "40px 5px 80px",
            }}
          >
            {/* ── OUR MISSION ─────────────────────────────────── */}
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(133,74,154,0.08)",
                boxShadow: "0 2px 18px rgba(0,0,0,0.06)",
                overflow: "hidden",
                marginBottom: 32,
              }}
            >
              <Row gutter={0} align="middle">
                <Col xs={24} md={12}>
                  <img
                    src={img42}
                    alt="Our Mission"
                    style={{
                      width: "100%",
                      height: isMobile ? 240 : 420,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <div
                    style={{ padding: isMobile ? "32px 24px" : "48px 44px" }}
                  >
                    <SectionTag>Our Mission</SectionTag>
                    <SectionTitle>Bridging Gaps, Building Futures</SectionTitle>
                    <Divider />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.97rem",
                        color: "#555",
                        lineHeight: 1.9,
                        marginBottom: 20,
                      }}
                    >
                      Our mission is to tackle social injustices, provide
                      critical resources to vulnerable communities, and foster
                      opportunities for personal and communal growth. We work
                      tirelessly to bridge gaps in education, health, and access
                      to essential resources.
                    </p>
                    <div
                      style={{
                        padding: "16px 20px",
                        borderRadius: 10,
                        background: primaryDim,
                        borderLeft: `4px solid ${primary}`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "1.05rem",
                          color: primary,
                          margin: 0,
                          lineHeight: 1.7,
                        }}
                      >
                        "Everyone deserves a chance to thrive — regardless of
                        where they started."
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* ── CAUSES GRID ─────────────────────────────────── */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <SectionTag>What We Address</SectionTag>
              <SectionTitle>Our Core Causes</SectionTitle>
              <Divider centered />
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.97rem",
                  color: "#777",
                  maxWidth: 560,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                We believe small actions lead to significant change. Every
                contribution touches countless lives and empowers communities to
                thrive.
              </p>
            </div>

            <Row gutter={[20, 20]} style={{ marginBottom: 40 }}>
              {causes.map(({ icon, title, desc, stat }) => (
                <Col key={title} xs={24} sm={12} lg={8}>
                  <div
                    className="cause-card"
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      border: "1px solid rgba(133,74,154,0.08)",
                      boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
                      padding: "28px 24px",
                      height: "100%",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                      }}
                    >
                      <div
                        className="cause-card-icon"
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 10,
                          flexShrink: 0,
                          background: primaryDim,
                          border: `1px solid ${primaryMid}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: primary,
                          fontSize: 20,
                          transition: "all 0.25s ease",
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "#1a1a1a",
                            margin: "0 0 6px",
                          }}
                        >
                          {title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.85rem",
                            color: "#777",
                            lineHeight: 1.7,
                            margin: "0 0 12px",
                          }}
                        >
                          {desc}
                        </p>
                        <span
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: primary,
                            background: primaryDim,
                            border: `1px solid ${primaryMid}`,
                            borderRadius: 20,
                            padding: "3px 12px",
                          }}
                        >
                          {stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* ── WHY IT MATTERS (image strip) ────────────────── */}
            <div
              style={{
                background: `linear-gradient(160deg, ${dark} 0%, #1a0a22 50%, ${dark} 100%)`,
                borderRadius: 20,
                border: `1px solid rgba(133,74,154,0.15)`,
                overflow: "hidden",
                marginBottom: 32,
                padding: "40px 0 32px",
              }}
            >
              <div style={{ textAlign: "center", padding: "0 32px 28px" }}>
                <SectionTag>Why It Matters</SectionTag>
                <SectionTitle light>Impact Beyond Measure</SectionTitle>
                <div
                  style={{
                    width: 44,
                    height: 3,
                    background: `linear-gradient(90deg, ${primary}, #a066bc)`,
                    borderRadius: 2,
                    margin: "0 auto 16px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.97rem",
                    color: "rgba(255,255,255,0.55)",
                    maxWidth: 560,
                    margin: "0 auto",
                    lineHeight: 1.85,
                  }}
                >
                  We believe that small actions can lead to significant change.
                  Every drop of support contributes to a sea of impact —
                  touching countless lives and empowering communities to thrive.
                </p>
              </div>

              {/* Scrolling image strip */}
              <div style={{ overflow: "hidden", padding: "0 0 8px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    animation: "scrollContinuous 18s linear infinite",
                  }}
                >
                  {[...stripImages, ...stripImages].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`impact-${i}`}
                      className="strip-img"
                      style={{
                        width: 220,
                        height: 160,
                        objectFit: "cover",
                        borderRadius: 10,
                        flexShrink: 0,
                        outline: "3px solid transparent",
                        transition: "transform 0.3s ease, outline 0.2s ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── HOW YOU CAN HELP ────────────────────────────── */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <SectionTag>Get Involved</SectionTag>
              <SectionTitle>How You Can Help</SectionTitle>
              <Divider centered />
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.97rem",
                  color: "#777",
                  maxWidth: 520,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Whether through volunteering, donating, or simply spreading the
                word — your support creates a ripple effect of hope and lasting
                change.
              </p>
            </div>

            <Row gutter={[20, 20]} style={{ marginBottom: 40 }}>
              {helpWays.map(({ icon, title, desc, cta, to }) => (
                <Col key={title} xs={24} sm={8}>
                  <div
                    className="help-card"
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      border: "1px solid rgba(133,74,154,0.08)",
                      boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
                      padding: "36px 28px",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: primaryDim,
                        border: `1px solid ${primaryMid}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: primary,
                        fontSize: 24,
                        marginBottom: 20,
                      }}
                    >
                      {icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        margin: "0 0 10px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.87rem",
                        color: "#777",
                        lineHeight: 1.8,
                        margin: "0 0 20px",
                        flex: 1,
                      }}
                    >
                      {desc}
                    </p>
                    <Link
                      to={to}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: primary,
                        background: primaryDim,
                        border: `1px solid ${primaryMid}`,
                        borderRadius: 20,
                        padding: "8px 18px",
                        textDecoration: "none",
                        transition: "all 0.22s ease",
                      }}
                    >
                      {cta} <ArrowRightOutlined style={{ fontSize: 11 }} />
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>

            {/* ── FINAL CTA ────────────────────────────────────── */}
            <div
              style={{
                position: "relative",
                background: `linear-gradient(135deg, #130a1a 0%, #1e0d28 100%)`,
                borderRadius: 20,
                border: `1px solid rgba(133,74,154,0.2)`,
                padding: isMobile ? "44px 28px" : "60px 10px",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 400,
                  height: 250,
                  background: primaryGlow,
                  borderRadius: "50%",
                  filter: "blur(80px)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "15%",
                  right: "15%",
                  height: 3,
                  background: `linear-gradient(90deg, transparent, ${primary}, #a066bc, transparent)`,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <SectionTag>Take Action</SectionTag>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile ? "2rem" : "2.6rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "8px 0 16px",
                    letterSpacing: "0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  Be Part of the Change
                </h2>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.55)",
                    maxWidth: 500,
                    margin: "0 auto 32px",
                    lineHeight: 1.8,
                  }}
                >
                  Together we can transform lives. Join us in our mission to
                  bring hope, education, healthcare, and dignity to those who
                  need it most.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    to="/donate"
                    className="cta-donate"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                      borderRadius: 8,
                      padding: "13px 30px",
                      textDecoration: "none",
                      boxShadow: `0 4px 20px ${primaryGlow}`,
                      transition: "all 0.25s ease",
                    }}
                  >
                    Donate Now <HeartOutlined />
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.75)",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 8,
                      padding: "13px 30px",
                      textDecoration: "none",
                      backdropFilter: "blur(6px)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    Volunteer <TeamOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}

export default Causes;
