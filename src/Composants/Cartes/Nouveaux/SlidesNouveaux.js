
import "./SlidesNouveaux.css";

import { Navigation, Pagination, Scrollbar, A11y, slideToClickedSlide } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SlidesNouveaux = () => {
    return (
        <div className="Slides-Nouveaux">
      <div>
        <span className="Titre-Nouveaux">
          NOUVEAUX :
        </span>
      </div>
      <div id="owl-slider-2" className="slider-wrapper owl-carousel">
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={6}
      
    
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
        <div  className="item video-box-wrapper">
        <div className="img-preview">
        <img src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="video" />

            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Minimal Photography</p>
              <p className="video-description-subheader">By July</p> 
              <p className="video-description-info ms-5"> <span>1 hour ago</span></p>
              
            </div>
        </div>
           
          </SwiperSlide>
          <SwiperSlide >
          <div className="item video-box-wrapper">
          <div className="img-preview">
              <img src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80" alt="video" />
            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Puppet Theatre</p>
              <p className="video-description-subheader">By July</p> 
              <p className="video-description-info ms-5"> <span className="italic">1 hour ago</span></p>
              
            </div>
          </div>
            
          </SwiperSlide>
          <SwiperSlide >
          <div className="item video-box-wrapper">
          <div className="img-preview">
              <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80" alt="video" />
            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Road Trip</p>
              <p className="video-description-subheader">By Wallace</p> 
              <p className="video-description-info ms-5"> <span className="italic">1 hour ago</span></p>
              
            </div>
          </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div  className="item video-box-wrapper">
            <div className="img-preview">
              <img src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80" alt="video" />
            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Young Folks</p>
              <p className="video-description-subheader">By Peter</p> 
              <p className="video-description-info ms-5"> <span className="italic">1 hour ago</span></p>
              
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className="item video-box-wrapper">
          <div className="img-preview">
              <img src="https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3280&q=80" alt="video" />
            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Minimal Photography</p>
              <p className="video-description-subheader">By July</p> 
              <p className="video-description-info ms-5"> <span className="italic">1 hour ago</span></p>
             
            </div>
          </div>
            
          </SwiperSlide>
          <SwiperSlide >
           <div className="item video-box-wrapper">
           <div className="img-preview">
           <img src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />

            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Puppet Theatre</p>
              <p className="video-description-subheader">By July</p> 
              <p className="video-description-info ms-5"> <span className="italic">1 hour ago</span></p>
          
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className="item video-box-wrapper">
          <div className="img-preview">
              <img src="https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />
            </div>
            <div className="video-description-wrapper">
              <p className="video-description-header">Road Trip</p>
              <p className="video-description-subheader">By Wallace</p> 
              <p className="video-description-info ms-5"> <span className="italic">1 hour ago</span></p>
             
            </div>
          </div>
       
          </SwiperSlide>



        </Swiper>



      </div>
    </div>
    );
}



export default SlidesNouveaux;
