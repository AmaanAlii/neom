import React from "react";
import "./Legal.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import Footer from "../../Layout/Footer/Footer";

function Legal() {
  const pagesData = {
    description:
      "At our company, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.",
    sections: [
      {
        heading: "Information Collection and Use",
        content:
          "We may collect various types of information from you when you interact with our website or services. This information may include your name, email address, contact information, demographic data, and any other information you provide voluntarily. We use this information to personalize your experience, provide the services you request, improve our website functionality, and send you relevant communications.",
      },
      {
        heading: "Data Security",
        content:
          "We take security measures to protect your personal information from unauthorized access, use, or disclosure. We employ industry-standard techniques to safeguard the confidentiality and integrity of your data. These measures include encryption, secure storage, and restricted access to authorized personnel only.",
      },
      {
        heading: "Information Sharing",
        content:
          "We do not sell, trade, or transfer your personal information to third parties without your consent. However, we may share your data with trusted partners or service providers who assist us in operating our website or providing our services. These partners are bound by confidentiality agreements and are only granted access to the information necessary to perform their tasks.",
      },
      {
        heading: "Cookies and Tracking Technologies",
        content:
          "Our website may use cookies and similar tracking technologies to enhance your experience and gather information about your behavior on our site. These technologies collect non-personal information such as your IP address, browser type, and pages visited. You can choose to disable cookies through your browser settings, although this may limit certain functionalities of our website.",
      },
      {
        heading: "External Websites",
        content:
          "Our website may contain links to external sites that are not operated by us. We are not responsible for the privacy practices or content of these sites. We recommend reviewing the privacy policies of any third-party websites you visit.",
      },
      {
        heading: "Children's Privacy",
        content:
          "Our services are not intended for users under the age of 13. We do not knowingly collect or store personal information from children. If we become aware that a child under",
      },
    ],
  };

  const { description, sections } = pagesData;
  return (
    <div className="Page-Section">
      <NavigationButtons currentPage="Legal" />
      <div className="Page-SubSection">
        <div className="Page-Heading-Section">
          <div className="Page-Heading">
            <h1>Legal</h1>
          </div>
          <div className="Page-SubHeading">
            <h4>Update 19/02023</h4>
          </div>
        </div>
        <div className="Page-Content">
          <p>{description}</p>
          {sections.map((section, index) => (
            <div className="Page-Sections" key={index}>
              <h2>{`${index + 1}. ${section.heading}:`}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
        <div className="Page-Content">
          <p>{description}</p>
          {sections.map((section, index) => (
            <div className="Page-Sections" key={index}>
              <h2>{`${index + 1}. ${section.heading}:`}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
        <div className="Page-Content">
          <p>{description}</p>
          {sections.map((section, index) => (
            <div className="Page-Sections" key={index}>
              <h2>{`${index + 1}. ${section.heading}:`}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Legal;
