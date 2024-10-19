import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddClass = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit} = useForm()
    
    const onSubmit = async(data) => {

const imageFile = { image: data.image[0] }
const res = await axiosPublic.post(image_hosting_api, imageFile, {
    headers: {
        'content-type': 'multipart/form-data'
    }
});


if (res.data.success) {
    // now send the menu item data to the server with the image url
    const createItem = {
        title:data.title,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
        teacherEmail:user?.email,
        teacherName:user?.displayName,
        status: 'pending',
        assignment: 0,
        total_enroll:0,
        submit:0,
    }

    
    const menuRes = await axiosSecure.post('/class/api/create', createItem);
    if (menuRes.data.insertedId) {
        // reset();
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${data.title} is Add to the menu.`,
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/dashboard/my-class')
    }

}



}
    return (
        <section className="w-full p-6 lg:mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 md:mt-20 px-4 mt-10 md:px-8 lg:px-0 lg:mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className=" p-4">

                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Title</label>
                        <input id="" name="title" type="text" {...register("title", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">price</label>
                        <input id="" name="price" type="number" {...register("price", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">User Name</label>
                        <input id="" name="name" type="text" defaultValue={user?.displayName} readOnly={user?.displayName} className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">User Email</label>
                        <input id="" name="email" type="email" defaultValue={user?.email} readOnly={user?.email} className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>


                    <div>
                        <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            {...register("image", { required: true })}
                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea name="description" id="" {...register("description", { required: true })} className="resize-none block w-full px-4 py-4 md:py-8 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                        </textarea>
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Add class</button>
                </div>
            </form>
        </section>
    );
};

export default AddClass;