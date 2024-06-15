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
            <div className=" h-[200px] flex flex-col md:flex-row  bg-white">
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo02} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo03} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo04} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo05} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo06} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo07} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo08} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo09} alt="" /></div>
            </div>
        </Container>
    );
};

export default TeachPartner;