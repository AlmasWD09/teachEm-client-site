
import { useNavigate } from "react-router-dom";
import useEnrollClass from "../../../../hooks/useEnrollClass";
import useAuth from "../../../../hooks/useAuth";
import LoadindSpenier from "../../../../components/LoadindSpenier";


const MyEnrollClass = () => {
    const { loading } = useAuth();
    const navigate = useNavigate()
    const [enrollClass, isloading] = useEnrollClass()

    // handle click 
    const handleClick = (id) => {
        navigate(`/dashboard/my-enroll-dtails/${id}`)
    }

    if (loading || isloading) return <LoadindSpenier />
    return (
        <>
            <div>
                <h1 className="text-xl md:text-2xl text-secondery font-bold text-center py-10 md:py-5  uppercase">Enroll Classes</h1>

                {
                    enrollClass.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            enrollClass.map(singleClass => <div className="max-w-sm overflow-hidden border dark:border-gray-600 rounded-lg shadow-2xl dark:bg-gray-800"
                                key={singleClass._id}
                            >
                                <img
                                    className=" object-cover w-full h-56"
                                    src={singleClass.image}
                                    alt="avatar"
                                />

                                <div className="space-y-2 p-4 dark:bg-gray-900">
                                    <p className="text-sm text-gray-700 dark:text-gray-200">{singleClass.title}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-200">Post: {singleClass.paymentUserName}</p>
                                    <button
                                        onClick={() => handleClick(singleClass._id)}
                                        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Continue</button>

                                </div>
                            </div>)
                        }
                    </div>
                        :
                        <div className="flex justify-center items-center py-48">
                            <h2 className="text-2xl font-bold ">Data Not Found</h2>
                        </div>
                }
            </div>
        </>
    );
};

export default MyEnrollClass;