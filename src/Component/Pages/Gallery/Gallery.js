import React from "react";
import "./Gallery.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import GalleryTopImg1 from "../../Assest/Gallery-TopSection-Image1.png";
import GalleryTopImg2 from "../../Assest/Gallery-TopSection-Image2.png";
import GalleryTopImg3 from "../../Assest/Gallery-TopSection-Image3.png";
import GalleryTopImg4 from "../../Assest/Gallery-TopSection-Image4.png";
import GalleryTopImg5 from "../../Assest/Gallery-TopSection-Image5.png";
import GalleryMidImg from "../../Assest/Gallery-Mid-Image.png";
import Footer from "../../Layout/Footer/Footer";

function Gallery() {
  return (
    <div className="Gallery-Section">
      <NavigationButtons currentPage="Video and Image Gallery" />
      <div className="Gallery-SubSection">
        <div className="Gallery-Image-Section">
          <div className="Gallery-Image">
            <img src={GalleryTopImg1} alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg2} alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg3} alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg4} alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg5} alt="Image" />
          </div>
        </div>
        <div className="Gallery-Image-Section">
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
        </div>
        <div className="Gallery-Image-Section">
          <div className="Gallery-Image">
            <img src={GalleryMidImg} alt="Image" />
          </div>
        </div>

        <div className="Gallery-Image-Section-Bottom">
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
          <div className="Gallery-Image">
            <img src="" alt="Image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
