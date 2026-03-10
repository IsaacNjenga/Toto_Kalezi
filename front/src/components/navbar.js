import { useEffect, useState } from "react";
import { Drawer, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import {
  CloseOutlined,
  FacebookFilled,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  XOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import logo from "../assets/images/new_logo3.PNG";
import FooterContent from "./footer";
import { useUser } from "../contexts/UserContext";

const { Header, Content, Footer } = Layout;

const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.15)";
const primaryGlow = "rgba(133,74,154,0.35)";
const dark = "#0a0c10";

const menuItems = [
  { key: 1, label: "Home", path: "/" },
  { key: 2, label: "About", path: "/about" },
  { key: 3, label: "Our Cause", path: "/causes" },
  { key: 4, label: "Contact Us", path: "/contact" },
  { key: 5, label: "Gallery", path: "/gallery" },
  { key: 6, label: "Donate", path: "/donate" },
];

// Minimal style tag — only for pseudo-elements & hover states unreachable via inline styles
const pseudoStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 14px;
    right: 14px;
    height: 2px;
    background: ${primary};
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
  }
  .nav-link:hover { color: #fff !important; }
  .nav-link:hover::after { transform: scaleX(1); }
  .social-btn:hover { background: ${primaryDim} !important; color: ${primary} !important; }
  .donate-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 22px ${primaryGlow} !important; color: #fff !important; }
  .hamburger-btn:hover { border-color: ${primary} !important; background: ${primaryDim} !important; }
  .drawer-item:hover { background: ${primaryDim} !important; border-color: rgba(133,74,154,0.3) !important; color: ${primary} !important; }
  .drawer-social:hover { border-color: ${primary} !important; color: ${primary} !important; background: ${primaryDim} !important; }
`;

function SocialBtn({ children, onClick }) {
  return (
    <div
      className="social-btn"
      onClick={onClick}
      style={{
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        cursor: "pointer",
        color: "rgb(255, 255, 255)",
        fontSize: 15,
        transition: "background 0.2s, color 0.2s",
      }}
    >
      {children}
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="nav-link"
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.78)",
        padding: "8px 14px",
        borderRadius: 6,
        position: "relative",
        textDecoration: "none",
        transition: "color 0.2s ease",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Link>
  );
}

function DrawerItem({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="drawer-item"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "13px 16px",
        borderRadius: 8,
        marginBottom: 4,
        textDecoration: "none",
        fontFamily: "'Outfit', sans-serif",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.7)",
        border: "1px solid transparent",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </Link>
  );
}

function DrawerSocial({ children, onClick }) {
  return (
    <div
      className="drawer-social"
      onClick={onClick}
      style={{
        width: 38,
        height: 38,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        border: "1px solid rgba(133,74,154,0.2)",
        color: "rgba(255,255,255,0.45)",
        fontSize: 16,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const { isMobile } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((o) => !o);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSize = scrolled ? 60 : isMobile ? 76 : 110;

  return (
    <>
      <style>{pseudoStyles}</style>
      <Layout style={{ minHeight: "100vh" }}>
        <div
          style={{
            background: `linear-gradient(90deg, ${dark} 0%, #0f0d14 100%)`,
            borderBottom: "1px solid rgba(133,74,154,0.2)",
            height: scrolled ? 0 : 44,
            opacity: scrolled ? 0 : 1,
            overflow: "hidden",
            pointerEvents: scrolled ? "none" : "auto",
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "0" : "0 32px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12.5,
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.5)",
            transition: "height 0.35s ease, opacity 0.3s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "#fff",
              }}
            >
              <MailOutlined style={{ color: "#fff", fontSize: 13 }} />
              totokalezifoundation20@gmail.com
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "#fff",
              }}
            >
              <PhoneOutlined style={{ color: "#fff", fontSize: 13 }} />
              +254-768-969772
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <SocialBtn
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@elder-evmiriamwairimu-aris6453",
                )
              }
            >
              <YoutubeFilled />
            </SocialBtn>
            <SocialBtn
              onClick={() => window.open("https://x.com/totokalezi?s=11")}
            >
              <XOutlined />
            </SocialBtn>
            <SocialBtn
              onClick={() =>
                window.open(
                  "https://web.facebook.com/totokalezifoundation/?_rdc=1&_rdr#",
                )
              }
            >
              <FacebookFilled />
            </SocialBtn>
          </div>
        </div>

        {/* ── Main Header ── */}
        <Header
          style={{
            position: "fixed",
            top: scrolled || isMobile ? 0 : 44,
            left: 0,
            width: "100%",
            zIndex: 1000,
            height: "auto",
            lineHeight: "unset",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            background: scrolled ? "rgba(10,9,14,0.88)" : "transparent",
            backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
            boxShadow: scrolled
              ? `0 1px 0 rgba(133,74,154,0.2), 0 8px 32px rgba(0,0,0,0.5)`
              : "none",
            transition:
              "top 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Logo */}
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Toto Kalezi Foundation"
                style={{
                  width: logoSize,
                  height: logoSize,
                  borderRadius: 10,
                  objectFit: "cover",
                  margin: "6px 0",
                  transition: "width 0.3s ease, height 0.3s ease",
                }}
              />
            </Link>

            {/* Desktop Nav */}
            {!isMobile && (
              <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                {menuItems.map(({ key, label, path }) =>
                  label === "Donate" ? (
                    <Link
                      key={key}
                      to={path}
                      className="donate-btn"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                        padding: "9px 22px",
                        borderRadius: 6,
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        boxShadow: `0 2px 14px ${primaryGlow}`,
                        marginLeft: 8,
                      }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <NavLink key={key} to={path}>
                      {label}
                    </NavLink>
                  ),
                )}
              </div>
            )}

            {/* Hamburger */}
            {isMobile && (
              <div
                className="hamburger-btn"
                onClick={toggleDrawer}
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  border: "1px solid rgba(133,74,154,0.28)",
                  background: primaryDim,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <MenuOutlined style={{ color: primary, fontSize: 18 }} />
              </div>
            )}
          </div>
        </Header>

        {/* ── Mobile Drawer ── */}
        <Drawer
          placement="right"
          width={300}
          onClose={toggleDrawer}
          open={drawerOpen}
          title={
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: primary,
                letterSpacing: "0.04em",
              }}
            >
              Toto Kalezi Foundation
            </span>
          }
          closeIcon={
            <CloseOutlined
              style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}
            />
          }
          styles={{
            header: {
              background: "#0f0d14",
              borderBottom: "1px solid rgba(133,74,154,0.15)",
              padding: "18px 24px",
            },
            body: { background: "#0f0d14", padding: "24px 20px" },
          }}
        >
          <nav>
            {menuItems.map((item) => (
              <DrawerItem key={item.path} to={item.path} onClick={toggleDrawer}>
                {item.label}
              </DrawerItem>
            ))}
          </nav>

          <Link
            to="/donate"
            onClick={toggleDrawer}
            style={{
              display: "block",
              textAlign: "center",
              marginTop: 16,
              padding: "13px",
              background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
              borderRadius: 8,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              boxShadow: `0 4px 18px ${primaryGlow}`,
            }}
          >
            ✦ Give Now
          </Link>

          <div
            style={{
              height: 1,
              background: "rgba(133,74,154,0.15)",
              margin: "24px 0",
            }}
          />

          <div
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 12,
            }}
          >
            Follow Us
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <DrawerSocial
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@elder-evmiriamwairimu-aris6453",
                )
              }
            >
              <YoutubeFilled />
            </DrawerSocial>
            <DrawerSocial
              onClick={() => window.open("https://x.com/totokalezi?s=11")}
            >
              <XOutlined />
            </DrawerSocial>
            <DrawerSocial
              onClick={() =>
                window.open(
                  "https://web.facebook.com/totokalezifoundation/?_rdc=1&_rdr#",
                )
              }
            >
              <FacebookFilled />
            </DrawerSocial>
          </div>

          <div
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,0.2)",
              fontSize: 11,
              fontFamily: "'Outfit', sans-serif",
              lineHeight: "1.8",
            }}
          >
            <div>totokalezifoundation20@gmail.com</div>
            <div>+254-768-969772</div>
          </div>
        </Drawer>

        <Content
          style={{ margin: 0, minHeight: "100vh", background: "#f2f5fa" }}
        >
          <Outlet />
        </Content>

        <Footer style={{ background: "#000", padding: 0, margin: 0 }}>
          <FooterContent />
        </Footer>
      </Layout>
    </>
  );
}

export default Navbar;
