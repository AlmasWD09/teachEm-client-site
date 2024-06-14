import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation } from 'swiper/modules';

import img01 from "../../../assets/banner.jpg"
import useClass from '../../../hooks/useClass';


const OurCourses = () => {
    const [classess] =useClass()
// console.log(classess);
    return (
        <>
        <div className='my-10 p-8'>
        <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                  <SwiperSlide><img src={img01} alt="" /></SwiperSlide>
            </Swiper>
        </div>
        </>
    );
};

export default OurCourses;