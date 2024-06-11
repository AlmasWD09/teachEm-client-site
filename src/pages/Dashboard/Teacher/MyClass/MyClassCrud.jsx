
import { useState } from 'react'
import UpdatedModal from "../../../../components/Modal/UpdateModal/UpdatedModal";



const MyClassCrud = ({ singleClass,user,closeModal,refetch }) => {
    let [isOpen, setIsOpen] = useState(false)
    const {  image, title, price, description } = singleClass || {}

    return (
        <div>
            <div className="flex bg-gray-200 rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex justify-center items-center px-4 ">
                    <div
                        className="h-40 w-40 rounded-lg"
                    // style={{ backgroundImage: `${image}` }}
                    >
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className="w-2/3 py-4 md:py-4 space-y-3">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>
                    <div className="flex justify-between">
                        <div>
                            <p>{user?.displayName || 'Not Found'}</p>
                            <p>{user?.email}</p>
                        </div>
                        <div>
                            <button className="btn btn-xs">status</button>
                        </div>
                    </div>

                    <div className="flex mt-2 items-center justify-between">

                    </div>

                    <div className="flex justify-between mt-3 items-center">
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            Details
                        </button>
                        <div className="flex gap-3">
                            <button onClick={() => setIsOpen(true)} className="btn-xs bg-green-500 text-white">update</button>

                            {/* update modal */}
                            <UpdatedModal 
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            singleClass={singleClass}
                            closeModal={closeModal}
                            refetch={refetch}
                            />
                            <button className="btn-xs bg-red-500 text-white">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassCrud;