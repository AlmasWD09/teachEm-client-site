import { Dialog, DialogPanel } from "@headlessui/react";
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { Controller } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import toast from "react-hot-toast";

const FeedbackModal = ({ isOpen, setIsOpen, }) => {
    const { user } = useAuth()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const { register, reset, handleSubmit,control } = useForm()

    const onSubmit = async (data) => {
        const feedbackInfo = {
            name: user?.displayName,
            photo: user?.photoURL,
            description: data.description,
            rating:data.rating,
            feedbackId: id,
        }
        console.log(typeof(feedbackInfo.rating));
        const res = await axiosSecure.post('/feedback/api/create', feedbackInfo)
        console.log(res.data);

        if(res.data.insertedId){
            toast.success('assignment create successfully')
            reset()
            setIsOpen(false)
        }
    }
    return (
        <div className="bg-gray-100">
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 bg-gray-100">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="lg:max-w-6xl space-y-4 border bg-white p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">rating</label>
                                <Controller
                                    name="rating"
                                    control={control}
                                    defaultValue={0}
                                    render={({ field }) => (
                                        <ReactStars
                                            {...field}
                                            count={5}
                                            onChange={(newRating) => field.onChange(newRating)}
                                            size={24}
                                            activeColor="#0055d2"
                                        />
                                    )}
                                />
                            </div>

                            <div className="w-full  mt-4">
                                <label className="text-gray-700 dark:text-gray-200">Description</label>
                                <textarea name="description" id=""
                                    {...register("description", { required: true })}

                                    className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                                </textarea>
                            </div>

                            <div className="flex justify-end gap-5 mt-6">
                                {/* <button onClick={() => setIsOpen(false)} className="px-4 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md bg-gray-400">cancel</button> */}

                                <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Send</button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};
// props-type validation
FeedbackModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
};
export default FeedbackModal;