import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const AddClass = () => {
    const {user} = useAuth()
    const navigate = useNavigate()






    const {register,reset, handleSubmit,formState: { errors },} = useForm()
    const onSubmit = (data) =>{
        console.log(data);
    }
    // handle add class
    const handleAddClass = () =>{
        navigate('/dashboard/my-class')
    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <form onSubmit={handleSubmit(onSubmit)}  className="mt-5">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Photo URL</label>
                    <input id="photo" name="photo" type="photoURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Title</label>
                        <input id="" name="title" type="text" {...register("title", { required: true })}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">price</label>
                        <input id="" name="price" type="number" {...register("price", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">User Name</label>
                        <input  id="" name="name" type="text" defaultValue={user?.displayName}  className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">User Email</label>
                        <input  id="" name="email" type="email" defaultValue={user?.email} className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea name="description" id="" {...register("description", { required: true })} className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                        </textarea>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button onClick={handleAddClass} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Add class</button>
                </div>
            </form>
        </section>
    );
};

export default AddClass;