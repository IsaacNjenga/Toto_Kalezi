import React from "react";
import { Row, Col, Image, FloatButton, Badge } from "antd";
import Navbar from "../components/navbar";
import { allGalleryImages, galleryVideos } from "../assets/data/data";
import "../assets/css/gallery.css";
import Footer from "../components/footer";
import ZoomMotion from "../components/motion";

function Gallery() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [currentMedia, setCurrentMedia] = useState(null);

  // // Function to open modal with selected media
  // const showMedia = (media) => {
  //   setCurrentMedia(media);
  //   setIsModalVisible(true);
  // };

  return (
    <>
      <ZoomMotion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>
        <div className="gallery-container">
          <div className="gallery-page-image">
            <div className="navbar-element">
              <Navbar />
            </div>
            <div className="gallery-content">
              <div className="gallery-header">
                <h2 className="gallery-header-subtitle">
                  ~ We are proud of what we have achieved together ~
                </h2>
              </div>
            </div>
          </div>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            A Glimpse of Our Work
          </h1>
          <div className="gallery-background">
            <Row gutter={[16, 16]} justify="center">
              {galleryVideos.map((video, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <video
                    controls
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      cursor: "pointer",
                      height: "300px",
                    }}
                    //onClick={() => showMedia(video.video)}
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>
                </Col>
              ))}
              {allGalleryImages.map((image) => (
                <Col xs={12} sm={20} md={30} lg={6} key={image.id}>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <Badge.Ribbon
                      text={image.banner}
                      color="#8942a0"
                      style={{ position: "absolute", top: 1, right: 1 }}
                    >
                      <Image
                        src={image.picture}
                        alt={`Gallery-${image.id}`}
                        style={{
                          width: "100%",
                          height: "350px",
                          borderRadius: "7px",
                          cursor: "pointer",
                          objectFit: "cover",
                        }}
                      />
                    </Badge.Ribbon>
                  </div>
                </Col>
              ))}
            </Row>

            {/* <Modal
          open={isModalVisible}
          footer={null}
          onCancel={() => setIsModalVisible(false)}
          centered
        >
          {currentMedia &&
            (currentMedia.includes(".mp4") ? (
              <video controls style={{ width: "100%" }}>
                <source src={currentMedia} type="video/mp4" />
              </video>
            ) : (
              <img
                src={currentMedia}
                alt="Gallery Item"
                style={{ width: "100%" }}
              />
            ))}
        </Modal> */}
          </div>
        </div>
        <Footer />
      </ZoomMotion>
    </>
  );
}

export default Gallery;
