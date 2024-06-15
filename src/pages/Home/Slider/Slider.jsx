import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

        return (
            <div className='mt-5'>
                <Swiper
              pagination={{
                clickable: true,
                activeClass: 'pagination-active', //active class add
              }}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper">
      
              <SwiperSlide>
                  <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider1 rounded-xl flex justify-end relative'>
                  </div>
              </SwiperSlide>
      
              <SwiperSlide>
                  <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider2 rounded-xl flex justify-end relative'>
                  </div>
              </SwiperSlide>
      
              <SwiperSlide>
                  <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider3 rounded-xl flex justify-end relative'>
                  </div>
              </SwiperSlide>
      
              <SwiperSlide>
                  <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider4 rounded-xl flex justify-end relative'>
                  </div>
              </SwiperSlide>
      
              <SwiperSlide>
                  <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider5 rounded-xl flex justify-end relative'>
                  </div>
              </SwiperSlide>
            </Swiper>
            </div>
    );
};

export default Slider;