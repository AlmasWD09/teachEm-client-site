import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"
// import required modules
import { Autoplay, Pagination,  } from 'swiper/modules';
import Container from '../../../Shared/Container/Container';

const Slider = () => {

    return (
        <div className='pt-24'>
          <Container>
          <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    activeClass: 'pagination-active', //active class add
                }}
              
                loop={true}
                modules={[Autoplay, Pagination, ]}
                className="mySwiper">

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider1 rounded flex justify-end relative'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider2 rounded flex justify-end relative'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider3 rounded flex justify-end relative'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider4 rounded flex justify-end relative'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[70vh] slider5 rounded flex justify-end relative'>
                    </div>
                </SwiperSlide>
            </Swiper>
          </Container>
        </div>
    );
};

export default Slider;