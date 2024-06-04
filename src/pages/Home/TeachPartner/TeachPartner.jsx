import Container from "../../../Shared/Container/Container";
import logo01 from "../../../assets/partner-logo/logo01.jpg"


const TeachPartner = () => {
    return (
        <Container>
            <div className=" h-[200px] flex flex-col md:flex-row gap-4">
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo01} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo01} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo01} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo01} alt="" /></div>
                <div className="lg:w-1/5  flex justify-center items-center"><img className="w-3/4 h-3/4" src={logo01} alt="" /></div>
            </div>
        </Container>
    );
};

export default TeachPartner;