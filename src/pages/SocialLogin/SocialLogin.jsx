import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useTheme from "../../hooks/useTheme";





const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const theme = useTheme()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                // console.log(res.user);
                toast.success('login successfulled')
                navigate(from, { replace: true })
            })
    }
    return (
        <>

            <div className="space-y-3">

                <div className="flex justify-center">
                    <button
                        onClick={() => handleSocialLogin(googleLogin)}
                        className=" flex items-center bg-green-200 dark:bg-slate-800 rounded-lg p-1 px-4 my-3">
                        <p className="text-2xl"><FcGoogle className="mr-2"/></p>
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