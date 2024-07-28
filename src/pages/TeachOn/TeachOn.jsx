import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const TeachOn = () => {
const {user} = useAuth()
const axiosSecure = useAxiosSecure()
    const { register,reset, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const teachInfo={
            name:data.name,
            email:data.email,
            title:data.title,
            photo:data.photo,
            experience:data.experience,
            category:data.category,
            status:'pending',
            role:'student'
        }
        const menuRes = await axiosSecure.post('/requested/api/create', teachInfo);
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
            // reset();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.title} is Add to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }
    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">

                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Name</label>
                        <input id="" name="name" type="text"
                        defaultValue={user?.displayName || 'Not FUND'}
                        readOnly={user?.displayName || 'Not FUND'}
                        {...register("name", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Title</label>
                        <input id="" name="title" type="text" {...register("title", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Email</label>
                        <input id="" name="email" type="email"
                        defaultValue={user?.email}
                        readOnly={user?.email}
                        {...register("email", { required: true })}
                         className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                        <input
                            type="photoURL"
                            name="photo"
                            id="photo"
                            defaultValue={user?.photoURL || 'https://i.ibb.co/ncyN8Qg/404.webp'}
                            readOnly={user?.photoURL || 'https://i.ibb.co/ncyN8Qg/404.webp'}
                            {...register("photo", { required: true })}
                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
                        />
                    </div>
                    {/* *************** */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Experience</label>

                        <select defaultValue="default" {...register('experience', { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <option disabled value="default"></option>
                            <option value="beginner">Beginner</option>
                            <option value="exprenced">Exprenced</option>
                            <option value="high-lavel">High Level</option>
                        </select>
                    </div>
                    {/* *************** */}
                    <div>
                            <label className="text-gray-700 dark:text-gray-200" >Category</label>

                            <select defaultValue="default" {...register('category', { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled value="default"></option>
                                <option value="web-design">Web Design</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="ethical-hacking">Ethical Hacking</option>
                                <option value="seo-marketing">Seo Marketing</option>
                              
                            </select>
                        </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Submit for review</button>
                </div>
            </form>
        </section>
    );
};

export default TeachOn;