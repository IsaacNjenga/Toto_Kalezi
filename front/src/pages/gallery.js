import React, { useEffect, useState, useMemo } from "react";
import { Image as AntImage, FloatButton, Spin, Tabs, Tag } from "antd";
import {
  PlayCircleFilled,
  PictureOutlined,
  VideoCameraOutlined,
  FolderOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import ZoomMotion from "../components/motion";
import heroImg from "../assets/images/gallery_images/55.jpeg";
import { useUser } from "../contexts/UserContext";
import useFetchWebsite from "../hooks/fetchWebsite";
import useFetchAllMedia from "../hooks/fetchAllMedia";
import useFetchAllAlbums from "../hooks/fetchAllAlbums";

const primary = "#854a9a";
const dark = "#0a080e";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .g-tile { position: relative; border-radius: 10px; overflow: hidden; cursor: pointer; }
  .g-tile img { display: block; width: 100%; transition: transform 0.45s ease; }
  .g-tile:hover img { transform: scale(1.06); }
  .g-tile-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(8,4,15,0.88) 0%, rgba(8,4,15,0.15) 50%, transparent 100%);
    opacity: 0; transition: opacity 0.3s ease;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 14px; border-radius: 10px;
  }
  .g-tile:hover .g-tile-overlay { opacity: 1; }
  .g-tile-ring {
    position: absolute; inset: 0; border-radius: 10px; z-index: 2;
    border: 2px solid transparent; transition: border-color 0.3s ease; pointer-events: none;
  }
  .g-tile:hover .g-tile-ring { border-color: rgba(133,74,154,0.5); }

  .g-album { position: relative; border-radius: 14px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .g-album:hover { transform: translateY(-5px); box-shadow: 0 24px 56px rgba(133,74,154,0.35); }
  .g-album img { display: block; width: 100%; transition: transform 0.5s ease; }
  .g-album:hover img { transform: scale(1.07); }

  .g-video { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; background: #111; }
  .g-video video { display: block; width: 100%; transition: transform 0.4s ease; }
  .g-video:hover video { transform: scale(1.03); }
  .g-video-play {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    font-size: 40px; color: rgba(255,255,255,0.85);
    pointer-events: none; transition: all 0.25s ease;
    filter: drop-shadow(0 2px 12px rgba(133,74,154,0.6));
  }
  .g-video:hover .g-video-play { color: ${primary}; transform: translate(-50%,-50%) scale(1.15); }

  .g-tabs .ant-tabs-tab { font-family: 'Outfit', sans-serif !important; font-size: 13px !important; font-weight: 500 !important; }
  .g-tabs .ant-tabs-tab-active .ant-tabs-tab-btn { color: ${primary} !important; }
  .g-tabs .ant-tabs-ink-bar { background: ${primary} !important; }
  .g-tabs .ant-tabs-nav::before { border-color: rgba(133,74,154,0.15) !important; }

  .g-rule { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
  .g-rule-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }

  @media (max-width: 640px) {
    .g-hero-title { font-size: 1.4rem !important; }
    .g-stat-val   { font-size: 1.6rem !important; }
  }
`;

function Masonry({ items, columns, gap = 14, renderItem }) {
  const cols = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));
  return (
    <div style={{ display: "flex", gap, alignItems: "flex-start" }}>
      {cols.map((col, ci) => (
        <div
          key={ci}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap }}
        >
          {col.map((item, ii) => renderItem(item, ii))}
        </div>
      ))}
    </div>
  );
}

function SectionRule({ icon, label }) {
  return (
    <div className="g-rule">
      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
        {icon}
      </span>
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div className="g-rule-line" />
    </div>
  );
}

function MediaTile({ item }) {
  return (
    <div className="g-tile">
      <div className="g-tile-ring" />
      <AntImage
        src={item.url}
        alt={item.title}
        style={{ width: "100%", borderRadius: 10, display: "block" }}
        wrapperStyle={{ display: "block" }}
        preview={{ mask: false }}
      />
      <div className="g-tile-overlay" style={{ zIndex: 1 }}>
        {item.banner && (
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(133,74,154,0.9)",
              marginBottom: 4,
            }}
          >
            {item.banner}
          </span>
        )}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
}

function AlbumCard({ album }) {
  const count = album.media?.length ?? 0;
  return (
    <div className="g-album">
      <div
        style={{ position: "relative", overflow: "hidden", borderRadius: 14 }}
      >
        {album.cover ? (
          <img
            src={album.cover}
            alt={album.title}
            style={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              background: "rgba(133,74,154,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FolderOutlined
              style={{ fontSize: 36, color: "rgba(133,74,154,0.35)" }}
            />
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(8,4,15,0.92) 0%, rgba(8,4,15,0.25) 55%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 16px 14px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 5px",
              lineHeight: 1.3,
            }}
          >
            {album.title}
          </p>
          {album.description && (
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.45)",
                margin: "0 0 8px",
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {album.description}
            </p>
          )}
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 20,
              background: "rgba(133,74,154,0.28)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(133,74,154,0.4)",
              color: "#d4a8e8",
            }}
          >
            {count} {count === 1 ? "photo" : "photos"}
          </span>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [activeTab, setActiveTab] = useState("albums");
  const { isMobile, isImageReady, setIsImageReady } = useUser();
  const { website, loading } = useFetchWebsite();
  const { media, loading: ml } = useFetchAllMedia();
  const { albums, loading: al } = useFetchAllAlbums();

  const galleryHero = website?.find((w) => w.pageName === "Gallery");
  const cols = isMobile ? 2 : 3;

  useEffect(() => {
    if (galleryHero?.heroImg) {
      const img = new Image();
      img.src = galleryHero.heroImg;
      img.onload = () => setIsImageReady(true);
    }
  }, [galleryHero?.heroImg]); // eslint-disable-line

  const images = useMemo(
    () => media?.filter((m) => m.type === "image") ?? [],
    [media],
  );
  const videos = useMemo(
    () => media?.filter((m) => m.type === "video") ?? [],
    [media],
  );
  const totalPhotos = images.length;
  const totalVideos = videos.length;

  const tabItems = [
    {
      key: "albums",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <FolderOutlined /> Albums
          <Tag
            style={{
              margin: 0,
              fontSize: 10,
              padding: "0 6px",
              lineHeight: "18px",
              background: `${primary}22`,
              color: primary,
              border: `1px solid ${primary}44`,
            }}
          >
            {albums?.length ?? 0}
          </Tag>
        </span>
      ),
    },
    {
      key: "all",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <AppstoreOutlined /> Photos
          <Tag
            style={{
              margin: 0,
              fontSize: 10,
              padding: "0 6px",
              lineHeight: "18px",
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.45)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {totalPhotos}
          </Tag>
        </span>
      ),
    },
    {
      key: "videos",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <VideoCameraOutlined /> Videos
          <Tag
            style={{
              margin: 0,
              fontSize: 10,
              padding: "0 6px",
              lineHeight: "18px",
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.45)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {totalVideos}
          </Tag>
        </span>
      ),
    },
  ];

  if (ml || al)
    return <Spin size="large" fullscreen tip="Loading..." color="#fff" />;

  return (
    <>
      <style>{globalStyles}</style>
      <ZoomMotion>
        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>

        <div style={{ background: dark, minHeight: "100vh" }}>
          {/* ── HERO ── */}
          <div
            style={{
              position: "relative",
              backgroundImage:
                loading || !galleryHero
                  ? `url(${heroImg})`
                  : `url(${galleryHero.heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: isMobile ? 130 : 190,
              paddingBottom: isMobile ? 90 : 150,
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
                  "linear-gradient(160deg, rgba(8,4,15,0.4) 0%, rgba(60,20,80,0.22) 50%, rgba(8,4,15,0.62) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 120,
                background: `linear-gradient(to bottom, transparent, ${dark})`,
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
                padding: "0 24px",
                animation: "heroFadeUp 0.9s ease both",
              }}
            >
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(133,74,154,0.85)",
                  margin: "0 0 14px",
                }}
              >
                Our Story in Photos
              </p>
              <h1
                className="g-hero-title"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isMobile ? "1.6rem" : "2.4rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#fff",
                  margin: "0 0 32px",
                  lineHeight: 1.4,
                  letterSpacing: "0.03em",
                  textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                }}
              >
                ~ We are proud of what we have achieved together ~
              </h1>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: isMobile ? 28 : 56,
                  flexWrap: "wrap",
                  animation: "heroFadeUp 0.9s 0.2s both",
                }}
              >
                {[
                  { value: albums?.length ?? 0, label: "Albums" },
                  { value: totalPhotos, label: "Photos" },
                  { value: totalVideos, label: "Videos" },
                ].map(({ value, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div
                      className="g-stat-val"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: isMobile ? "1.6rem" : "2.2rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {value}+
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECTION TITLE ── */}
          <div
            style={{
              textAlign: "center",
              padding: isMobile ? "28px 20px 0" : "44px 40px 0",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 10px",
              }}
            >
              A Glimpse of Our Work
            </h2>
            <div
              style={{
                width: 44,
                height: 3,
                background: `linear-gradient(90deg, ${primary}, #a066bc)`,
                borderRadius: 2,
                margin: "0 auto",
              }}
            />
          </div>

          {/* ── TABS ── */}
          <Tabs
            className="g-tabs"
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
            style={{ marginTop: 28 }}
            tabBarStyle={{
              padding: `0 ${isMobile ? 16 : 40}px`,
              background: "transparent",
              margin: 0,
            }}
          />

          {/* ── CONTENT ── */}
          <div
            style={{ padding: isMobile ? "20px 14px 64px" : "28px 40px 80px" }}
          >
            {/* Albums */}
            {activeTab === "albums" && (
              <div style={{ animation: "fadeIn 0.4s ease both" }}>
                {!albums?.length ? (
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.25)",
                      textAlign: "center",
                      padding: "60px 0",
                    }}
                  >
                    No albums yet.
                  </p>
                ) : (
                  <Masonry
                    items={albums}
                    columns={cols}
                    gap={isMobile ? 10 : 14}
                    renderItem={(album) => (
                      <AlbumCard key={album._id} album={album} />
                    )}
                  />
                )}
              </div>
            )}

            {/* All photos */}
            {activeTab === "all" && (
              <div style={{ animation: "fadeIn 0.4s ease both" }}>
                <AntImage.PreviewGroup>
                  {images.length > 0 && (
                    <>
                      <SectionRule
                        icon={<PictureOutlined />}
                        label="From the Library"
                      />
                      <div style={{ marginBottom: 32 }}>
                        <Masonry
                          items={images}
                          columns={cols}
                          gap={isMobile ? 10 : 14}
                          renderItem={(item) => (
                            <MediaTile key={item._id} item={item} />
                          )}
                        />
                      </div>
                    </>
                  )}
                </AntImage.PreviewGroup>
                {!images.length && (
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.25)",
                      textAlign: "center",
                      padding: "60px 0",
                    }}
                  >
                    No photos yet.
                  </p>
                )}
              </div>
            )}

            {/* Videos */}
            {activeTab === "videos" && (
              <div style={{ animation: "fadeIn 0.4s ease both" }}>
                {videos.length > 0 && (
                  <>
                    <SectionRule
                      icon={<VideoCameraOutlined />}
                      label="Videos"
                    />
                    <div style={{ marginBottom: 32 }}>
                      <Masonry
                        items={videos}
                        columns={isMobile ? 1 : 2}
                        gap={isMobile ? 10 : 14}
                        renderItem={(item) => (
                          <div key={item._id} className="g-video">
                            <video
                              controls
                              style={{
                                width: "100%",
                                display: "block",
                                borderRadius: 12,
                              }}
                            >
                              <source src={item.url} type="video/mp4" />
                            </video>
                            <PlayCircleFilled className="g-video-play" />
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background:
                                  "linear-gradient(to top, rgba(8,4,15,0.85), transparent)",
                                padding: "20px 14px 12px",
                                borderRadius: "0 0 12px 12px",
                                pointerEvents: "none",
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color: "#fff",
                                  margin: 0,
                                }}
                              >
                                {item.title}
                              </p>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </>
                )}

                {!videos.length && (
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.25)",
                      textAlign: "center",
                      padding: "60px 0",
                    }}
                  >
                    No videos yet.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </ZoomMotion>
    </>
  );
}

export default Gallery;
