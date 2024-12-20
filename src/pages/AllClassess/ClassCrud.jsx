import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const ClassCrud = ({singleData}) => {

    const{_id,image,title,teacherName,price,description,total_enrolment} = singleData || {}
    const navigate = useNavigate()
    const handleClick = (id) =>{
        navigate(`/class-details/${id}`)
    }
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:border dark:border-white">
        <img
            className="object-cover w-full h-56"
            src={image}
            alt="avatar"
        />

        <div className="space-y-2 p-4">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</p>
            <p className="text-sm text-gray-700 uppercase font-semibold dark:text-white">{teacherName}</p>
            <p className="text-sm text-gray-700 dark:text-white">price: <span className='font-bold'>{price}</span></p>
            <p className="text-sm text-gray-700 dark:text-white">{description}</p>
            <p className="text-sm text-gray-700 dark:text-white">total enroll: <span className="font-bold">({total_enrolment})</span> </p>
           
            <button onClick={()=>handleClick(_id)} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Enroll Now</button>
        </div>
    </div>
    );
};
// props-type validation
ClassCrud.propTypes = {
    singleData: PropTypes.object,
};
export default ClassCrud;