
import { useNavigate } from "react-router-dom";
import useEnrollClass from "../../../../hooks/useEnrollClass";
import useAuth from "../../../../hooks/useAuth";
import LoadindSpenier from "../../../../components/LoadindSpenier";


const MyEnrollClass = () => {
    const {loading} = useAuth();
    const navigate = useNavigate()
    const [enrollClass,isloading] = useEnrollClass()

    // handle click 
    const handleClick = (id) =>{
        navigate(`/dashboard/my-enroll-dtails/${id}`)
    }

  if(loading || isloading) return <LoadindSpenier />
    return (
        <>
          {
            enrollClass.length > 0 ?    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            :
             <div className="h-screen flex justify-center items-center">
                <h2 className="text-2xl font-bold ">Data Not Found</h2>
             </div>
          }
        </>

    );
};

export default MyEnrollClass;