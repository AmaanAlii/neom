import React from "react";
import "./Homepage.css";
import HeroBanner from "../../Layout/Banner/HeroBanner/HeroBanner";
import Footer from "../../Layout/Footer/Footer";
import VideoSection from "../../Layout/VideoSection/VideoSection";
import CategorySection from "../../Layout/CategorySection/CategorySection";
import OurProductSection from "../../Layout/OurProductSection/OurProductSection";
import AdsSection from "../../Layout/AdsSection/AdsSection";
import LaunchSection from "../../Layout/LaunchSection/LaunchSection";
import InfoSection from "../../Layout/InfoSection/InfoSection";

function Homepage() {
  return (
    <div className="homepage">
      <HeroBanner />
      <InfoSection/>
      <CategorySection />
      <LaunchSection/>
      <OurProductSection/>
      <AdsSection/>
      <VideoSection />
      <Footer />
    </div>
  );
}

export default Homepage;
