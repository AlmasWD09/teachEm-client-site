import { Helmet } from "react-helmet-async";
import { useState } from "react";
import FeedbackModal from "../../../../components/Modal/FeedbackModal";
import useEnrollDetails from "../../../../hooks/useEnrollDetails";




const MyEnrollDetails = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [enrollDetails] = useEnrollDetails();

    const handleClick = () => {
        setIsOpen(true)
    }

    // handle submit
    const handleSubmit = async() =>{

       
    }
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
                                        className='px-5 py-3 bg-white dark:bg-gray-900 dark:text-white  border-b border-gray-200 dark:border-gray-600 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Title
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white dark:bg-gray-900 dark:text-white  border-b border-gray-200 dark:border-gray-600 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white dark:bg-gray-900 dark:text-white  border-b border-gray-200 dark:border-gray-600 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        DeadLine
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white dark:bg-gray-900 dark:text-white  border-b border-gray-200 dark:border-gray-600 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    enrollDetails?.map(assignment => <tr key={assignment._id}>

                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white text-sm'>
                                            <p className='text-gray-900 dark:text-white whitespace-no-wrap'>{assignment.title}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white text-sm'>
                                            <p className='text-gray-900 dark:text-white whitespace-no-wrap'>{assignment.description}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white text-sm'>
                                            <p className='text-gray-900 dark:text-white whitespace-no-wrap'>{`${(new Date(assignment.date).toLocaleDateString())}`}</p>
                                        </td>


                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white text-sm'>
                                            <button 
                                            onClick={handleSubmit}
                                            className="px-4 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Submit</button>
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