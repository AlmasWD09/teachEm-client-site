
import useFeedback from '../../../hooks/useFeedback';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from '../../../Shared/Container/Container';
const OurCourses = () => {
    const [feedbackData] = useFeedback()
    console.log(feedbackData);
    return (
        <>
           <Container>
           <div className="bg-gray-300 flex justify-center py-4 rounded">
                <h1 className="text-3xl font-semibold ">Feedback For Every Student</h1>
            </div>
            <div className='flex justify-between'>
                <div className='bg-green-400 w-[50%]'>
                    <h1>content</h1>
                </div>
                <div className='bg-gray-200 w-[50%]'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
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
                        className="mySwiper">
                        {
                            feedbackData.map(singleData => <SwiperSlide key={singleData._id}>
                                <div
                                    className=" bg-gray-200 rounded-lg shadow-lg " >
                                    <img
                                        className=" object-cover w-full h-56"
                                        src={singleData.photo}
                                        alt="avatar" />
                                    <div className="space-y-2 p-4">
                                        <p className="text-sm text-gray-700 dark:text-gray-200">{singleData.title}</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-200">{singleData.name}</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-200">rating : {singleData.rating}</p>
                                        <button
                                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Continue</button>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }


                    </Swiper>
                </div>
            </div>
           </Container>
        </>
    );
};

export default OurCourses;

