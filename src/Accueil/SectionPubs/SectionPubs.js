



import "./SectionPubs.css" ;

import ImageSlider from "./ImageSlider";



const SectionPubs = () => {
  
    const slides = [
        { url: "./image-3.jpg", title: "beach" },
        { url: "./image-2.jpg", title: "boat" },
        { url: "./image-2.jpg", title: "forest" },
        { url: "./image-4.jpg", title: "city" },
        { url: "./image-5.jpg", title: "italy" },
      ];

      const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="SectionPubs d-flex">
    <div style={containerStyles}>
    <ImageSlider slides={slides} />
  </div>
  <div>
  <div className="S-2">
  <div>
  <img src="./Section Pub/Section_Pub_2.png" />
  </div>
  </div>

  <div className="S-3">
  <div>
  <img src="./Section Pub/Section_Pub_3.png" />
  </div>
  </div>
  </div>
    </div>
  )
};

export default SectionPubs;







