import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ClassCrud = ({singleData}) => {
    const{_id,image,title,name,price,description,enrollment} = singleData || {}
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
            className="object-cover w-full h-56"
            src={image}
            alt="avatar"
        />

        <div className="space-y-2 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-200">{title}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200">{name || 'NOT FUND'}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200">price:{price}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200">total enroll: <span className="font-bold">{enrollment}</span> </p>
            <Link to={`/class-details/${_id}`}>
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Enroll Now</button>
            </Link>
            {/* <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Enroll Now</button> */}
            
        </div>
    </div>
    );
};
// props-type validation
ClassCrud.propTypes = {
    singleData: PropTypes.object,
};
export default ClassCrud;