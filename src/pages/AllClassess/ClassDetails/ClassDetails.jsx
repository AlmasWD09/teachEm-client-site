
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import { useState } from 'react'
import { useParams } from "react-router-dom";
import PaymentModal from "../../PaymantPage/PaymentModal";
import useRole from "../../../hooks/useRole";



const ClassDetails = () => {
    const { id } = useParams()
    const [role] = useRole();
     const axiosSecure = useAxiosSecure()
    let [isOpen, setIsOpen] = useState(false)
    const { data: singleClass = [],refetch } = useQuery({
        queryKey: ['classe', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/api/get/${id}`);
            return res.data;
        }
    })
    const { image, title, teacherName, price, description, total_enrolment } = singleClass || {}
    const closeModal = () =>{
        setIsOpen(false)
    }
    return (
        <div className="pt-24 flex justify-center">
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-900">
                <img
                    className="object-cover w-full h-[400px] rounded-t-md"
                    src={image}
                    alt="Article"
                />

                <div className="p-6 space-y-3">
                    <div>
                        <p className="text-lg font-semibold text-gray-700 dark:text-white">{title}</p>
                        <p className="text-sm text-gray-700 dark:text-white">{teacherName}</p>
                        <p className="text-sm text-gray-700 dark:text-white">price:{price}</p>
                        <p className="text-sm text-gray-700 dark:text-white">{description}</p>
                        <p className="text-sm text-gray-700 dark:text-white">total enroll: <span className="font-bold">{total_enrolment}</span> </p>
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        disabled={role === 'teacher' || role === 'admin'}
                        className={`${role === "teacher" || role === "admin" ? 'cursor-not-allowed btn dark:bg-slate-600 dark:text-white/45' : 'px-8 py-2.5 my-2 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary'}`}>Pay Now</button>
                 
                    <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} singleClass={singleClass} refetch={refetch}/>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;

