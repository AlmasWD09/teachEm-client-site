import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useTheme from "../../hooks/useTheme";
import useAxiosPublic from "../../hooks/useAxiosPublic";





const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic()
    const theme = useTheme()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('login successfulled')
                navigate(from, { replace: true })
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL,
                    phone: res.user.phoneNumber,
                    status: 'pending',
                    role: 'student'
                }
                const responce  = axiosPublic.put('/user/api/create', userInfo)
                console.log(responce);
            })

    }
    return (
        <>
            <div className="space-y-3">
                <div className="flex items-center mt-6 -mx-2">
                    <button
                        type="button"
                        onClick={() => handleSocialLogin(googleLogin)}
                        className="w-full px-6 py-2 mx-2 text-sm font-medium border dark:border-gray-600 transition-colors duration-300 transform  rounded-lg hover:bg-secondery focus:bg-secondery focus:outline-none hover:border-secondery"
                    >
                        <span className="flex items-center justify-center"><FcGoogle className="mx-2 text-2xl"/> Sign in with Google</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;