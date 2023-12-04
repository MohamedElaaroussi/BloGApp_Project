

import "./SlidesTendance.css";
import { Navigation, Pagination, Scrollbar, A11y, slideToClickedSlide } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SlidesTendance = () => {

  return (
    <div className="Slides-Tendance">
      <div>
        <span className="Titre-Tendance">
          TENDANCE :
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
        <img src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />

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
              <img src="https://images.unsplash.com/photo-1531736275454-adc48d079ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />
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
              <img src="https://images.unsplash.com/photo-1562832275-4b5d7650c888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />
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
              <img src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />
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
              <img src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />
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
              <img src="https://images.unsplash.com/photo-1555298472-8c43a95ddb8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="video" />
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


export default SlidesTendance;