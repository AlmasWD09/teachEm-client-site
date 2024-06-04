import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";




const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSocialLogin = async(media) =>{
         try {
            await media()
            .then(result=>{

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                    role: 'student',
                }
                axiosPublic.post('/user/api/create', userInfo)
                .then(res =>{
                    console.log(res.data);
                    toast.success(' login successfull')
                    navigate(from, { replace: true });
                })
            })

        } catch (error) {
            toast.error("Login failed:", error)
        }
    }
    return (
        <>

            <div className="space-y-3">

            <div className="flex justify-center">
            <button
            onClick={()=>handleSocialLogin(googleLogin)}
            className=" flex items-center bg-green-200 rounded-lg p-1 px-4 my-3">
                <p className="text-2xl"><FcGoogle /></p>
                 Continue with Google
                 </button>
            </div>
            <div className="flex items-center">
            </div>
            </div>
        </>
    );
};

export default SocialLogin;