import { useState } from "react";

import "./SectionPubs.css" ;


const slideStyles = {
  width: "540px",
  height: "403px",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginLeft:"-283px",
 

};

const rightArrowStyles = {
  position: "absolute",
  top: "70%",
  transform: "translate(0, -50%)",
  right: "250px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "70%",
  transform: "translate(0, -50%)",
  left: "-280px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
        <ion-icon name="chevron-back-outline"></ion-icon>

        </div>
        <div onClick={goToNext} style={rightArrowStyles}>

        <ion-icon name="chevron-forward-outline"></ion-icon>

        </div>
      </div>
      <div style={slideStylesWidthBackground}>
      
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
          
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            

          <div className="Pub-Fish">
            <div className="m-2">
                <span>
                Découvrez tous les articles qui font l'actualité 
                </span>
            </div>
          
            <div>
                <button  className="bg-green-500 mt-2 ml-20 hover:bg-green-700 text-white py-2 px-4  rounded Connexion">
                    Restez connectés
                </button>
            </div>
           
           
        </div>

          

          </div>


        ))}
        <div>
        
        </div>




      </div>
    </div>
  );
};

export default ImageSlider;