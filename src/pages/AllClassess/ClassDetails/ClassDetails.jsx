import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ClassDetails = () => {
    // /class/api/get
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const { data: singleClass = [], refetch } = useQuery({
        queryKey: ['classe', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/api/get/${id}`);
            return res.data;
        }
    })
    const { image, title, name, price, description, enrollment } = singleClass || {}

    return (
        <div className="mt-10 flex justify-center">
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img
                    className="object-cover w-full h-[400px]"
                    src={image}
                    alt="Article"
                />

                <div className="p-6">
                    <div>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">{name || 'NOT FUND'}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">price:{price}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">total enroll: <span className="font-bold">{enrollment}</span> </p>
                    </div>
                    <Link to='/payment-page'>
                    <button  className="px-8 py-2.5 my-2 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Pay Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;