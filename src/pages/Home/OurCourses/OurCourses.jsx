// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFeedback from '../../../hooks/useFeedback';


import Container from '../../../Shared/Container/Container';
import Slider from "react-slick";
import PrevArrow from "../../../components/SliderArrow/PrevArrow";
import NextArrow from "../../../components/SliderArrow/NextArrow";
import { useState } from "react";
const OurCourses = () => {
    const [feedbackData] = useFeedback();
    const [progress, setProgress] = useState(0);

    console.log(feedbackData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,



        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <>
            <section className='mt-20 bg-primaryGray py-16'>
                <Container>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-primary capitalize lg:text-3xl">Student Feedback</h1>
                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Feedback helps improve learning experiences by providing valuable insights on course content, teaching methods, and overall engagement.
                        </p>
                    </div>

                    <div className='relative  mt-24 lg:mt-8'>
                        <Slider {...settings}>
                            {
                                feedbackData.map((singleData, idx) => {
                                    return (
                                        <div key={idx}
                                            className="h-[350px] bg-white overflow-hidden rounded-lg" >
                                            <img
                                                className=" object-cover w-full h-48"
                                                src={singleData.photo}
                                                alt="avatar" />
                                            <div className="space-y-2 p-4">
                                                <p className="font-semibold text-gray-800 uppercase  md:text-lg">{singleData.name}</p>
                                                <p className="text-sm text-gray-700 dark:text-gray-200">{singleData.description}</p>
                                                <p className="text-sm text-gray-700 dark:text-gray-200">rating : {singleData.rating}</p>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        {/* progress here... */}
                        {/* <div className="h-[2px] bg-gray-400 w-[250px] absolute -top-[15px] right-0">
                            <div className="bg-primary absolute h-[100%] transition-all" style={{ width: `${progress}%` }}></div>
                        </div> */}
                    </div>


                </Container>
            </section>
        </>
    );
};

export default OurCourses;