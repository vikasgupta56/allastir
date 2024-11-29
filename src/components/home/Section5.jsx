import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className="w-full flex items-center flex-col justify-center px-[2.5vw]">
      <h2 className="sm:text-[6.5vw] text-[3vw] font-semibold text-center">Our Clientele</h2>
      <div className="w-full sm:h-[20vh] h-[30vh]">
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // Screens smaller than 640px
            0: {
              slidesPerView: 3, // Display 2 slides for very small screens
              spaceBetween: 5,
            },
            // Screens between 640px and 767px
            639: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // Screens between 768px and 1023px
            767: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            // Screens 1024px and larger
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-[50%] h-[60%] object-contain" src="https://www.allastir.com/images/9wanbury.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-[50%] h-[60%] object-contain" src="https://www.allastir.com/images/11aris.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-[50%] h-[60%] object-contain" src="https://www.allastir.com/images/12akums.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-[50%] h-[60%] object-contain" src="https://www.allastir.com/images/13Cipla1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-[50%] h-[60%] object-contain" src="https://www.allastir.com/images/18Unison1.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
