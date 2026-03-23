import React, { useEffect, useState } from "react";
import { Row, Col, Image as AntImage, FloatButton, Badge, Tabs, Tag } from "antd";
import {
  PlayCircleOutlined,
  PictureOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { allGalleryImages, galleryVideos } from "../assets/data/data";
import ZoomMotion from "../components/motion";
import heroImg from "../assets/images/gallery_images/55.jpeg";
import { useUser } from "../contexts/UserContext";
import useFetchWebsite from "../hooks/fetchWebsite";

const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.14)";
const dark = "#0a080e";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .gallery-img-wrap { position: relative; overflow: hidden; border-radius: 10px; cursor: pointer; }
  .gallery-img-wrap img { transition: transform 0.4s ease !important; display: block; }
  .gallery-img-wrap:hover img { transform: scale(1.06) !important; }
  .gallery-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,5,15,0.75) 0%, transparent 55%);
    opacity: 0; transition: opacity 0.3s ease;
    border-radius: 10px;
    display: flex; align-items: flex-end; padding: 14px;
  }
  .gallery-img-wrap:hover .gallery-img-overlay { opacity: 1; }

  .video-wrap { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; background: #111; }
  .video-wrap video { transition: transform 0.4s ease; display: block; }
  .video-wrap:hover video { transform: scale(1.02); }
  .video-play-icon {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    font-size: 44px; color: rgba(255,255,255,0.85);
    pointer-events: none; transition: all 0.25s ease;
    filter: drop-shadow(0 2px 12px rgba(133,74,154,0.7));
  }
  .video-wrap:hover .video-play-icon { color: ${primary}; transform: translate(-50%,-50%) scale(1.15); }

  .ant-tabs-tab { font-family: 'Outfit', sans-serif !important; font-size: 13px !important; font-weight: 500 !important; letter-spacing: 0.06em !important; }
  .ant-tabs-tab-active .ant-tabs-tab-btn { color: ${primary} !important; }
  .ant-tabs-ink-bar { background: ${primary} !important; }
  .ant-tabs-nav { padding: 0 40px !important; }
  .ant-tabs-nav::before { border-bottom-color: rgba(133,74,154,0.15) !important; }

  .ant-image-preview-img { border-radius: 8px; }
  .ant-badge-ribbon { font-family: 'Outfit', sans-serif !important; font-size: 11px !important; font-weight: 600 !important; letter-spacing: 0.04em !important; }

  @media (max-width: 768px) {
    .gallery-hero-title { font-size: 1.3rem !important; }
    .gallery-stats { gap: 20px !important; }
  }
`;

// ── Masonry layout using CSS columns ────────────────────────────
function MasonryGrid({ children, columns = 4, gap = 16 }) {
  return (
    <div
      style={{
        columnCount: columns,
        columnGap: gap,
        width: "100%",
      }}
    >
      {React.Children.map(children, (child, i) => (
        <div key={i} style={{ breakInside: "avoid", marginBottom: gap }}>
          {child}
        </div>
      ))}
    </div>
  );
}

// ── Section heading ──────────────────────────────────────────────
function SectionHeading({ icon, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 24,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: primaryDim,
          border: `1px solid #fff`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 16,
        }}
      >
        {icon}
      </div>
      <h2
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#fff",
          margin: 0,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "rgba(249, 249, 249, 0.47)",
          marginLeft: 8,
        }}
      />
    </div>
  );
}

function Gallery() {
  const [activeTab, setActiveTab] = useState("all");
  const { isMobile, isImageReady, setIsImageReady } = useUser();
  const { website, loading } = useFetchWebsite();

  const galleryHero = website.find((w) => w.pageName === "Gallery");

  // Use an effect to track when the specific hero URL is actually loaded
  useEffect(() => {
    if (galleryHero?.heroImg) {
      const img = new Image();
      img.src = galleryHero?.heroImg;
      img.onload = () => setIsImageReady(true);
    }
    // eslint-disable-next-line
  }, [galleryHero?.heroImg]);

  // Group images by banner tag for the tab counts
  const bannerGroups = allGalleryImages.reduce((acc, img) => {
    if (img.banner) acc[img.banner] = (acc[img.banner] || 0) + 1;
    return acc;
  }, {});

  const tabItems = [
    {
      key: "all",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <PictureOutlined /> All
          <Tag
            color={primary}
            style={{
              marginLeft: 4,
              fontSize: 10,
              padding: "0 6px",
              lineHeight: "18px",
            }}
          >
            {allGalleryImages.length}
          </Tag>
        </span>
      ),
    },
    ...Object.entries(bannerGroups).map(([banner, count]) => ({
      key: banner,
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {banner}
          <Tag
            color="default"
            style={{
              marginLeft: 4,
              fontSize: 10,
              padding: "0 6px",
              lineHeight: "18px",
            }}
          >
            {count}
          </Tag>
        </span>
      ),
    })),
    {
      key: "videos",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <VideoCameraOutlined /> Videos
          <Tag
            color="default"
            style={{
              marginLeft: 4,
              fontSize: 10,
              padding: "0 6px",
              lineHeight: "18px",
            }}
          >
            {galleryVideos.length}
          </Tag>
        </span>
      ),
    },
  ];

  const filteredImages =
    activeTab === "all" || activeTab === "videos"
      ? allGalleryImages
      : allGalleryImages.filter((img) => img.banner === activeTab);

  return (
    <>
      <style>{globalStyles}</style>
      <ZoomMotion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>

        <div
          style={{
            position: "relative",
            background: "#f5f3f7",
            minHeight: "100vh",
          }}
        >
          {/* ── HERO ─────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              backgroundImage:
                loading || !galleryHero
                  ? `url(${heroImg})`
                  : `url(${galleryHero?.heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: 180,
              paddingBottom: 140,
              overflow: "hidden",
              opacity: isImageReady && !loading ? 1 : 0,
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(160deg, rgba(10, 5, 15, 0.29) 0%, rgba(60, 20, 80, 0.19) 50%, rgba(10, 5, 15, 0.58) 100%)`,
              }}
            />
            {/* Bottom fade into page */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 100,
                background: "linear-gradient(to bottom, transparent, #f5f3f7)",
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

            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                animation: "heroFadeUp 0.9s ease both",
              }}
            >
              <h1
                className="gallery-hero-title"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#fff",
                  margin: "0 auto 20px",
                  maxWidth: 600,
                  letterSpacing: "0.04em",
                  lineHeight: 1.4,
                  textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                }}
              >
                ~ We are proud of what we have achieved together ~
              </h1>

              {/* Stats row */}
              <div
                className="gallery-stats"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 40,
                  flexWrap: "wrap",
                  animation: "heroFadeUp 0.9s 0.2s both",
                }}
              >
                {[
                  { value: allGalleryImages.length, label: "Photos" },
                  { value: galleryVideos.length, label: "Videos" },
                  {
                    value: Object.keys(bannerGroups).length,
                    label: "Categories",
                  },
                ].map(({ value, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {value}+
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255, 255, 255, 0.77)",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT ──────────────────────────────────── */}
          <div style={{ padding: "0 0 64px" }}>
            {/* Page title */}
            <div style={{ textAlign: "center", padding: "40px 24px 8px" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: "0 0 6px",
                  letterSpacing: "0.03em",
                }}
              >
                A Glimpse of Our Work
              </h2>
              <div
                style={{
                  width: 48,
                  height: 3,
                  background: `linear-gradient(90deg, ${primary}, #a066bc)`,
                  borderRadius: 2,
                  margin: "0 auto",
                }}
              />
            </div>

            {/* ── TABS ── */}
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              items={tabItems}
              style={{ marginTop: 0, marginBottom: 0 }}
            />

            <div
              style={{
                background: `linear-gradient(160deg, ${dark} 0%, #1a0a22 40%, ${dark} 100%)`,
                margin: 0,
                padding: "20px 28px",
                boxShadow: `0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(133,74,154,0.2)`,
                border: `1px solid rgba(133,74,154,0.15)`,
              }}
            >
              {/* ── VIDEOS (shown in all tab + videos tab) ── */}
              {(activeTab === "all" || activeTab === "videos") &&
                galleryVideos.length > 0 && (
                  <div style={{ marginBottom: 40 }}>
                    <SectionHeading icon={<VideoCameraOutlined />}>
                      Videos
                    </SectionHeading>
                    <Row gutter={[20, 20]}>
                      {galleryVideos.map((video, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                          <div className="video-wrap">
                            <video
                              controls
                              style={{
                                width: "100%",
                                height: 220,
                                objectFit: "cover",
                                display: "block",
                              }}
                            >
                              <source src={video.video} type="video/mp4" />
                            </video>
                            <PlayCircleOutlined className="video-play-icon" />
                            {/* Bottom gradient label */}
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background:
                                  "linear-gradient(to top, rgba(10,5,15,0.8), transparent)",
                                padding: "20px 12px 10px",
                                pointerEvents: "none",
                              }}
                            >
                              {/* <span
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: 11,
                                  fontWeight: 600,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "rgba(255,255,255,0.6)",
                                }}
                              >
                                {video.title || `Video ${index + 1}`}
                              </span> */}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

              {/* ── IMAGES ── */}
              {activeTab !== "videos" && (
                <div>
                  <SectionHeading icon={<PictureOutlined />}>
                    {activeTab === "all" ? "All Photos" : activeTab}
                  </SectionHeading>

                  {/* Ant Design Image.PreviewGroup for lightbox */}
                  <AntImage.PreviewGroup>
                    <MasonryGrid
                      columns={isMobile ? 2 : 4}
                      gap={isMobile ? 10 : 14}
                    >
                      {filteredImages.map((image) => (
                        <Badge.Ribbon
                          key={image.id}
                          text={image.banner}
                          color={primary}
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            display: image.banner ? "block" : "none",
                          }}
                        >
                          <div className="gallery-img-wrap">
                            <AntImage
                              src={image.picture}
                              alt={`Gallery-${image.id}`}
                              style={{
                                width: "100%",
                                height: isMobile ? 280 : "auto",
                                objectFit: "cover",
                                borderRadius: 10,
                                display: "block",
                              }}
                              preview={{
                                mask: (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: 6,
                                      borderRadius: 10,
                                    }}
                                  >
                                    <PictureOutlined style={{ fontSize: 22 }} />
                                    <span
                                      style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      View
                                    </span>
                                  </div>
                                ),
                              }}
                            />
                            {/* Hover overlay with banner text */}
                            <div className="gallery-img-overlay">
                              {image.banner && (
                                <span
                                  style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.75)",
                                    background: primaryDim,
                                    border: `1px solid rgba(133,74,154,0.3)`,
                                    padding: "3px 10px",
                                    borderRadius: 20,
                                  }}
                                >
                                  {image.banner}
                                </span>
                              )}
                            </div>
                          </div>
                        </Badge.Ribbon>
                      ))}
                    </MasonryGrid>
                  </AntImage.PreviewGroup>

                  {filteredImages.length === 0 && (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "60px 0",
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.95rem",
                      }}
                    >
                      No images in this category yet.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </ZoomMotion>
    </>
  );
}

export default Gallery;
