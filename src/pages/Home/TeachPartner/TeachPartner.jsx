import Container from "../../../Shared/Container/Container";

import logo02 from "../../../assets/partner-logo/photo02.jpg"
import logo03 from "../../../assets/partner-logo/photo03.jpg"
import logo04 from "../../../assets/partner-logo/photo04.png"
import logo05 from "../../../assets/partner-logo/photo05.jpg"
import logo06 from "../../../assets/partner-logo/photo06.jpg"
import logo07 from "../../../assets/partner-logo/photo07.jpg"
import logo08 from "../../../assets/partner-logo/photo08.jpg"
import logo09 from "../../../assets/partner-logo/photo09.jpg"



const TeachPartner = () => {
    return (
        <Container>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8  bg-white lg:mt-10">
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo02} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo03} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo04} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo05} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo06} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo07} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo08} alt="" /></div>
                <div className="flex justify-center items-center"><img className="w-3/4 lg:w-4/5 h-3/4 lg:h-4/5" src={logo09} alt="" /></div>
            </div>
        </Container>
    );
};

export default TeachPartner;