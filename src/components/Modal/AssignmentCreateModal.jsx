import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const AssignmentCreateModal = ({ isOpen, setIsOpen,refetch }) => {
    const [startDate, setStartDate] = useState(new Date())
    const axiosSecure = useAxiosSecure()
    const {id} = useParams()
    const { register,reset, handleSubmit } = useForm()
    
    // date convert to number Formet
    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [month, day, year].join('/');
    }

    const onSubmit = async (data) => {
        data.deadline = formatDate(startDate);
        const assignmentInfo = {
            title : data.title,
            classId:id,
            description:data.description,
            deadline:data.deadline,
            totalAssignment:0,
            totalSubmit:0,
        }
        const res = await axiosSecure.post('/assignment/api/create',assignmentInfo)
        

        if(res.data.insertedId){
            toast.success('assignment create successfully')
            refetch()
            reset()
            setIsOpen(false)
        }
    }
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="lg:max-w-3xl space-y-4 border bg-white p-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Title</label>
                                <input id="" name="title" type="text"

                                    {...register("title", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700 dark:text-gray-200'>Deadline</label>
                                {/* Date Picker Input Field */}
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>
                        </div>

                        <div className="w-full  mt-4">
                            <label className="text-gray-700 dark:text-gray-200">Description</label>
                            <textarea name="description" id=""
                                {...register("description", { required: true })}

                                className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                            </textarea>
                        </div>

                        <div className="flex justify-end gap-5 mt-6">
                            <button onClick={() => setIsOpen(false)} className="px-4 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md bg-gray-400">cancel</button>

                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Add Assignment</button>
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

// props-type validation
AssignmentCreateModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    refetch: PropTypes.func,
};
export default AssignmentCreateModal;