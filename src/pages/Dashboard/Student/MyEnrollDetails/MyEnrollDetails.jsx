import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FeedbackModal from "../../../../components/Modal/FeedbackModal";


const MyEnrollDetails = () => {
    const {id} = useParams()
    const axiosPublic = useAxiosPublic();
    const [isOpen,setIsOpen] = useState(false)

const handleClick = () =>{
   setIsOpen(true)
}


const {data: assignmentData = []} = useQuery({
    queryKey: ['assignment-data',id], 
    queryFn: async() =>{
        const res = await axiosPublic.get(`/assignment/api/get/${id}`);
        return res.data;
    }
   
})
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>TeaceEm || My-enroll-details</title>
            </Helmet>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                       <div title="click now" className="">
                       <button 
                       onClick={handleClick}
                       className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">TER(feedback)</button>
                        <FeedbackModal isOpen={isOpen} setIsOpen={setIsOpen} />
                       </div>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Title
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        DeadLine
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    assignmentData?.map(assignment => <tr key={assignment._id}>
                                        
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{assignment.title}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{assignment.description}</p>
                                        </td>
                                       
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{assignment.deadline}</p>
                                        </td>
                                

                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                ></span>
                                                <button
                                                    className='relative'>Submit</button>
                                            </span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEnrollDetails;