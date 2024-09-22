import { useNavigate } from "react-router-dom";
import Container from "../../../Shared/Container/Container";


const TeachInfo = () => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/contact-us')
    }
    return (
        <>
        <div className="relative bg-hero-bg object-cover bg-center  text-white flex justify-center items-center py-36">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800 to-slate-800 opacity-80"></div>
            <Container>
                <div className="relative z-10 text-center space-y-3">
                <p>innovative online learning platform professionals with high-quality education anytime, anywhere.</p>
                <h2 className="lg:text-3xl uppercase font-semibold max-w-7xl">Earn recognized certifications that showcase your achievements.</h2>
                <h2 className="lg:text-4xl uppercase font-semibold">+(01704995802..)</h2>
                </div>
            </Container>
        </div>

        <div className="bg-primary/50 text-white py-6">
          <Container>
          <div className="flex flex-col lg:flex-row justify-center gap-10">
          <h2 className="text-2xl md:text-3xl">Learn from professionals who bring real-world experience to the classroom.</h2>
          <button
          onClick={handleNavigate}
          className="bg-primaryGray text-slate-900 hover:bg-primary hover:text-white px-8 py-2 rounded-full uppercase">Contact Us</button>
          </div>
          </Container>
        </div>
        </>
    );
};

export default TeachInfo;