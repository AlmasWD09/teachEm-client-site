import { Dialog, DialogPanel } from "@headlessui/react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const UpdatedModal = ({singleClass,refetch,closeModal, isOpen, setIsOpen }) => {
    const{user} = useAuth()
    const { _id,image, title, price, description } = singleClass || {}
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const { register, reset, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async(data) => {

        const updateItem = {
            title:data.title,
            price: parseFloat(data.price),
            description: data.description,
        }
    
        
        const menuRes = await axiosSecure.patch(`/class/api/update/${_id}`, updateItem);
        if (menuRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.title} is update to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
            closeModal()
            setIsOpen(false)
            
        }
    }
    return (
        <> 
           <div className="">
           <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="lg:max-w-3xl space-y-4 border bg-white p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">

                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Title</label>
                                    <input id="" name="title" type="text"
                                    defaultValue={title}
                                    {...register("title", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">price</label>
                                    <input id="" name="price" type="number" 
                                    defaultValue={price}
                                    {...register("price", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">User Name</label>
                                    <input id="" name="name" type="text"
                                    defaultValue={user?.displayName || ''}
                                    readOnly={user?.displayName}
                                    className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">User Email</label>
                                    <input id="" name="email" type="email" 
                                    defaultValue={user?.email}
                                    readOnly={user?.email}
                                    className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                                </div>


                                <div>
                                    <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                  
                                        className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Description</label>
                                    <textarea name="description" id="" 
                                    defaultValue={description}
                                    {...register("description", { required: true })}
                                    className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                                    </textarea>
                                </div>

                            </div>

                            <div className="flex justify-end gap-5 mt-6">
                                <button onClick={() => setIsOpen(false)}  className="px-4 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md bg-gray-400">cancel</button>

                                <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Update class</button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
           </div>
        </>
    );
};

export default UpdatedModal;