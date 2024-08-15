
import { useNavigate } from "react-router-dom";
import useEnrollClass from "../../../../hooks/useEnrollClass";


const MyEnrollClass = () => {
    const navigate = useNavigate()
    const [enrollClass] = useEnrollClass()

    // handle click 
    const handleClick = (id) =>{
        navigate(`/dashboard/my-enroll-dtails/${id}`)
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    enrollClass.map(singleClass => <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                        key={singleClass._id}
                    >
                        <img
                            className=" object-cover w-full h-56"
                            src={singleClass.image}
                            alt="avatar"
                        />

                        <div className="space-y-2 p-4">
                            <p className="text-sm text-gray-700 dark:text-gray-200">{singleClass.title}</p>
                            <p className="text-sm text-gray-700 dark:text-gray-200">Post: {singleClass.paymentUserName}</p>
                            <button 
                            onClick={()=>handleClick(singleClass._id)}
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Continue</button>

                        </div>
                    </div>)
                }
            </div>
        </>

    );
};

export default MyEnrollClass;