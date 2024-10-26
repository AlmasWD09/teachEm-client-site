import { useNavigate } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

const NotFound = () => {
    const navigate = useNavigate()
    const { mode } = useTheme();
    const handleGoBack = () => {
        navigate(-1)
    }
    const handleHomePage = () => {
        navigate('/')
    }
    return (
        <>
            <div className={`h-screen flex justify-center items-center ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className="text-center space-y-3 ">
                            <h1 className="text-3xl font-semibold ">{"IT LOOKS LIKE YOU'RE LOST..."}</h1>
                            <h1 className="text-9xl font-semibold  text-primary">404</h1>
                            <p>It looks like nothing was found at this location. You can either go back <br /> to the last page or go to homepage.</p>
                            <div className="flex justify-center gap-3">
                                <button
                                    onClick={handleGoBack}
                                    className="border-2 border-primary px-4 py-2 rounded-lg font-semibold my-3 hover:bg-primary hover:text-white">Go Back
                                </button>
                                <button
                                    onClick={handleHomePage}
                                    className="border-2 border-primary px-4 py-2 rounded-lg font-semibold my-3 hover:bg-primary hover:text-white">HomePage
                                </button>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default NotFound;