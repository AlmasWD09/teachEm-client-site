
import { useState } from 'react'
import UpdatedModal from "../../../../components/Modal/UpdateModal/UpdatedModal";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";



const MyClassCrud = ({ singleClass, closeModal, refetch }) => {
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
        <>
            <div >
                <div className='relative flex flex-col lg:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg shadow  md:max-h-[550px] hover:bg-gray-100'>
                    <div className='relative lg:w-full'>
                        <img className='object-cover w-full rounded-t-lg h-full lg:w-96 md:rounded-none md:rounded-t-lg' src={image} alt="" />
                        <span className='absolute bg-secondery text-white  px-2 py-2 flex justify-center items-center top-0 rounded-l-md'>{status}</span>
                    </div>

                    <div className='p-4 space-y-2'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        {
                            description?.length > 70 ? <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description.slice(0, 70)} <span className="text-primary semifont-bold cursor-pointer">More...</span></p>
                                :
                                <p>{description}</p>
                        }
                        <div className='flex justify-between'>
                            <div>
                                <p>Price: <span className='font-bold'>{price}</span></p>
                                <Link to={`/dashboard/details/${_id}`}>
                                    <button
                                        className={`px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg  uppercase transition-colors duration-300 transform ${status === 'pending' ? 'bg-red-200 cursor-not-allowed rounded' : 'bg-gray-800 rounded hover:bg-secondery focus:bg-gray-700'}`}
                                        disabled={status === 'pending'}>
                                        Details
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col cursor-pointer gap-1">
                                <span
                                    onClick={() => setIsOpen(true)}
                                    className=''><FiEdit className='text-2xl text-green-600' />
                                </span>
                                {/* update modal here.. */}
                                <UpdatedModal
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    singleClass={singleClass}
                                    closeModal={closeModal}
                                    refetch={refetch}
                                />
                                <span
                                    onClick={() => handleDelete(_id)}
                                    className=''><TbTrashXFilled className='text-2xl text-red-500' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
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