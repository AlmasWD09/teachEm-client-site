import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const HigestEnrollClassCrud = ({ singleClass }) => {
    const {_id, title, description, image, total_enrolment } = singleClass || {};
    const navigate = useNavigate()

    const handleDetails = (id) =>{
        navigate(`/HigestEnrollClass-details/${id}`)
    }
    return (
        <>
            <div>
                <div className="bg-white ">
                    <div className="bg-white border border-gray-200 rounded-lg shadow ">
                        <img className="rounded-t-lg w-full h-[300px] object-cover object-center" src={image} alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                            {
                                description?.length > 50 ? <p className='font-normal text-gray-700 dark:text-gray-400'>{description.slice(0, 50)}
                                <span onClick={() => handleDetails(_id)} className="text-primary semifont-bold cursor-pointer">More...</span></p>
                                    :
                                    <p>{description}</p>
                            }
                          
                            <p className=" text-lg  font-semibold text-blue-500 mb-3 ">Enroll : ({total_enrolment || 0}) </p>
                            <button
                                onClick={() => handleDetails(_id)}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
// props-type validation
HigestEnrollClassCrud.propTypes = {
    singleClass: PropTypes.array,
};
export default HigestEnrollClassCrud;