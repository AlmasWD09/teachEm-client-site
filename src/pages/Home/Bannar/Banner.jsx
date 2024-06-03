import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
        <h1>banner </h1>
           <Carousel>
                <div className="bg-red-400">
                    {/* <img src={img1} /> */}
                </div>
                <div className="bg-green-400">
                    {/* <img src={img2} /> */}
                </div>
                <div className="bg-yellow-400">
                    {/* <img src={img3} /> */}
                </div>
                <div className="bg-pink-400">
                    {/* <img src={img4} /> */}
                </div>
                <div className="bg-sky-800">
                    {/* <img src={img5} /> */}
                </div>
                <div className="bg-blue-400">
                    {/* <img src={img6} /> */}
                </div>
            </Carousel>  
        </>
    );
};

export default Banner;