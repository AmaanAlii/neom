import React from "react";
import "./AboutUs.css";
import AboutUsCardImg from "../../Assest/AboutUs-Card-Vector.svg";
import WhyChooseUsImg from "../../Assest/AboutUs-WhyChooseUs-Vector.svg";
import TrustImg from "../../Assest/AboutUs-Trust-Vector.svg";
import Footer from "../../Layout/Footer/Footer";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";

function AboutUs() {
  return (
    <div className="AboutUs-Section">
      <NavigationButtons currentPage="About Us" />
      <div className="AboutUs-SubSection">
        <div className="AboutUs-Intro-Section">
          <div className="AboutUs-Intro-BackDrop"></div>
          <div className="AboutUs-Intro-Text">
            <span>
              Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam
              consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
              imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id
            </span>
          </div>
        </div>
        <div className="AboutUs-Para">
          <span>
            Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam
            consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
            imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id
            arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros
            maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis
            sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus
            rutrum, lobortis sed mauris. Integer congue, sem elementum varius
            tristique, erat nulla rutrum risus, a imperdiet nulla lorem
            fermentum erat. Pellentesque elementum justo at velit fringilla, eu
            feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula
            eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus
            sapien. Proin hendrerit lacus turpis. Maecenas congue metus id
            turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut
            ullamcorper rutrum justo, at blandit eros maximus ut. Integer non
            tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin.
            Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.
          </span>
        </div>
        <div className="AboutUs-Card">
          <div className="AboutUs-Card-Img">
            <img src={AboutUsCardImg} alt="Business Analysis Image" />
          </div>
          <div className="AboutUs-Card-Text">
            <span>
              Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam
              consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
              imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
            </span>
          </div>
        </div>
        <div className="AboutUs-Details-Card">
          <div className="AboutUs-Details-Card-Left">
            <div className="AboutUs-Details-Card-Heading">
              <h1>Why choose us ?</h1>
            </div>
            <div className="AboutUs-Details-Card-Description">
              <span>
                Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam
                consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
                imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae Maecenas congue metus id turpis iaculis mattis. Sed
                pellentesque id arcu id scelerisque. Ut ullamcorper rutrum
                justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris
                risus, commodo et luctus rutrum, lobortis sed mauris. Integer
                congue, sem elementum varius tristique, erat nulla rutrum risus,
                a imperdiet nulla lorem fermentum erat. Pellentesque elementum
                justo at velit fringilla, eu feugiat erat fermentum. Vivamus
                libero dolor, porta eget vehicula eu, iaculis id lacus. Sed
                interdum convallis sapien, eget faucibus sapien. Proin hendrerit
                lacus turpis. Maecenas congue metus id turpis iaculis mattis.
                Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum
                justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris
                risus, commodo et luctus rutrum, lobortis sed mauris.
              </span>
            </div>
          </div>
          <div className="AboutUs-Details-Card-Right">
            <div className="AboutUs-Details-Card-Img">
              <img src={WhyChooseUsImg} alt="WhyChooseUs Image" />
            </div>
          </div>
        </div>
        <div className="AboutUs-Details-Card-2">
          <div className="AboutUs-Details-Card-Left">
            <div className="AboutUs-Details-Card-Heading">
              <h1>Trusted online shopping</h1>
            </div>
            <div className="AboutUs-Details-Card-Description">
              <span>
                Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam
                consequat ut ex vel finibus. Nunc eget molestie purus. Fusce
                imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae Maecenas congue metus id turpis iaculis mattis. Sed
                pellentesque id arcu id scelerisque. Ut ullamcorper rutrum
                justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris
                risus, commodo et luctus rutrum, lobortis sed mauris. Integer
                congue, sem elementum varius tristique, erat nulla rutrum risus,
                a imperdiet nulla lorem fermentum erat. Pellentesque elementum
                justo at velit fringilla, eu feugiat erat fermentum. Vivamus
                libero dolor, porta eget vehicula eu, iaculis id lacus. Sed
                interdum convallis sapien, eget faucibus sapien. Proin hendrerit
                lacus turpis. Maecenas congue metus id turpis iaculis mattis.
                Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum
                justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris
                risus, commodo et luctus rutrum, lobortis sed mauris.
              </span>
            </div>
          </div>
          <div className="AboutUs-Details-Card-Right">
            <div className="AboutUs-Details-Card-Img">
              <img src={TrustImg} alt="WhyChooseUs Image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
