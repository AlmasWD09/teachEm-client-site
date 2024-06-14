import { Link } from "react-router-dom";


const Instructor = () => {
    return (
        <div className=" h-[400px] flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="w-[50%] flex justify-end">
                <img className="h-[300px]" src="https://i.ibb.co/Sn9JL86/Screenshot-9.png" alt="" />
            </div>
            <div className="w-[50%] space-y-2">
               <h1 className="text-2xl font-semibold">Become an Instructor</h1>
               <p className="max-w-[350px]">Conveniently transition client-focused mindshare with robust expertise. Efficiently provide access to collaborative web-readiness</p>
               <Link to='/teach-on'>
               <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Start teaching today</button>
               </Link>
               
            </div>
        </div>
    );
};

export default Instructor;