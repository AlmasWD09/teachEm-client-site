
import { useState } from 'react'
import UpdatedModal from "../../../../components/Modal/UpdateModal/UpdatedModal";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'



const MyClassCrud = ({ singleClass, user, closeModal, refetch }) => {
    let [isOpen, setIsOpen] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { _id, image, title, price, description, status } = singleClass || {}


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${title} is deleted to the menu.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const menuRes = await axiosSecure.delete(`/class/api/delete/${id}`);
                if (menuRes.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <div className="flex bg-gray-200 rounded-lg shadow-xl dark:bg-slate-800">
                <div className="flex justify-center items-center px-4 ">
                    <div
                        className="w-40 rounded-lg"
                    >
                        <img className='h-50' src={image} alt="" />
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
                            <span className="bg-gray-800 text-white px-2 rounded-lg">{status}</span>
                        </div>
                    </div>

                    <div className="flex mt-2 items-center justify-between">

                    </div>

                    <div className="flex justify-between mt-3 items-center">
                        <Link to={`/dashboard/details/${_id}`}>
                            <button
                                className={`px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform ${status === 'pending' ? 'bg-red-200 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 focus:bg-gray-700'}`}
                                disabled={status === 'pending'}>
                                Details
                            </button>
                        </Link>
                        
                        <div className="flex gap-3">
                            <button onClick={() => setIsOpen(true)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-green-500 rounded dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-500 focus:outline-none focus:bg-green-500 dark:focus:bg-green-500">update</button>

                            {/* update modal */}
                            <UpdatedModal
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                singleClass={singleClass}
                                closeModal={closeModal}
                                refetch={refetch}
                            />
                            <button
                                onClick={() => handleDelete(_id)}
                                className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-500 rounded dark:bg-red-500 hover:bg-red-500 dark:hover:bg-red-500 focus:outline-none focus:bg-gray-700 dark:focus:bg-red-500">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// props-type validation
MyClassCrud.propTypes = {
    singleClass: PropTypes.object,
    user: PropTypes.object,
    closeModal: PropTypes.func,
    refetch: PropTypes.func,
  };
export default MyClassCrud;