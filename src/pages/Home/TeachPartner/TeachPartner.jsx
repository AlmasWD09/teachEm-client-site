import Container from "../../../Shared/Container/Container";
import logo01 from "../../../assets/partner-logo/partnar01.jpg"
import logo02 from "../../../assets/partner-logo/partnar02.jpg"
import logo03 from "../../../assets/partner-logo/partnar03.jpg"
import logo04 from "../../../assets/partner-logo/partnar04.jpg"
import logo05 from "../../../assets/partner-logo/partnar05.jpg"


const TeachPartner = () => {
    return (
        <Container>
            <div className=" h-[200px] flex flex-col md:flex-row ">
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo01} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo02} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo03} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo04} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo05} alt="" /></div>
            </div>
        </Container>
    );
};

export default TeachPartner;